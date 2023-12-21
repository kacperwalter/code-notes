import type { Maybe } from "@ls-fe/types"
import { randEmail, randPhrase } from "@ngneat/falso"
import type { Page } from "@playwright/test"
import { expect, test } from "@playwright/test"
import type { GetEmailComposerTplResponse } from "../../src/email-composer/data/tpl/response"
import { EMAIL_BODY_DEFAULT_VALUE } from "@ls-fe/email-composer/config"

async function getValueFromStore<T = string>(page: Page, storeName: string, key: string): Promise<T | undefined> {
  return await page.evaluate(([storeName, key]) => {
    const store = window.stores[storeName]

    if (!store) {
      return undefined
    }

    return store[key] as T
  }, [storeName, key])
}

class TestEmailComposerData {
  private data: Maybe<GetEmailComposerTplResponse> = null

  async loadData(page: Page) {
    this.data = await page.evaluate<GetEmailComposerTplResponse>(() => {
      return window.Data as GetEmailComposerTplResponse
    })
  }

  get firstMailFrom() {
    return this.data!.emailComposer.mail_from[0]
  }

  get secondMailFrom() {
    return this.data!.emailComposer.mail_from[1]
  }

  get fullNameTo() {
    return this.data!.emailComposer.mail_to_full_name
  }

  get firstMailTo() {
    return this.data!.emailComposer.recipient_addresses[0]
  }

  get secondMailTo() {
    return this.data!.emailComposer.recipient_addresses[1]
  }
}

test.describe("email-composer", () => {
  const testEmailComposerData = new TestEmailComposerData()

  test.beforeEach(async ({ page }) => {
    await page.goto("/")
  })

  test.describe("From field", () => {
    test("when sender has only 1 email account connected it is statically displayed", async ({ page }) => {
      await testEmailComposerData.loadData(page)

      const emailComposer = await page.getByTestId("email-composer")

      await expect(emailComposer).toBeVisible()

      const fieldFrom = await page.getByTestId("select-email-composer-field-from")

      await expect(fieldFrom).toBeVisible()
      await expect(fieldFrom).toBeDisabled()
      await expect(fieldFrom).toHaveValue(testEmailComposerData.firstMailFrom.id.toString())

      const storedEmail = await getValueFromStore(page, "EmailDraft", "from")

      expect(storedEmail).toBe(testEmailComposerData.firstMailFrom.email)
    })

    test("when sender has more than 1 email account connected it is a select field", async ({ page }) => {
      await page.goto("/?fieldFromVariant=multiple")
      await testEmailComposerData.loadData(page)

      const fieldFrom = await page.getByTestId("select-email-composer-field-from")

      await expect(fieldFrom).toBeVisible()
      await expect(fieldFrom).toBeEnabled()
      await expect(fieldFrom).toHaveValue(testEmailComposerData.firstMailFrom.id.toString())

      const storedEmail = await getValueFromStore(page, "EmailDraft", "from")

      expect(storedEmail).toBe(testEmailComposerData.firstMailFrom.email)
    })

    test("if it's a select field we can select a different email account", async ({ page }) => {
      await page.goto("/?fieldFromVariant=multiple")
      await testEmailComposerData.loadData(page)

      const fieldFrom = await page.getByTestId("select-email-composer-field-from")

      await expect(fieldFrom).toHaveValue(testEmailComposerData.firstMailFrom.id.toString())
      await fieldFrom.selectOption({ value: testEmailComposerData.secondMailFrom.id.toString() })
      await expect(fieldFrom).toHaveValue(testEmailComposerData.secondMailFrom.id.toString())
    })
  })

  test.describe("To field", () => {
    test.describe("When recipient has no email address", () => {
      test.beforeEach(async ({ page }) => {
        await testEmailComposerData.loadData(page)
      })

      test("Full name and input field are displayed", async ({ page }) => {
        const fieldTo = await page.getByTestId("input-email-composer-field-to")

        await expect(fieldTo).toBeVisible()
        await expect(fieldTo).toHaveValue("")

        const recipientFullName = await page.getByText(testEmailComposerData.fullNameTo)

        await expect(recipientFullName).toBeVisible()
      })

      test("Email input field can be filled with an email address", async ({ page }) => {
        const testEmail = randEmail()
        const fieldTo = await page.getByTestId("input-email-composer-field-to")

        await fieldTo.fill(testEmail)

        await expect(fieldTo).toHaveValue(testEmail)

        const storedEmail = await getValueFromStore(page, "EmailDraft", "to")

        expect(storedEmail).toBe(testEmail)
      })
    })

    test.describe("When recipient has 1 email address", () => {
      test.beforeEach(async ({ page }) => {
        await page.goto("/?fieldToVariant=single")
        await testEmailComposerData.loadData(page)
      })

      test("Full name and email address are displayed", async ({ page }) => {
        const fieldTo = await page.getByTestId("select-email-composer-field-to")

        await expect(fieldTo).toBeVisible()
        await expect(fieldTo).toBeDisabled()
        await expect(fieldTo).toHaveValue(testEmailComposerData.firstMailTo.id.toString())

        const recipientFullName = await page.getByText(testEmailComposerData.fullNameTo)

        await expect(recipientFullName).toBeVisible()
      })

      test("Email address is selected by default", async ({ page }) => {
        const storedEmail = await getValueFromStore(page, "EmailDraft", "to")

        expect(storedEmail).toBe(testEmailComposerData.firstMailTo.email)
      })
    })

    test.describe("When recipient has more than 1 email address", () => {
      test.beforeEach(async ({ page }) => {
        await page.goto("/?fieldToVariant=multiple")
        await testEmailComposerData.loadData(page)
      })

      test("Full name and select field are displayed", async ({ page }) => {
        const fieldTo = await page.getByTestId("select-email-composer-field-to")

        await expect(fieldTo).toBeVisible()
        await expect(fieldTo).toBeEnabled()
        await expect(fieldTo).toHaveValue(testEmailComposerData.firstMailTo.id.toString())

        const recipientFullName = await page.getByText(testEmailComposerData.fullNameTo)

        await expect(recipientFullName).toBeVisible()
      })

      test("First email address is selected by default", async ({ page }) => {
        const storedEmail = await getValueFromStore(page, "EmailDraft", "to")

        expect(storedEmail).toBe(testEmailComposerData.firstMailTo.email)
      })

      test("Email can be selected from the select field", async ({ page }) => {
        const fieldTo = await page.getByTestId("select-email-composer-field-to")

        await fieldTo.selectOption({ value: testEmailComposerData.secondMailTo.id.toString() })

        await expect(fieldTo).toHaveValue(testEmailComposerData.secondMailTo.id.toString())

        const storedEmail = await getValueFromStore(page, "EmailDraft", "to")

        expect(storedEmail).toBe(testEmailComposerData.secondMailTo.email)
      })
    })
  })

  test.describe("CC & BCC fields", () => {
    test("After clicking CC or BCC button, respective input is toggled", async ({ page }) => {
      const ccButton = await page.getByTestId("toggle-cc-field-button")
      const bccButton = await page.getByTestId("toggle-bcc-field-button")
      const ccFieldNotVisible = await page.getByTestId("email-composer-field-cc-input")
      const bccFieldNotVisible = await page.getByTestId("email-composer-field-bcc-input")

      await expect(ccFieldNotVisible).not.toBeVisible()
      await expect(bccFieldNotVisible).not.toBeVisible()

      await ccButton.click()

      const ccField = await page.getByTestId("email-composer-field-cc-input")

      await expect(ccField).toBeVisible()

      await bccButton.click()

      const bccField = await page
        .locator("[data-testid=email-composer-field-bcc-input]:below([data-testid=email-composer-field-cc-input])")

      await expect(bccField).toBeVisible()

      await ccButton.click()

      await expect(ccField).not.toBeVisible()

      await bccButton.click()

      await expect(bccField).not.toBeVisible()
    })

    test("When input is filled with any value, corresponding button is not active", async ({ page }) => {
      const testValue = randPhrase()

      const ccButton = await page.getByTestId("toggle-cc-field-button")
      const bccButton = await page.getByTestId("toggle-bcc-field-button")

      const ccField = await page.getByTestId("email-composer-field-cc-input")
      const bccField = await page.getByTestId("email-composer-field-bcc-input")

      await ccButton.click()
      await ccField.fill(testValue)
      await expect(ccButton).toBeDisabled()

      await bccButton.click()
      await bccField.fill(testValue)
      await expect(bccButton).toBeDisabled()
    })

    test("Displays error message for invalid email address and hides it during input entry", async ({ page }) => {
      const invalidEmails = [
        "test.at.example.com",
        "test@",
        "@example.com",
        "test@example..com",
        "test@example.com.",
        "test@.com",
        "te st@example.com",
        "test@me.c",
        "test@example",
      ]

      const validEmail = "test@test.com, test@test.com,test@test.com, test@test.com;test@test.com"

      const ccButton = await page.getByTestId("toggle-cc-field-button")
      const bccButton = await page.getByTestId("toggle-bcc-field-button")

      const ccField = await page.getByTestId("email-composer-field-cc-input")
      const bccField = await page.getByTestId("email-composer-field-bcc-input")

      const ccError = await page.getByTestId("email-composer-field-cc-input-error")
      const bccError = await page.getByTestId("email-composer-field-bcc-input-error")

      await ccButton.click()
      await bccButton.click()

      for (const invalidEmail of invalidEmails) {
        await ccField.fill(invalidEmail)
        await page.click("body")
        await expect(ccError).toBeVisible()
        await ccField.fill(validEmail)
        await expect(ccError).not.toBeVisible()

        await bccField.fill(invalidEmail)
        await page.click("body")
        await expect(bccError).toBeVisible()
        await bccField.fill(validEmail)
        await expect(bccError).not.toBeVisible()
      }
    })

    test("Error message does not reappear after input is filled and then cleared", async ({ page }) => {
      const validEmail = "test@test.com"

      const ccButton = await page.getByTestId("toggle-cc-field-button")
      const bccButton = await page.getByTestId("toggle-bcc-field-button")

      const ccField = await page.getByTestId("email-composer-field-cc-input")
      const bccField = await page.getByTestId("email-composer-field-bcc-input")

      const ccError = await page.getByTestId("email-composer-field-cc-input-error")
      const bccError = await page.getByTestId("email-composer-field-bcc-input-error")

      await ccButton.click()
      await ccField.fill(validEmail)
      await expect(ccError).not.toBeVisible()
      await ccField.fill("")
      await page.click("body")
      await expect(ccError).not.toBeVisible()

      await bccButton.click()
      await bccField.fill(validEmail)
      await expect(bccError).not.toBeVisible()
      await bccField.fill("")
      await page.click("body")
      await expect(bccError).not.toBeVisible()
    })
  })

  test.describe("Subject field", () => {
    test("Subject field is displayed empty by default", async ({ page }) => {
      const subjectField = await page.getByTestId("input-email-composer-field-subject")

      await expect(subjectField).toBeVisible()
      await expect(subjectField).toHaveValue("")
    })

    test("Subject field may be filled with a value", async ({ page }) => {
      const testSubject = "Test subject"

      const subjectField = await page.getByTestId("input-email-composer-field-subject")

      await subjectField.fill(testSubject)

      await expect(subjectField).toHaveValue(testSubject)
    })
  })

  test.describe("Body field", () => {
    test("Body field is displayed with initial value", async ({ page }) => {
      test.fixme()

      const bodyField = await page.getByTestId("rich-text-editor-email-composer-field-body")

      await expect(bodyField).toBeVisible()
      await expect(bodyField).toHaveValue(EMAIL_BODY_DEFAULT_VALUE)
    })

    test("Body can be filled with a value", async ({ page }) => {
      const testBody = randPhrase()

      const bodyField = await page.getByTestId("rich-text-editor-email-composer-field-body")

      await bodyField.clear()
      await bodyField.fill(testBody)

      await expect(bodyField).toHaveValue(testBody)
    })
  })

  test.describe("Attachment", () => {
    test("click the button attachment and add a file from the user's disk", async ({ page }) => {
      const button = await page.getByTestId("email-composer-add-attachment-button")

      await button.click()

      test.fixme(true, "add a file from the user's disk")
    })
  })

  test.describe("Visibility", () => {
    test("select each visibility option and check its value", async ({ page }) => {
      const button = await page.getByTestId("email-composer-toggle-visibility-button")

      await button.click()

      const select = await page.getByTestId("select-email-composer-visibility")

      const options = [
        { value: "all", label: "Dla wszystkich" },
        { value: "for-me", label: "Dla mnie" },
        { value: "for-me-and-managers", label: "Dla mnie i menedżerów" },
      ]

      for (const option of options) {
        await select.selectOption({ value: option.value })
        await expect(select).toHaveValue(option.value)
      }
    })
  })

  test.describe("Submit", () => {
    test("clicks on submit button and checks if form is submitted", async ({ page }) => {
      const button = page.getByTestId("email-composer-submit-button")

      await button.click()

      test.fixme(true, "check is form is submitted")
    })
  })

  test.describe("Cancel", () => {
    test("clicks on cancel button and checks if form is cleaned", async ({ page }) => {
      const button = page.getByTestId("email-composer-cancel-button")

      await button.click()

      test.fixme(true, "check is form is cleaned")
    })
  })

  test.describe("Tags", () => {
    test("click on tag button", async ({ page }) => {
      const toggleButton = page.getByTestId("email-composer-tag-toggle-button")
      await toggleButton.click()

      test.fixme(true, "open tag manager")

      test.fixme(true, "add and delete tags")

      test.fixme(true, "save tags after closing the tag manager")
    })
  })

  test.describe("Set notification", () => {
    test("clicks on notification setting button", async ({ page }) => {
      const button = page.getByTestId("email-composer-set-notification-button")

      await button.click()

      test.fixme(true, "check if notification setting is displayed")
    })
  })
})

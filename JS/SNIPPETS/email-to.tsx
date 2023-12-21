import { DsButton, DsInput, DsSelect } from "@ls-fe/ds-react-library"
import { observer } from "mobx-react-lite"
import type { FunctionComponent } from "react"
import React from "react"
import styles from "../email-header.module.scss"
import { useEmailTo } from "./use-email-to"
import { useEmailCopyField } from "../use-email-copy-field"
import { useTranslation } from "react-i18next"

export const EmailTo: FunctionComponent = observer(() => {
  const { t } = useTranslation() // TODO - remove from here somehow?

  const {
    fieldToChangeHandler,
    fieldToSelectHandler,
    mailTo,
    mailToLabel,
    mailToPlaceholder,
    mailCCLabel,
    mailBCCLabel,
    toggleCCButtonLabel,
    toggleBCCButtonLabel,
  } = useEmailTo()

  const ccField = useEmailCopyField("")
  const bccField = useEmailCopyField("")

  return (
    <>
      <div className={styles.mailTo}>
        {mailTo && (
          <div className={styles.recipient}>
            <span className={styles.fieldLabel}>{mailToLabel}</span>
            <span className={styles.fullName}>{mailTo.fullName}</span>
            {mailTo.addresses.length === 0
              ? (
                <DsInput
                  designSystem="old"
                  id="email-composer-field-to"
                  onChanged={fieldToChangeHandler}
                  placeholder={mailToPlaceholder}
                  type="text"
                />
              )
              : (
                <div className={styles.emailSelectWrapper}>
                  {"("}
                  <DsSelect
                    data-testid="email-composer-field-to"
                    designSystem="old"
                    id="email-composer-field-to"
                    onOptionSelected={fieldToSelectHandler}
                    state={mailTo.addresses.length > 1 ? "default" : "disabled"}
                    options={mailTo.addresses}
                  />
                  {")"}
                </div>
              )}
          </div>
        )}

        <DsButton
          className={styles.buttonCc}
          variant="tertiary"
          size="small"
          id="toggle-cc-field"
          text={toggleCCButtonLabel}
          onButtonClick={ccField.toggleField}
          disabled={ccField.isFilled}
        />

        <DsButton
          variant="tertiary"
          size="small"
          id="toggle-bcc-field"
          text={toggleBCCButtonLabel}
          onButtonClick={bccField.toggleField}
          disabled={bccField.isFilled}
        />
      </div>

      {ccField.isOpen && <DsInput
        designSystem="old"
        type="email"
        label={mailCCLabel}
        errorMessage={t("email-composer.input.invalid-email")}
        value={ccField.value}
        id="email-composer-field-cc"
        onChanged={(event: CustomEvent) => ccField.handleChange(event.detail)}
        onBlur={(event) => ccField.validateEmails(event.target.value)}
        onFocus={ccField.handleOnFocus}
        status={ccField.isValid ? "default" : "error"}
      />}

      {bccField.isOpen && <DsInput
        designSystem="old"
        type="email"
        label={mailBCCLabel}
        errorMessage={t("email-composer.input.invalid-email")}
        value={bccField.value}
        id="email-composer-field-bcc"
        onChanged={(event: CustomEvent) => bccField.handleChange(event.detail)}
        onBlur={(event) => bccField.validateEmails(event.target.value)}
        onFocus={bccField.handleOnFocus}
        status={bccField.isValid ? "default" : "error"}
      />}
    </>
  )
})
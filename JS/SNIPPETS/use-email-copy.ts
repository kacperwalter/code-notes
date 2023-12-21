import { useState } from "react"
import type { UseEmailCopyFieldReturn } from "./email-header.types"

export function useEmailCopyField(initialValue: string): UseEmailCopyFieldReturn {
  const [value, setValue] = useState<string>(initialValue)
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [isFilled, setIsFilled] = useState<boolean>(false)
  const [isValid, setIsValid] = useState<boolean>(true)
  const [emails, setEmails] = useState<string[]>([])

  const toggleField = (): void => {
    setIsOpen(!isOpen)
  }

  const handleChange = (value: string): void => {
    setIsFilled(value !== "")
    setValue(value)
  }

  const handleOnFocus = (): void => {
    handleValidation(true)
  }

  const handleValidation = (condition: boolean): void => {
    setIsValid(condition)
  }

  const validateEmails = (value: string): void => {
    if (value.trim() === "") {
      setIsValid(true)
      return
    }

    const emailArray = value.split(/[;,]+/)
    const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/

    for (const email of emailArray) {
      if (!emailRegex.test(email.trim())) {
        setIsValid(false)
        return
      }
    }

    setIsValid(true)
    const emailsArray = [...new Set(value.split(/[;,]+/).map((email) => email.trim()))]
    setEmails(emailsArray)
  }

  return {
    value,
    isOpen,
    isFilled,
    isValid,
    emails,
    toggleField,
    handleChange,
    handleOnFocus,
    handleValidation,
    validateEmails,
  }
}
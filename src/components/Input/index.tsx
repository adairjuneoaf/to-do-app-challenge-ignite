import React, { InputHTMLAttributes } from 'react'
import { InputComponent, InputContainer, InputErrorsMessage, InputLabel } from './styles'

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  errors?: string
}

export const Input: React.FC<IInputProps> = ({ label, required = false, errors, ...props }) => {
  return (
    <InputContainer>
      {label && (
        <InputLabel htmlFor={props.name} required={required}>
          {label}
        </InputLabel>
      )}
      <InputComponent id={props.name} name={props.name} required={required} {...props} />
      {errors && <InputErrorsMessage>{errors}</InputErrorsMessage>}
    </InputContainer>
  )
}

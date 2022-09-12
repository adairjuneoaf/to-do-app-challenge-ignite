import React, { forwardRef, InputHTMLAttributes } from 'react'
import { FieldErrors } from 'react-hook-form'
import { FormInputsType } from '../../@types/form'
import { InputComponent, InputContainer, InputErrorsMessage, InputLabel } from './styles'

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  errors?: FieldErrors<FormInputsType>
}

const Input: React.ForwardRefRenderFunction<HTMLInputElement, IInputProps> = (
  { label, required = false, errors, ...props },
  ref,
) => {
  return (
    <InputContainer>
      {label && (
        <InputLabel htmlFor={props.name} required={required}>
          {label}
        </InputLabel>
      )}
      <InputComponent
        {...props}
        ref={ref}
        id={props.name}
        name={props.name}
        required={required}
        isError={!!errors?.task}
      />
      {errors?.task && <InputErrorsMessage>{errors.task?.message}</InputErrorsMessage>}
    </InputContainer>
  )
}

export default forwardRef(Input)

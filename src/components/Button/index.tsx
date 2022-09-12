import React, { ButtonHTMLAttributes, PropsWithChildren, ReactElement } from 'react'
import { ButtonContainer, ButtonVariants } from './styles'

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, PropsWithChildren {
  variant?: ButtonVariants
  icon?: ReactElement
}

export const Button: React.FC<IButtonProps> = ({
  children,
  icon,
  variant = 'default',
  ...props
}) => {
  return (
    <ButtonContainer {...props} variant={variant}>
      {children}
      {icon}
    </ButtonContainer>
  )
}

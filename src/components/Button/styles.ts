import styled from 'styled-components'

export type ButtonVariants = 'save' | 'danger' | 'success' | 'default'

type ButtonProps = {
  variant: ButtonVariants
}

export const ButtonContainer = styled.button<ButtonProps>`
  width: auto;
  height: auto;

  display: flex;
  align-items: center;
  flex-direction: row;

  gap: 6px;

  font-size: 14px;
  font-weight: 700;

  padding: 16px;
  border: 0;
  outline: 0;

  box-shadow: 0 0 0 2px ${(props) => props.theme['gray-700']};

  border-radius: 8px;

  cursor: pointer;

  background-color: ${(props) =>
    (props.variant === 'default' && props.theme.white) ||
    (props.variant === 'save' && props.theme.blue) ||
    (props.variant === 'danger' && props.theme.danger) ||
    (props.variant === 'success' && props.theme.purple)};

  color: ${(props) =>
    (props.variant === 'default' && props.theme['gray-700']) ||
    (props.variant === 'save' && props.theme['gray-100']) ||
    (props.variant === 'danger' && props.theme['gray-100']) ||
    (props.variant === 'success' && props.theme['gray-100'])};

  &:focus {
    box-shadow: 0 0 0 2px ${(props) => props.theme['purple-dark']};

    transition: box-shadow 350ms;
  }

  &:hover:not(:disabled) {
    background-color: ${(props) =>
      (props.variant === 'default' && props.theme['gray-200']) ||
      (props.variant === 'save' && props.theme['blue-dark']) ||
      (props.variant === 'success' && props.theme['purple-dark'])};

    transition: background-color 250ms;
  }

  &:disabled {
    cursor: not-allowed;
  }
`

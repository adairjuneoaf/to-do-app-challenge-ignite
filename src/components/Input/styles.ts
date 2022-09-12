import styled from 'styled-components'

export interface ILabelProps {
  required?: boolean
}

export const InputContainer = styled.div`
  width: 100%;
  height: auto;

  display: flex;
  align-items: flex-start;
  flex-direction: column;
`

export const InputLabel = styled.label<ILabelProps>`
  font-size: 1rem;
  font-weight: 400;

  margin-bottom: 6px;

  &::after {
    content: '*';
    color: ${(props) => (props.required ? props.theme.danger : 'transparent')};
  }
`

export const InputComponent = styled.input`
  width: 100%;
  height: auto;

  font-size: 1rem;
  font-weight: 400;

  border-radius: 8px;
  padding: 16px;

  outline: 0;
  border: 0;
  box-shadow: 0 0 0 2px ${(props) => props.theme['gray-700']};

  &:focus {
    box-shadow: 0 0 0 2px ${(props) => props.theme['purple-dark']};

    transition: box-shadow 500ms;
  }

  color: ${(props) => props.theme['gray-200']};
  background-color: ${(props) => props.theme['gray-500']};

  &::placeholder {
    color: ${(props) => props.theme['gray-300']};
  }
`

export const InputErrorsMessage = styled.div`
  width: 100%;
  height: auto;

  font-size: 0.875rem;
  font-weight: 400;

  color: ${(props) => props.theme.danger};

  margin-top: 4px;

  transition: all 350ms;
`

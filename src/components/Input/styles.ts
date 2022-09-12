import styled from 'styled-components'

export interface LabelProps {
  required?: boolean
}

export interface InputProps {
  isError: boolean
}

export const InputContainer = styled.div`
  width: 100%;
  height: auto;

  display: flex;
  align-items: flex-start;
  flex-direction: column;
`

export const InputLabel = styled.label<LabelProps>`
  font-size: 1rem;
  font-weight: 400;

  margin-bottom: 6px;

  &::after {
    content: '*';
    color: ${(props) => (props.required ? props.theme.danger : 'transparent')};
  }
`

export const InputComponent = styled.input<InputProps>`
  width: 100%;
  height: auto;

  font-size: 1rem;
  font-weight: 400;

  border-radius: 8px;
  padding: 16px;

  outline: 0;
  border: 0;
  box-shadow: 0 0 0 2px ${(props) => (props.isError ? props.theme.danger : props.theme['gray-700'])};

  color: ${(props) => props.theme['gray-200']};
  background-color: ${(props) => props.theme['gray-500']};

  &:focus,
  &:hover {
    box-shadow: 0 0 0 2px
      ${(props) => (props.isError ? props.theme.danger : props.theme['purple-dark'])};
    transition: box-shadow 500ms;
  }

  &::placeholder {
    color: ${(props) => props.theme['gray-300']};
  }
`

export const InputErrorsMessage = styled.div`
  width: fit-content;
  max-width: 50%;
  height: auto;

  position: absolute;
  margin-top: calc((16px + 2.25rem) + 6px);
  margin-left: 2px;

  display: flex;
  flex-wrap: wrap;

  font-size: 0.875rem;
  font-weight: 400;

  color: ${(props) => props.theme.danger};

  transition: all 350ms;
`

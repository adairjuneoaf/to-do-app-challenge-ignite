import styled from 'styled-components'
import { TaskStatus } from '../../../../@types/task'
import { defaultTheme } from '../../../../styles/themes/default'

type ColorVariants = Extract<
  keyof typeof defaultTheme,
  'blue' | 'purple' | 'blue-dark' | 'purple-dark'
>

type TitleProps = {
  variant: ColorVariants
}

type ItemListProps = {
  status: TaskStatus
}

export const ListContainer = styled.section`
  width: 100%;
  height: auto;

  margin-top: 64px;

  display: flex;
  flex-direction: column;
`

export const ListHeader = styled.header`
  width: 100%;
  height: auto;

  margin-bottom: 1.5rem;

  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`

export const Title = styled.h3<TitleProps>`
  font-size: 0.875rem;
  font-weight: 700;

  color: ${(props) => props.theme[props.variant]};

  gap: 6px;

  display: flex;
  align-items: center;
  flex-direction: row;
`
export const BadgeNumber = styled.span`
  font-size: 0.75rem;
  font-weight: 700;

  padding: 2px 8px;

  color: ${(props) => props.theme['gray-200']};
  background-color: ${(props) => props.theme['gray-400']};

  border-radius: 9999px;
`

export const ListContent = styled.div``

export const EmptyListContent = styled.div`
  width: 100%;
  height: auto;

  padding: 4rem 1.5rem;

  display: flex;
  align-items: center;
  flex-direction: column;

  pointer-events: none;
  user-select: none;

  > span {
    margin-bottom: 1rem;
  }

  h3 {
    font-size: 1rem;
    font-weight: 700;

    margin-top: 4px;

    color: ${(props) => props.theme['gray-300']};
  }

  p {
    font-size: 1rem;
    font-weight: 400;

    margin-top: 4px;

    color: ${(props) => props.theme['gray-300']};
  }
`

export const ItemList = styled.div<ItemListProps>`
  display: flex;
  align-items: center;
  flex-direction: row;

  padding: 16px;
  border-radius: 8px;

  border: 1px solid ${(props) => props.theme['gray-400']};

  color: ${(props) => props.theme['gray-100']};
  background-color: ${(props) => props.theme['gray-500']};

  p {
    flex: 1;
    flex-wrap: wrap;
    padding: 0 12px;

    font-size: 1rem;
    color: ${(props) =>
      props.status === 'finished' ? props.theme['gray-300'] : props.theme['gray-100']};

    text-decoration: ${(props) => (props.status === 'finished' ? 'line-through' : 'none')};
  }

  & + & {
    margin-top: 16px;
  }
`

export const FinishedButton = styled.input`
  width: 17px;
  height: 17px;

  appearance: none;
  border-radius: 9999px;

  cursor: pointer;

  &:not(:checked) {
    border: 2px solid ${(props) => props.theme.blue};
    color: transparent;

    &:hover {
      border-color: ${(props) => props.theme['blue-dark']};
      background-color: ${(props) => props.theme['blue-shadow']};

      transition: border-color, background-color 350ms;
    }

    &:focus {
      outline: 0;
      box-shadow: 0 0 0 2px ${(props) => props.theme['purple-dark']};
    }
  }

  &:checked {
    color: ${(props) => props.theme.purple};
    background-color: ${(props) => props.theme['purple-dark']};

    cursor: not-allowed;

    &::after {
      content: url('/public/check.svg');
      color: ${(props) => props.theme['gray-200']};
      font-size: 10px;
      position: relative;

      width: 100%;
      height: 100%;

      display: flex;
      align-items: stretch;
      flex-direction: row;
    }

    &:hover {
      background-color: ${(props) => props.theme['purple']};

      transition: border-color, background-color 350ms;
    }

    &:focus {
      outline: 0;
      box-shadow: 0 0 0 0px;
    }
  }
`

export const TrashButton = styled.button`
  outline: 0;
  border: 0;

  font-size: 0;

  display: flex;
  align-items: center;

  padding: 6px;
  border-radius: 4px;

  background-color: transparent;

  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme['gray-400']};
    transition: background-color 350ms;
  }
`

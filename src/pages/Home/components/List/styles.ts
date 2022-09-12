import styled from 'styled-components'
import { defaultTheme } from '../../../../styles/themes/default'

type ColorVariants = Extract<
  keyof typeof defaultTheme,
  'blue' | 'purple' | 'blue-dark' | 'purple-dark'
>

type TitleProps = {
  variant: ColorVariants
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

export const ItemList = styled.div``

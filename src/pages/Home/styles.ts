import styled from 'styled-components'

export const MainContainer = styled.main`
  width: 100%;
  height: auto;
`

export const HeaderContent = styled.header`
  width: 100%;
  height: 200px;

  background-color: ${(props) => props.theme['gray-700']};

  display: flex;
  justify-content: center;

  padding-top: 4.5rem;
`

export const MainContent = styled.div`
  max-width: 720px;
  height: auto;
`

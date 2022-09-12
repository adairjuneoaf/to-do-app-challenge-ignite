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

  margin: 0 auto;

  display: flex;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: column;
`

export const FormContent = styled.form`
  width: 100%;
  height: auto;

  margin: 0 auto;

  display: flex;
  align-items: center;
  flex-direction: row;

  margin-top: -1.5rem;

  gap: 0.5rem;
`

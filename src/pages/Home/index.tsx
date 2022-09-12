import React from 'react'
import { Logo } from '../../components/Logo'
import { FormTask } from './components/Form'
import { ListTask } from './components/List'
import { HeaderContent, MainContainer, MainContent } from './styles'

export const Home: React.FC = () => {
  return (
    <MainContainer>
      <HeaderContent>
        <Logo width={126} height={48} />
      </HeaderContent>
      <MainContent>
        <FormTask />
        <ListTask />
      </MainContent>
    </MainContainer>
  )
}

import React from 'react'
import { Logo } from '../../components/Logo'
import { TaskContextProvider } from '../../contexts/taskContext'
import { FormTask } from './components/Form'
import { ListTask } from './components/List'
import { HeaderContent, MainContainer, MainContent } from './styles'

export const Home: React.FC = () => {
  return (
    <MainContainer>
      <HeaderContent>
        <Logo width={126} height={48} />
      </HeaderContent>

      <TaskContextProvider>
        <MainContent>
          <FormTask />
          <ListTask />
        </MainContent>
      </TaskContextProvider>
    </MainContainer>
  )
}

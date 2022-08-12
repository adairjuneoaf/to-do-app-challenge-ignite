import React from 'react'
import { Logo } from '../../components/Logo'
import { HeaderContent, MainContainer, MainContent } from './styles'

export const Home: React.FC = () => {
  return (
    <MainContainer>
      <HeaderContent><Logo width={126} height={48} /></HeaderContent>
      <MainContent>

      </MainContent>
    </MainContainer>
  )
}
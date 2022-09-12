import React from 'react'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { Logo } from '../../components/Logo'
import { FormContent, HeaderContent, MainContainer, MainContent } from './styles'

import { FiPlusCircle } from 'react-icons/fi'

export const Home: React.FC = () => {
  return (
    <MainContainer>
      <HeaderContent>
        <Logo width={126} height={48} />
      </HeaderContent>
      <MainContent>
        <FormContent>
          <Input type='text' name='nameTask' placeholder='Adicione uma nova tarefa' required />
          <Button type='button' variant='save' icon={<FiPlusCircle fontSize={'16px'} />}>
            Criar
          </Button>
        </FormContent>
      </MainContent>
    </MainContainer>
  )
}

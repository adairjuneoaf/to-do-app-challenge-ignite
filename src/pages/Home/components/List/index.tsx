import { useState } from 'react'
import { BsClipboardX } from 'react-icons/bs'
import { useTheme } from 'styled-components'
import { TaskProps } from '../../../../@types/task'
import {
  BadgeNumber,
  EmptyListContent,
  ListContainer,
  ListContent,
  ListHeader,
  Title,
} from './styles'

export const ListTask = () => {
  const [taskList] = useState<Array<TaskProps>>([
    {
      description: 'Lavar louça',
      createdAt: new Date().toJSON(),
      status: 'in-progress',
    },
    {
      description: 'Dar banho no PET',
      createdAt: new Date().toJSON(),
      status: 'finished',
    },
  ])

  const theme = useTheme()

  return (
    <ListContainer>
      <ListHeader>
        <Title variant='blue'>
          Tarefas criadas <BadgeNumber>00</BadgeNumber>
        </Title>
        <Title variant='purple'>
          Tarefas concluídas <BadgeNumber>00</BadgeNumber>
        </Title>
      </ListHeader>
      <ListContent>
        {taskList.length === 0 ? (
          <EmptyListContent>
            <span>
              <BsClipboardX fontSize={56} color={theme['gray-400']} />
            </span>
            <h3>Você ainda não tem tarefas cadastradas</h3>
            <p>Crie tarefas e organize seus itens a fazer</p>
          </EmptyListContent>
        ) : (
          <div>existe tarefas</div>
        )}
      </ListContent>
    </ListContainer>
  )
}

import { useState } from 'react'
import { BsClipboardX } from 'react-icons/bs'
import { FiTrash2 } from 'react-icons/fi'
import { useTheme } from 'styled-components'
import { v4 as uuid } from 'uuid'
import { TaskProps } from '../../../../@types/task'
import {
  BadgeNumber,
  EmptyListContent,
  FinishedButton,
  ItemList,
  ListContainer,
  ListContent,
  ListHeader,
  Title,
  TrashButton,
} from './styles'

export const ListTask = () => {
  const [taskList] = useState<Array<TaskProps>>([
    {
      description: 'Lavar louça',
      createdAt: new Date().toJSON(),
      status: 'in-progress',
      id: uuid(),
    },
    {
      description: 'Dar banho no PET',
      createdAt: new Date().toJSON(),
      status: 'finished',
      id: uuid(),
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
          taskList.map((task) => {
            return (
              <ItemList key={task.id} status={task.status}>
                <FinishedButton type='radio' defaultChecked={task.status === 'finished'} />
                <p>{task.description}</p>
                <TrashButton type='button'>
                  <FiTrash2 fontSize={16} color={theme['gray-300']} />
                </TrashButton>
              </ItemList>
            )
          })
        )}
      </ListContent>
    </ListContainer>
  )
}

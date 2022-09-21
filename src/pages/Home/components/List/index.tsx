import { useContext } from 'react'
import { BsClipboardX } from 'react-icons/bs'
import { FiTrash2 } from 'react-icons/fi'
import { useTheme } from 'styled-components'
import { TaskContext } from '../../../../contexts/taskContext'
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
  const { tasks, countTotalTasks, countTasksCompleted } = useContext(TaskContext)

  const theme = useTheme()

  return (
    <ListContainer>
      <ListHeader>
        <Title variant='blue'>
          Tarefas criadas <BadgeNumber>{countTotalTasks}</BadgeNumber>
        </Title>
        <Title variant='purple'>
          Tarefas concluídas <BadgeNumber>{countTasksCompleted}</BadgeNumber>
        </Title>
      </ListHeader>
      <ListContent>
        {tasks.length === 0 ? (
          <EmptyListContent>
            <span>
              <BsClipboardX fontSize={56} color={theme['gray-400']} />
            </span>
            <h3>Você ainda não tem tarefas cadastradas</h3>
            <p>Crie tarefas e organize seus itens a fazer</p>
          </EmptyListContent>
        ) : (
          tasks.map((task) => {
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

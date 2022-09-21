import { useContext, useEffect } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { FiPlusCircle } from 'react-icons/fi'
import { FormInputsType } from '../../../../@types/form'
import { Button } from '../../../../components/Button'
import Input from '../../../../components/Input'
import { TaskContext } from '../../../../contexts/taskContext'
import { FormContent } from './styles'

export const FormTask = () => {
  const { addNewTask } = useContext(TaskContext)

  const { register, handleSubmit, formState, setFocus, reset } = useForm<FormInputsType>({
    defaultValues: {
      taskDescription: '',
    },
    mode: 'all',
  })

  const { errors, isValid } = formState

  const submitNewTask: SubmitHandler<FormInputsType> = (data) => {
    addNewTask(data.taskDescription)
    reset()
    setFocus('taskDescription')
  }

  useEffect(() => {
    setFocus('taskDescription')
  }, [])

  return (
    <FormContent onSubmit={handleSubmit(submitNewTask)}>
      <Input
        errors={errors}
        type='text'
        placeholder='Adicione uma nova tarefa'
        {...register('taskDescription', {
          minLength: {
            value: 6,
            message: 'Mínimo de 6 caracteres.',
          },
          maxLength: {
            value: 50,
            message: 'Máximo de 50 caracteres.',
          },
          required: 'Dê um nome a tarefa!',
        })}
      />
      <Button
        type='submit'
        variant='save'
        icon={<FiPlusCircle fontSize={'16px'} />}
        disabled={!isValid}
      >
        Criar
      </Button>
    </FormContent>
  )
}

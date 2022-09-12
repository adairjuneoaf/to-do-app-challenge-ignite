import { useEffect } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { FiPlusCircle } from 'react-icons/fi'
import { FormInputsType } from '../../../../@types/form'
import { Button } from '../../../../components/Button'
import Input from '../../../../components/Input'
import { FormContent } from './styles'

export const FormTask = () => {
  const { register, handleSubmit, formState, setFocus, reset } = useForm<FormInputsType>({
    defaultValues: {
      task: '',
    },
    mode: 'all',
  })

  const { errors, isValid } = formState

  const submitNewTask: SubmitHandler<FormInputsType> = (data) => {
    console.log(data)
    reset()
  }

  useEffect(() => {
    setFocus('task')
  }, [])

  return (
    <FormContent onSubmit={handleSubmit(submitNewTask)}>
      <Input
        errors={errors}
        type='text'
        placeholder='Adicione uma nova tarefa'
        {...register('task', {
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
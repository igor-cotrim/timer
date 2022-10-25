import { useContext } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { HandPalm, Play } from 'phosphor-react'
import { zodResolver } from '@hookform/resolvers/zod'

import { newCycleFormValidationSchema } from '../../validation'
import { NewCycleFormDataModel } from '../../models'
import { CyclesContext } from '../../contexts'
import { Countdown, NewCycleForm } from './components'

import * as S from './styles'

const Home = () => {
  const { createNewCycle, interruptCycle, activeCycle } =
    useContext(CyclesContext)

  const newCycleForm = useForm<NewCycleFormDataModel>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0,
    },
  })
  const { handleSubmit, watch } = newCycleForm

  const task = watch('task')
  const isSubmitDisabled = !task

  return (
    <S.HomeContainer>
      <form onSubmit={handleSubmit(createNewCycle)} action="">
        <FormProvider {...newCycleForm}>
          <NewCycleForm />
        </FormProvider>
        <Countdown />
        {activeCycle ? (
          <S.StopCountdownButton onClick={interruptCycle} type="button">
            <HandPalm size={24} />
            Interromper
          </S.StopCountdownButton>
        ) : (
          <S.StartCountdownButton disabled={isSubmitDisabled} type="submit">
            <Play size={24} />
            Começar
          </S.StartCountdownButton>
        )}
      </form>
    </S.HomeContainer>
  )
}

export default Home

import React, { createContext, useReducer, useState } from 'react'

import { CycleModel, NewCycleFormDataModel } from '../models'
import {
  ActionTypes,
  addNewCycleAction,
  cyclesReducer,
  interruptCurrentCycleAction,
  markCurrentCycleAsFinishedAction,
} from '../reducers'

type CyclesContextData = {
  cycles: CycleModel[]
  activeCycle: CycleModel | undefined
  activeCycleId: string | null
  amountSecondsPassed: number
  markCurrentCycleAsFinished: () => void
  setSecondsPassed: (seconds: number) => void
  createNewCycle: (data: NewCycleFormDataModel) => void
  interruptCurrentCycle: () => void
}

type CyclesContextProviderProps = {
  children: React.ReactNode
}

export const CyclesContext = createContext({} as CyclesContextData)

export const CyclesContextProvider = ({
  children,
}: CyclesContextProviderProps) => {
  const [cyclesState, dispatch] = useReducer(cyclesReducer, {
    cycles: [],
    activeCycleId: null,
  })
  const [amountSecondsPassed, setAmountSecondsPassed] = useState(0)

  const { cycles, activeCycleId } = cyclesState

  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId)

  const setSecondsPassed = (seconds: number) => {
    setAmountSecondsPassed(seconds)
  }

  const markCurrentCycleAsFinished = () => {
    dispatch(markCurrentCycleAsFinishedAction())
  }

  const createNewCycle = (data: NewCycleFormDataModel) => {
    const id = String(new Date().getTime())
    const newCycle: CycleModel = {
      id,
      task: data.task,
      minutesAmount: data.minutesAmount,
      startDate: new Date(),
    }

    dispatch(addNewCycleAction(newCycle))
    setAmountSecondsPassed(0)
  }

  const interruptCurrentCycle = () => {
    dispatch(interruptCurrentCycleAction())
  }

  return (
    <CyclesContext.Provider
      value={{
        cycles,
        activeCycleId,
        amountSecondsPassed,
        activeCycle,
        markCurrentCycleAsFinished,
        setSecondsPassed,
        createNewCycle,
        interruptCurrentCycle,
      }}
    >
      {children}
    </CyclesContext.Provider>
  )
}

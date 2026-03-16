/* eslint-disable react-refresh/only-export-components */
import { createContext, useEffect, useReducer, useState, type ReactNode } from "react";
import { cyclesReducer, type Cycle } from "../reducers/cycles/reducer";
import { addNewCycleAction, InterruptCurrentCycleAction, MarkCurrentCycleAsFinishedAction } from "../reducers/cycles/actions";
import { differenceInSeconds } from "date-fns";


interface CreateCycleData {
    task: string
    minutesAmount: number
}

interface CyclesContextType {
    cycles: Cycle[]
    activeCycle: Cycle | undefined
    activeCycleId: string | null
    amountSecondsPassed: number
    markCurrentCycleAsFinished: () => void
    setSecondsPassed: (seconds: number) => void
    createNewCycle: (data: CreateCycleData) => void
    interruptCurrentCycle: () => void
}

export const CyclesContext = createContext({} as CyclesContextType)

interface CyclesContextProviderProps {
    children: ReactNode
}

export function CyclesContextProvider({ children }: CyclesContextProviderProps) {
    /* useReducer -> é um hook avançado do React, feito para lidar com estados complexos que necessitam de mudanças constantes, que demandam muitas funções.
                     Ele espera actions específicas para lidar de forma diferente com a informação, como abaixo
    */
    const [cyclesState, dispatch] = useReducer(cyclesReducer, {
        cycles: [],
        activeCycleId: null,
    }, (initialState) => {
        const storedStateAsJSON = localStorage.getItem('@ignite-timer:cycles-state-1.0.0')

        if (storedStateAsJSON) {
            return JSON.parse(storedStateAsJSON)
        }

        return initialState
    })
    const { activeCycleId, cycles } = cyclesState
    const activeCycle = cycles.find(cycle => cycle.id === activeCycleId)

    const [amountSecondsPassed, setAmountSecondsPassed] = useState(() => {
        if (activeCycle) {
            return differenceInSeconds(new Date(), new Date(activeCycle.startDate));
        }

        return 0
    });

    useEffect(() => {
        const stateJSON = JSON.stringify(cyclesState)

        localStorage.setItem('@ignite-timer:cycles-state-1.0.0', stateJSON)
    }, [cyclesState])


    function markCurrentCycleAsFinished() {
        dispatch(MarkCurrentCycleAsFinishedAction())
    }

    function setSecondsPassed(seconds: number) {
        setAmountSecondsPassed(seconds)
    }

    function createNewCycle(data: CreateCycleData) {
        const id = String(new Date().getTime())

        const newCycle: Cycle = {
            id: id,
            task: data.task,
            minutesAmount: data.minutesAmount,
            startDate: new Date(),
        }

        dispatch(addNewCycleAction(newCycle))
        setAmountSecondsPassed(0)
    }

    function interruptCurrentCycle() {
        dispatch(InterruptCurrentCycleAction())
    }

    return (
        <CyclesContext.Provider value={{
            activeCycle,
            activeCycleId,
            markCurrentCycleAsFinished,
            amountSecondsPassed,
            setSecondsPassed,
            createNewCycle,
            interruptCurrentCycle,
            cycles
        }}>
            {children}
        </CyclesContext.Provider>
    )
}
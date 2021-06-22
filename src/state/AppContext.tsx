import React, { createContext, useContext, useState } from 'react'

interface IAppState {
  jwt?: string
}

interface IAppContext {
  state: IAppState
  setState: React.Dispatch<React.SetStateAction<IAppState>>
}

const AppContext = createContext<IAppContext>({
  state: {},
  setState: () => ({}),
})

const DEFAULT_STATE = {
  jwt: undefined,
}

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<IAppState>(DEFAULT_STATE)

  const value = {
    state,
    setState,
  }

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export const useApp = () => useContext(AppContext)

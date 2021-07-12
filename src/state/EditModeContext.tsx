import React, { createContext, useContext, useEffect, useState } from 'react'
import { noop } from '../utils/noop'

interface IEditModeContext {
  isEditMode: boolean
  setIsEditMode: React.Dispatch<React.SetStateAction<boolean>>
  toggleIsEditMode: () => void
}

const DEFAULT_STATE = true

const EditModeContext = createContext<IEditModeContext>({
  isEditMode: DEFAULT_STATE,
  setIsEditMode: noop,
  toggleIsEditMode: noop,
})

export function EditModeProvider({ children }: { children: React.ReactNode }) {
  const [isEditMode, setIsEditMode] = useState(DEFAULT_STATE)

  const toggleIsEditMode = () => setIsEditMode((isEditMode) => !isEditMode)

  useEffect(() => {
    return setIsEditMode(true) // on unmount, set edit mode to true
  }, [])

  const value = {
    isEditMode,
    setIsEditMode,
    toggleIsEditMode,
  }

  return (
    <EditModeContext.Provider value={value}>
      {children}
    </EditModeContext.Provider>
  )
}

export const useEditMode = () => useContext(EditModeContext)

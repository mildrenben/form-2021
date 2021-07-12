import { useEffect, useState } from 'react'

interface Props {
  defaultState?: boolean
}

export const useEditMode = ({ defaultState = true }: Props = {}) => {
  const [isEditMode, setIsEditMode] = useState(defaultState)

  const setIsEditModeFalse = () => setIsEditMode(false)
  const setIsEditModeTrue = () => setIsEditMode(true)
  const toggleIsEditMode = () => setIsEditMode((isEditMode) => !isEditMode)

  useEffect(() => {
    return setIsEditModeTrue // on unmount, set edit mode to true
  }, [])

  return {
    isEditMode,
    setIsEditMode,
    setIsEditModeFalse,
    setIsEditModeTrue,
    toggleIsEditMode,
  }
}

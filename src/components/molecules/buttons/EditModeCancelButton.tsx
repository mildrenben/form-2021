import { useFormContext } from 'react-hook-form'
import { useEditMode } from '../../../state/EditModeContext'
import { CancelButton } from '../../atoms/buttons/CancelButton'

export const EditModeCancelButton = () => {
  const { isEditMode, setIsEditMode } = useEditMode()
  const { reset } = useFormContext()

  if (!isEditMode) return null

  const onClick = () => {
    setIsEditMode(false)
    reset()
  }

  return <CancelButton onClick={onClick} />
}

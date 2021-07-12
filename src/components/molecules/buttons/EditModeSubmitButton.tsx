import { useEditMode } from '../../../state/EditModeContext'
import { SubmitButton } from '../../atoms/buttons/SubmitButton'

export const EditModeSubmitButton = () => {
  const { isEditMode } = useEditMode()

  if (!isEditMode) return null

  return <SubmitButton />
}

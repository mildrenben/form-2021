import { Button } from '@material-ui/core'
import { useEditMode } from '../../../state/EditModeContext'

export const EditModeButton = () => {
  const { isEditMode, setIsEditMode } = useEditMode()

  if (isEditMode) return null

  const onClick = () => setIsEditMode(true)

  return (
    <Button variant="contained" color="inherit" onClick={onClick}>
      Edit mode
    </Button>
  )
}

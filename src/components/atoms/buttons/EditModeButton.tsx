import { MouseEvent } from 'react'
import { Button } from '@material-ui/core'

interface Props {
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void
  isEditMode: boolean
}

export const EditModeButton = ({ onClick = () => {}, isEditMode }: Props) => {
  if (isEditMode) return null

  return (
    <Button variant="contained" color="inherit" onClick={onClick}>
      Edit mode
    </Button>
  )
}

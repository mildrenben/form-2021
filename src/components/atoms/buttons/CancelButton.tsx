import { MouseEvent } from 'react'
import { Button } from '@material-ui/core'

interface Props {
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void
}

export const CancelButton = ({ onClick = () => {} }: Props) => (
  <Button variant="contained" color="inherit" onClick={onClick}>
    Cancel
  </Button>
)

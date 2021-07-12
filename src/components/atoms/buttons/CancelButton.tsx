import { MouseEvent } from 'react'
import { Button } from '@material-ui/core'
import { noop } from '../../../utils/noop'

interface Props {
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void
}

export const CancelButton = ({ onClick = noop }: Props) => (
  <Button variant="contained" color="inherit" onClick={onClick}>
    Cancel
  </Button>
)

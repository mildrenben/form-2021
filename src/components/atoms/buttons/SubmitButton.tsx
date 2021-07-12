import { MouseEvent } from 'react'
import { Button } from '@material-ui/core'
import { noop } from '../../../utils/noop'

interface Props {
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void
}

export const SubmitButton = ({ onClick = noop }: Props) => (
  <Button variant="contained" color="primary" onClick={onClick} type="submit">
    Submit
  </Button>
)

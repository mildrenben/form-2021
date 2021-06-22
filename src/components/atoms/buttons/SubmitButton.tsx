import { MouseEvent } from 'react'
import { Button } from '@material-ui/core'

interface Props {
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void
}

export const SubmitButton = ({ onClick = () => {} }: Props) => (
  <Button variant="contained" color="primary" onClick={onClick} type="submit">
    Submit
  </Button>
)

import { InputAdornment } from '@material-ui/core'
import { CheckCircle } from '@material-ui/icons'

export const TickEnd = () => (
  <InputAdornment position="start">
    <CheckCircle style={{ color: 'green' }} />
  </InputAdornment>
)

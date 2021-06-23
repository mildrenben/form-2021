import { COPY } from '../../../../constants/copy'
import { TextField } from '../_generic/TextField'

const ID = 'lastName'

const validators = {
  required: COPY.fields.validation.required,
}

export interface LastNameType {
  lastName: string
}

interface Props {
  disabled?: boolean
}

export const LastNameField = ({ disabled }: Props) => (
  <TextField
    id={ID}
    label="Last name"
    rules={validators}
    disabled={disabled}
    showValidationTick
  />
)

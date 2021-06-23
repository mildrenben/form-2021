import { COPY } from '../../../../constants/copy'
import { TextField } from '../_generic/TextField'

const ID = 'firstName'

const validators = {
  required: COPY.fields.validation.required,
}

export interface FirstNameType {
  firstName: string
}

interface Props {
  disabled?: boolean
}

export const FirstNameField = ({ disabled }: Props) => (
  <TextField
    id={ID}
    label="First name"
    rules={validators}
    disabled={disabled}
  />
)

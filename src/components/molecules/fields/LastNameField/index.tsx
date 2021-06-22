import { COPY } from '../../../../constants/copy'
import { TextField } from '../_generic/TextField'

const ID = 'lastName'

const validators = {
  required: COPY.fields.validation.required,
}

export interface LastNameType {
  lastName: string
}

export const LastNameField = () => (
  <TextField id={ID} label="Last name" rules={validators} />
)

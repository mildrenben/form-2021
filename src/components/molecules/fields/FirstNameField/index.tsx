import { COPY } from '../../../../constants/copy'
import { TextField } from '../_generic/TextField'

const ID = 'firstName'

const validators = {
  required: COPY.fields.validation.required,
}

export interface FirstNameType {
  firstName: string
}

export const FirstNameField = () => (
  <TextField id={ID} label="First name" rules={validators} />
)

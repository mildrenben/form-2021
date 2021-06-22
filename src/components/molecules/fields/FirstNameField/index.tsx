import { useFormContext } from 'react-hook-form'
import { COPY } from '../../../../constants/copy'
import { TextField } from '../_generic/TextField'

const ID = 'firstName'

const validators = {
  required: COPY.fields.validation.required,
}

export interface FirstNameType {
  firstName: string
}

export const FirstNameField = () => {
  const { register } = useFormContext<FirstNameType>()

  return <TextField id={ID} label="First name" {...register(ID, validators)} />
}

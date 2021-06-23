import { FormProvider, useForm } from 'react-hook-form'
import { SubmitButton } from '../../atoms/buttons/SubmitButton'
import {
  FirstNameField,
  FirstNameType,
} from '../../molecules/fields/FirstNameField/index'
import {
  LastNameType,
  LastNameField,
} from '../../molecules/fields/LastNameField'

export type PersonFormValues = FirstNameType & LastNameType

interface Props {
  defaultValues?: Partial<PersonFormValues>
}

export const PersonForm = ({ defaultValues }: Props) => {
  const form = useForm<PersonFormValues>({
    defaultValues,
    mode: 'onBlur',
    reValidateMode: 'onChange',
  })

  const onSubmit = (v: any) => console.log(v) // replace with hook

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div>
          <FirstNameField />
          <LastNameField />
        </div>
        <SubmitButton />
      </form>
    </FormProvider>
  )
}

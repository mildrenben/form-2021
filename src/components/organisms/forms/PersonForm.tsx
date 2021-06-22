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

type FormValues = FirstNameType & LastNameType

interface Props {
  defaultValues?: Partial<FormValues>
}

export const PersonForm = ({ defaultValues }: Props) => {
  const form = useForm<FormValues>({
    defaultValues,
  })

  const onSubmit = () => '' // replace with hook

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

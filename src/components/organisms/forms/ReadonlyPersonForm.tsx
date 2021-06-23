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

export type ReadonlyPersonFormValues = FirstNameType & LastNameType

interface Props {
  defaultValues?: Partial<ReadonlyPersonFormValues>
}

export const ReadonlyPersonForm = ({ defaultValues }: Props) => {
  const form = useForm<ReadonlyPersonFormValues>({
    defaultValues,
  })

  const onSubmit = (v: any) => console.log(v) // replace with hook

  return (
    <FormProvider {...form}>
      <div>
        <FirstNameField disabled />
        <LastNameField disabled />
      </div>
    </FormProvider>
  )
}

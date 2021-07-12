import { FormProvider, useForm } from 'react-hook-form'
import { EditModeCancelButton } from '../../molecules/buttons/EditModeCancelButton'
import { EditModeSubmitButton } from '../../molecules/buttons/EditModeSubmitButton'
import {
  FirstNameField,
  FirstNameType,
} from '../../molecules/fields/FirstNameField/index'
import {
  LastNameType,
  LastNameField,
} from '../../molecules/fields/LastNameField'
import { EditModeButton } from '../../atoms/buttons/EditModeButton'
import { useEditMode } from '../../../state/EditModeContext'

export type QuoteFormValues = FirstNameType & LastNameType

interface Props {
  defaultValues?: Partial<QuoteFormValues>
}

export const QuoteForm = ({ defaultValues }: Props) => {
  const form = useForm<QuoteFormValues>({
    defaultValues,
    mode: 'onBlur',
    reValidateMode: 'onChange',
  })

  const { isEditMode } = useEditMode()

  const isFormDisabled = !isEditMode

  const onSubmit = (v: any) => console.log(v) // replace with hook

  // CancelEditMode will have access to form context, from which it can reset the form to the OG form values
  // Can we then access isEditMode here and pass to the Fields for their disabled value?
  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <h5>Edit mode: {String(isEditMode)}</h5>
        <EditModeButton />
        <div>
          <FirstNameField disabled={isFormDisabled} />
          <LastNameField disabled={isFormDisabled} />
        </div>
        <EditModeCancelButton />
        <EditModeSubmitButton />
      </form>
    </FormProvider>
  )
}

import { FormProvider, useForm } from 'react-hook-form'
import { SubmitButton } from '../../atoms/buttons/SubmitButton'
import { CancelButton } from '../../atoms/buttons/CancelButton'
import {
  FirstNameField,
  FirstNameType,
} from '../../molecules/fields/FirstNameField/index'
import {
  LastNameType,
  LastNameField,
} from '../../molecules/fields/LastNameField'
import { useEditMode } from '../../../utils/useEditMode'
import { EditModeButton } from '../../atoms/buttons/EditModeButton'

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

  const { isEditMode, setIsEditModeFalse, toggleIsEditMode } = useEditMode()

  const isFormDisabled = !isEditMode

  const onSubmit = (v: any) => console.log(v) // replace with hook

  // Create an EditModeProvider. It's starting values should be the default form values
  // It should have useEditMode inside it and it's own little state
  // EditModeButton and CancelEditModeButton should pull from this Context
  // CancelEditMode will have access to form context, from which it can reset the form to the OG form values
  // Can we then access isEditMode here and pass to the Fields for their disabled value?
  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <h5>Edit mode: {String(isEditMode)}</h5>
        <EditModeButton onClick={toggleIsEditMode} isEditMode={isEditMode} />
        <div>
          <FirstNameField disabled={isFormDisabled} />
          <LastNameField disabled={isFormDisabled} />
        </div>
        <CancelButton onClick={setIsEditModeFalse} />
        <SubmitButton />
      </form>
    </FormProvider>
  )
}

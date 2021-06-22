import { PersonForm, PersonFormValues } from '../../organisms/forms/PersonForm'

interface Props {
  defaultValues: Partial<PersonFormValues>
}

export const FormWithAsyncDefaultValues = ({ defaultValues }: Props) => (
  <main>
    <h1>Form with async default values</h1>
    <PersonForm defaultValues={defaultValues} />
  </main>
)

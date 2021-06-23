import { ReadonlyPersonForm } from '../../organisms/forms/ReadonlyPersonForm'

const defaultValues = {
  firstName: 'Cristiano',
  lastName: 'Ronaldo',
}

export const ReadonlyForm = () => (
  <main>
    <h1>Read only form</h1>
    <ReadonlyPersonForm defaultValues={defaultValues} />
  </main>
)

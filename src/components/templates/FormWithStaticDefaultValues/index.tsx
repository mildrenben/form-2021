import { PersonForm } from '../../organisms/forms/PersonForm'

const defaultValues = {
  firstName: 'Cristiano',
  lastName: 'Ronaldo',
}

export const FormWithStaticDefaultValues = () => (
  <main>
    <h1>Form with static default values</h1>
    <PersonForm defaultValues={defaultValues} />
  </main>
)

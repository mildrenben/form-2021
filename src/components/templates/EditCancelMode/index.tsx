import { QuoteForm } from '../../organisms/forms/QuoteForm'

const defaultValues = {
  firstName: 'Harry',
  lastName: 'Kane',
}

export const EditCancelMode = () => (
  <main>
    <h1>Edit cancel mode </h1>
    <QuoteForm defaultValues={defaultValues} />
  </main>
)

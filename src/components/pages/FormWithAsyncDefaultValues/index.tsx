import { FormWithAsyncDefaultValues } from '../../templates/FormWithAsyncDefaultValues'
import { useBlogPost } from '../../../utils/useBlogPost'

export const FormWithAsyncDefaultValuesPage = () => {
  const { isLoading, isError, data, error } = useBlogPost()

  if (isLoading) return <h1>Loading...</h1>

  if (isError) return <h1>error{console.log(error)}</h1>

  const defaultValues = {
    firstName: data?.title,
    lastName: data?.body,
  }

  return (
    <div>
      <FormWithAsyncDefaultValues defaultValues={defaultValues} />
    </div>
  )
}

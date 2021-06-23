import { COPY } from '../../../../constants/copy'
import { useBlogPost } from '../../../../utils/useBlogPost'
import { TextField } from '../_generic/TextField'

const ID = 'blogTitle'

const validators = {
  required: COPY.fields.validation.required,
}

export interface BlogTitleType {
  blogTitle: string
}

export const BlogTitleField = () => {
  const { isLoading, isError, data } = useBlogPost()

  if (isLoading) return <div>this field is loading...</div>

  if (isError) return <div>this field errored</div>

  return (
    <TextField
      id={ID}
      label="Blog title"
      rules={validators}
      defaultValue={data?.title}
    />
  )
}

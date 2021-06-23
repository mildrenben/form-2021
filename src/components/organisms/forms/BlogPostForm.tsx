import { FormProvider, useForm } from 'react-hook-form'
import { SubmitButton } from '../../atoms/buttons/SubmitButton'
import {
  BlogTitleField,
  BlogTitleType,
} from '../../molecules/fields/BlogTitleField'
import {
  FirstNameField,
  FirstNameType,
} from '../../molecules/fields/FirstNameField/index'
import {
  LastNameType,
  LastNameField,
} from '../../molecules/fields/LastNameField'

export type BlogPostFormValues = FirstNameType & LastNameType & BlogTitleType

export const BlogPostForm = () => {
  const form = useForm<BlogPostFormValues>()

  const onSubmit = (v: any) => console.log(v) // replace with hook

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div>
          <FirstNameField />
          <LastNameField />
          <BlogTitleField />
        </div>
        <SubmitButton />
      </form>
    </FormProvider>
  )
}

import { TextField as MuiTextField } from '@material-ui/core'
import { forwardRef, Ref } from 'react'
import { useFormContext, UseFormRegisterReturn } from 'react-hook-form'
import { ErrorText } from '../../../atoms/error-text'
import { HelpText } from '../../../atoms/help-text'
import './TextField.css'

type Props = {
  id: string
  label: string
  helpText?: string
} & Partial<UseFormRegisterReturn>

export const TextField = forwardRef(
  (
    { id, label, helpText, ...registerReturn }: Props,
    ref: Ref<HTMLInputElement>
  ) => {
    const {
      formState: { errors },
    } = useFormContext()

    const error = errors[id] // get error
    const isErrored = Boolean(error) // check whether field has an error

    const errorTextId = `errorText-${id}`
    const helpTextId = `helpText-${id}`

    return (
      <div className="TextField">
        <MuiTextField
          id={id}
          label={label}
          variant="outlined"
          error={isErrored} // pass on error state to Mui
          inputProps={{
            'aria-describedby': `${helpTextId} ${errorTextId}`, // point to our error text and help text ID's
          }}
          ref={ref}
          {...registerReturn}
        />
        <ErrorText id={errorTextId} error={error?.message} />
        <HelpText id={helpTextId} message={helpText} />
      </div>
    )
  }
)

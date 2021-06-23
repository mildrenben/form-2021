import { TextField as MuiTextField } from '@material-ui/core'
import { Controller, RegisterOptions, useFormContext } from 'react-hook-form'
import { ErrorText } from '../../../atoms/error-text'
import { HelpText } from '../../../atoms/help-text'
import './TextField.css'

type Props = {
  id: string
  label: string
  helpText?: string
  rules?: RegisterOptions
  defaultValue?: string
}

export const TextField = ({
  id,
  label,
  helpText,
  rules,
  defaultValue = '',
}: Props) => {
  const {
    control,
    formState: { errors },
  } = useFormContext()

  const error = errors[id] // get error

  const errorTextId = `errorText-${id}`
  const helpTextId = `helpText-${id}`

  return (
    <div className="TextField">
      <Controller
        control={control}
        name={id}
        rules={rules}
        defaultValue={defaultValue}
        render={({
          field: { onChange, onBlur, value, name, ref },
          fieldState: { invalid },
        }) => (
          <MuiTextField
            id={id}
            label={label}
            variant="outlined"
            error={invalid} // pass on error state to Mui
            inputProps={{
              'aria-describedby': `${helpTextId} ${errorTextId}`, // point to our error text and help text ID's
            }}
            onChange={onChange}
            onBlur={onBlur}
            value={value}
            name={name}
            ref={ref}
          />
        )}
      />
      <ErrorText id={errorTextId} error={error?.message} />
      <HelpText id={helpTextId} message={helpText} />
    </div>
  )
}

import './style.css'

interface Props {
  id: string
  error?: string
}

// aria-live assertive ensures that errors are read out by
// a screen reader as they change
export const ErrorText = ({ id, error }: Props) => (
  <span id={id} aria-live="assertive" className="error-text">
    {error}
  </span>
)

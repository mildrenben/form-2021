interface Props {
  id: string
  message?: string
}

export const HelpText = ({ id, message }: Props) => (
  <span id={id}>{message}</span>
)

import { EditModeProvider } from '../../../state/EditModeContext'
import { EditCancelMode } from '../../templates/EditCancelMode'

export const EditCancelModePage = () => {
  return (
    <div>
      <EditModeProvider>
        <EditCancelMode />
      </EditModeProvider>
    </div>
  )
}

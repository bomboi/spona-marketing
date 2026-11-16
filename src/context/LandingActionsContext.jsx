import { createContext, useContext } from 'react'

export const LandingActionsContext = createContext({ openRequestForm: () => {}, openStepExplanation: () => {} })

export function useLandingActions() {
  return useContext(LandingActionsContext)
}

import { createContext, useContext } from 'react'

export const LandingActionsContext = createContext({ openRequestForm: () => {} })

export function useLandingActions() {
  return useContext(LandingActionsContext)
}

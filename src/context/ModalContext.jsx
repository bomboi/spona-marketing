import { createContext, useContext } from 'react'

export const ModalContext = createContext({ openLeadModal: () => {} })

export function useModal() {
  return useContext(ModalContext)
}

import { createContext, ReactNode } from 'react'
// import { api } from '../services/api'

interface IContextData {}

interface IProviderProps {
  children: ReactNode
}

export const SystemContext = createContext({} as IContextData)

export function SystemProvider({ children }: IProviderProps) {
  return <SystemContext.Provider value={{}}>{children}</SystemContext.Provider>
}

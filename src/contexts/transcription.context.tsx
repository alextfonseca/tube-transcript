'use client'

import React, { createContext, useContext, useState } from 'react'

interface IProviderProps {
  children: React.ReactNode
}

export interface ITranscriptionContextProps {
  setTranscriptionText: React.Dispatch<React.SetStateAction<string>>
  transcriptionText: string
}

export const UseTranscriptionContext = createContext(
  {} as ITranscriptionContextProps
)

export function UseTranscription({ children }: IProviderProps) {
  const [transcriptionText, setTranscriptionText] = useState<string>('')

  return (
    <UseTranscriptionContext.Provider
      value={{
        setTranscriptionText,
        transcriptionText
      }}
    >
      {children}
    </UseTranscriptionContext.Provider>
  )
}

export const useTranscription = (): ITranscriptionContextProps =>
  useContext(UseTranscriptionContext)

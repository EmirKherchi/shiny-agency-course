import React, { useState, createContext } from 'react'

export const SurveyContext = createContext()

export const SurveyProvider = ({ children }) => {
  const [results, setResults] = useState({})
  const [questionsNumber, setQuestionsNumber] = useState(1)
  const saveResults = (newResults) => {
    setResults({ ...results, ...newResults })
  }
  const saveQuestionsNumber = (questionsNumber) => {
    setQuestionsNumber(questionsNumber)
  }

  return (
    <SurveyContext.Provider value={{ results, saveResults, questionsNumber, saveQuestionsNumber }}>
      {children}
    </SurveyContext.Provider>
  )
}

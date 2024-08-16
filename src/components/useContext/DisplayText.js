import React, { useContext } from 'react'
import { LanguageContext } from '../../LanguageContext'

function DisplayText() {
    const {language} = useContext(LanguageContext);

    const text = {
        English: "Hello! How are you?",
        Spanish: "¡Hola! ¿Cómo estás?"
      };

  return (
    <div><h2>{text[language]}</h2></div>
  )
}

export default DisplayText
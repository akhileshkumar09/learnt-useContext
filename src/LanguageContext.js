import React, { createContext, useState } from 'react'
import LanguageSwither from './components/useContext/LanguageSwither';
import DisplayText from './components/useContext/DisplayText';

export const LanguageContext = createContext();

function LanguageProvider() {
    const [language, setLanguage] = useState('Spanish');

    const switchLanguage = ()=>{
        setLanguage((prevLanguage)=>(prevLanguage === 'English' ? 'Spanish' : 'English'));
    }
  return (
    <div>
        <LanguageContext.Provider value={{language, switchLanguage}}>
            <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Language Switcher App</h1>
            <LanguageSwither />
            <DisplayText />
            </div>
        </LanguageContext.Provider>
    </div>
  )
}

export default LanguageProvider
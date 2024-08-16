import { useContext } from 'react';
import {LanguageContext} from '../../LanguageContext'

function LanguageSwither() {
    const {switchLanguage} = useContext(LanguageContext);
  return (
    <div>
        <button onClick={switchLanguage}>
           Swich Language
        </button>
    </div>
  )
}

export default LanguageSwither
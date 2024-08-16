import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
// import { createContext, useState } from 'react';
import './App.css';
import Home from './pages/Home';
import Problem1 from './components/useEffect/Problem1';
import Problem2 from './components/useEffect/Problem2';
import Problem3 from './components/useEffect/Problem3';
import Problem4 from './components/useEffect/Problem4';
import Problem5 from './components/useEffect/Problem5';
import LanguageProvider from './LanguageContext';

// export const ThemeContext = createContext();

function App() {
  // const [theme, setTheme] = useState('light');

  // const toggleTheme = () => {
  //   setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  // };

  return (
    <Router>  
     <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/useEffect-problem-1' element={<Problem1/>}/>
        <Route path='/useEffect-problem-2' element={<Problem2/>}/>
        <Route path='/useEffect-problem-3' element={<Problem3/>}/>
        <Route path='/useEffect-problem-4' element={<Problem4/>}/>
        <Route path='/useEffect-problem-5' element={<Problem5/>}/>
        <Route path='/useContext-problem-1' element={<LanguageProvider/>}/>       
     
      </Routes>
     </div>
    </Router>
 
  );
}

export default App;

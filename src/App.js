import './styles/App.css';
import words from './data.json';
import CardSlider from './components/CardSlider/CardSlider';
import './styles/App.css';
import {Routes, Route} from 'react-router-dom';
import PageNotFound from './components/PageNotFound/PageNotFound';
import Header from './components/Header/Header';
import TableCreation from './components/TableCreation/TableCreation';


function App() {
  return (
    <div className="App">
      <Header/>
      <div className='subHeader'></div>
      <Routes>
          <Route path="/" element={<TableCreation words={words} />} />
          <Route path="/game" element={<CardSlider words={words} />} />          
          <Route path="*" element={<PageNotFound/>} />
        </Routes>
      
    </div>
  );
}

export default App;
import './App.css';
import {Routes, Route} from 'react-router-dom';
import PageNotFound from './PageNotFound/PageNotFound';
import Header from '../components/Header/Header';
import PageHome from './PageHome/PageHome';
import PageGame from './PageGame/PageGame';


function App() {
  return (
    <div className="App">
      <Header/>
      <div className='subHeader'></div>
      <Routes>
          <Route path="/" element={<PageHome/>} />
          <Route path="/game" element={<PageGame/>} />          
          <Route path="*" element={<PageNotFound/>} />
        </Routes>
      
    </div>
  );
}

export default App;
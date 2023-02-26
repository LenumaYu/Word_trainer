import words from './data.json';
import WordList from './components/WordList/WordList';
import './styles/App.css';
import CardSlider from './components/CardSlider/CardSlider';


function App() {
  return (
    <div className="App">
      {words.map((word) =>
                <WordList
                    key={word.id} {...word}
                />
            )}
      <CardSlider words = {words} />
    </div>
  );
}

export default App;

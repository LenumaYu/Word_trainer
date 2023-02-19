import words from './data.json';
import WordCard from './components/WordCard/WordCard';
import WordList from './components/WordList/WordList';
import './styles/App.css';


function App() {
  return (
    <div className="App">
      {words.map((word) =>
                <WordList
                    key={word.id} {...word}
                />
            )}
      {words.map((word) =>
                <WordCard
                    key={word.id} {...word}
                />
            )}
    </div>
  );
}

export default App;

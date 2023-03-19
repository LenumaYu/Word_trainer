import WordList from "../WordList/WordList";
import words from '../../data.json';


function TableCreation() {

    return (
        <div>
            {words.map((word) =>
                <WordList
                    key={word.id} {...word}
                />
            )}
        </div>
    );
}

export default TableCreation;
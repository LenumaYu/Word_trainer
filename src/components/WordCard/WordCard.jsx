import { useState } from 'react';

import '../../styles/WordCard.scss'



function WordCard(props) {

    const { tags, english, transcription, russian } = props;
    const [pressed, setPressed] = useState(false);

    const handlePressed = () => {
        setPressed(!pressed);
    }

    return (
        <div className='container'>
            <div className="card">
                <div className='tag'>{tags}</div>
                <div className='word'>{english}</div>
                <div className='transcription'>{transcription}</div>
                {
                    pressed ?
                        <>
                            <div className='translate' onClick={handlePressed}>{russian}</div>
                        </> : <>
                            <button className='buttonCheck' onClick={handlePressed}>Проверить</button>
                        </>
                }
            </div>
        </div>
    );
}

export default WordCard;
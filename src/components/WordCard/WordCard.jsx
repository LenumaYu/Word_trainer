import { useState, useEffect, useRef } from 'react';
import './WordCard.scss'



function WordCard(props) {

    const { tags, english, transcription, russian } = props;
    const [pressed, setPressed] = useState(false);
    const translationButton = useRef(null);

    useEffect(() => {
        if (translationButton.current) {
            translationButton.current.focus();
        }
    }, [english]);


    const handlePressed = () => {
        setPressed(!pressed);
        props.onChange();
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
                            <div className='translate' >{russian}</div>
                        </> : <>
                            <button className='buttonCheck' onClick={handlePressed} ref={translationButton}>Проверить</button>
                        </>
                }
            </div>
        </div>
    );
}

export default WordCard;
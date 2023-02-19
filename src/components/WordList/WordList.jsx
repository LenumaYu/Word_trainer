import { useState } from 'react';
import '../../styles/WordList.scss'
import deleteButton from '../../assets/images/deleteButton.png'
import editButton from '../../assets/images/editButton.png'
import saveButton from '../../assets/images/saveButton.png'



function WordList(props) {
    const { tags, english, transcription, russian } = props;
    const [isEdit, setEdit] = useState(false);
    const handleEdit = () => {
        setEdit(!isEdit);
    }


    return (
        <div className="table">
            {
                isEdit ?
                    <>
                        <input type="text" defaultValue={tags} />
                        <input type="text" defaultValue={english} />
                        <input type="text" defaultValue={transcription} />
                        <input type="text" defaultValue={russian} />
                        <div className='tableChanges'>
                            <button className='saveButton' onClick={handleEdit}><img src={saveButton} alt="" /></button>
                            <button className='deleteButton' onClick={handleEdit}>
                                <img src={deleteButton} alt="" />
                            </button>
                        </div>
                    </> :
                    <>
                        <div className='tableTag'>{tags}</div>
                        <div className='tableWord'>{english}</div>
                        <div className='tableTranscription'>{transcription}</div>
                        <div className='tableTranslate'>{russian}</div>
                        <div className='tableChanges'>
                            <button className='editButton' onClick={handleEdit}><img src={editButton} alt="" /></button>
                            <button className='deleteButton'>
                                <img src={deleteButton} alt="" />
                            </button>
                        </div>
                    </>
            }
        </div>
    );
}

export default WordList;


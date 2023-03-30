import words from '../../data.json';
import TableCreation from '../../components/TableCreation/TableCreation'

export default function PageHome() {
    return (
        <div><TableCreation words={words} /></div>
    )
}

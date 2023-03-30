import words from '../../data.json';
import CardSlider from '../../components/CardSlider/CardSlider'

export default function PageGame() {
    return (
        <div><CardSlider words={words} /></div>
    )
}

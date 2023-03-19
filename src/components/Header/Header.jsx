import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png'
import './Header.scss'

function Header() {

    return (
        <div className='menu'>
            <div className='contentBox'>
                <Link to="/"><img src={logo} alt="" /></Link>
                <Link to="/">Главная</Link>
                <Link to="/game">Тренировка</Link>
            </div>
        </div>
    )
}

export default Header;
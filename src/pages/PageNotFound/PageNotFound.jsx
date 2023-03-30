import './PageNotFound.scss'
import { Link } from 'react-router-dom';


function PageNotFound() {

    return (
        <div className='notFound'>You are lost
            <Link className='btn-goHome' to="/"><button className='btn'>Go to home</button></Link>

        </div>
    )
}

export default PageNotFound;
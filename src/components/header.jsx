import { Link } from 'react-router-dom'
import './header.css'

export default function Header(mobile){
    return(
        (mobile && (
            <div className='header'>

                <ul className='header-container'>
                    <li>
                        <Link to={'/'}>INÍCIO</Link>
                    </li>
                    <li>
                        <Link to={'/1ano'}>1 ANO</Link>
                    </li>
                    <li>
                        <Link to={'/2ano'}>2 ANO</Link>
                    </li>
                    <li>
                        <Link to={'/3ano'}>3 ANO</Link>
                    </li>
                </ul>

            </div>

        ))
    )
}
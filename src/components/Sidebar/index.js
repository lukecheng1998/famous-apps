import './index.scss'
import { Link, NavLink } from 'react-router-dom'
import LogoS from '../../assets/images/logo-s.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faSquare } from '@fortawesome/free-solid-svg-icons'
//import {  } from '@fortawesome/react-fontawesome'
import {faTwitter, faTiktok, faYoutube} from '@fortawesome/free-brands-svg-icons'
const Sidebar = () => (
    <div className='nav-bar'>
        <Link className = 'logo' to ='/'>
            <img src={LogoS} alt ="logo"/>
            <img className='sub-logo' src={LogoSubtitle} alt ="subtitle"/>
        </Link>
        <nav>
            <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color='#4d4d4e' />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="twitter-link" to="/twitter">
                <FontAwesomeIcon icon={faTwitter} color='#4d4d4e' />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="minecraft-link" to="/minecraft">
                <FontAwesomeIcon icon={faSquare} color='#4d4d4e' />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="youtube-link" to="/youtube">
                <FontAwesomeIcon icon={faYoutube} color='#4d4d4e' />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="tiktok-link" to="/tiktok">
                <FontAwesomeIcon icon={faTiktok} color='#4d4d4e' />
            </NavLink>
        </nav>
    </div>
)
export default Sidebar
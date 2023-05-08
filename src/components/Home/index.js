import LogoTitle from '../../assets/images/logo-s.png'
import { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray=['t', 'e', 's', 't']
    const jobArray = ['t', 'e', 's', 't']
    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _12`}>i,</span>
                    <br />
                    <span className={`${letterClass} _13`}>T</span>
                    <span className={`${letterClass} _14`}>e</span>
                    <span className={`${letterClass} _15`}>s</span>
                    <span className={`${letterClass} _16`}>t</span>
                    <img src={LogoTitle} alt="developer" />
                    <AnimatedLetters letterClass={letterClass}
                    strArray={nameArray}
                    idx={7} />
                    <br />
                    <AnimatedLetters letterClass={letterClass}
                    strArray={jobArray}
                    idx={11} />
                </h1>
                <h2>
                    See the apps here
                </h2>
                <Link to="/minecraft" className="flat-button">Minecraft</Link>
            </div>
        </div>
    )
}
export default Home
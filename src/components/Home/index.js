import LogoTitle from '../../assets/images/letter-f-256.png'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import Loader from 'react-loaders'
const Home = () => {
  const [letterClass] = useState('text-animate')
  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>w</span>
            <span className={`${letterClass} _14`}>e</span>
            <span className={`${letterClass} _15`}>l</span>
            <span className={`${letterClass} _16`}>c</span>
            <span className={`${letterClass} _17`}>o</span>
            <span className={`${letterClass} _18`}>m</span>
            <span className={`${letterClass} _19`}>e</span>
            <span className={`${letterClass} _20`}> </span>
            <span className={`${letterClass} _21`}>t</span>
            <span className={`${letterClass} _22`}>o</span>
            <img src={LogoTitle} alt="developer" />
            <span className={`${letterClass} _24`}>a</span>
            <span className={`${letterClass} _25`}>m</span>
            <span className={`${letterClass} _26`}>o</span>
            <span className={`${letterClass} _27`}>u</span>
            <span className={`${letterClass} _28`}>s</span>
            <br />
            <span className={`${letterClass} _29`}>a</span>
            <span className={`${letterClass} _30`}>p</span>
            <span className={`${letterClass} _31`}>p</span>
            <span className={`${letterClass} _32`}>s</span>
          </h1>
          <h2>See the apps here</h2>
          <Link to="/minecraft" className="flat-button">
            Minecraft
          </Link>
          <Link to="/youtube" className="flat-button">
            YouTube
          </Link>
          <Link to="/twitter" className="flat-button">
            Twitter
          </Link>
          <Link to="/tiktok" className="flat-button">
            TikTok
          </Link>
        </div>
      </div>
      <Loader type='pacman' />
    </>
  )
}
export default Home

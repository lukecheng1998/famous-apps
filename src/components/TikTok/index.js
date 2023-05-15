import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import Loader from 'react-loaders'
import { useState } from 'react'

const TikTok = () => {
    const [letterClass] = useState('text-animate')
  return (
    <>
      <div className="container info-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>T</span>
            <span className={`${letterClass} _12`}>i</span>
            <span className={`${letterClass} _13`}>k</span>
            <span className={`${letterClass} _14`}>T</span>
            <span className={`${letterClass} _15`}>o</span>
            <span className={`${letterClass} _16`}>k</span>
          </h1>
          <p>test paragraph 1</p>
          <p>test paragraph 1</p>
          <p>test paragraph 1</p>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}
export default TikTok

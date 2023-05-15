import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import Loader from 'react-loaders'
import { useState } from 'react'

const Minecraft = () => {
  const [letterClass] = useState('text-animate')
  return (
    <>
      <div className="container info-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>M</span>
            <span className={`${letterClass} _12`}>i</span>
            <span className={`${letterClass} _13`}>n</span>
            <span className={`${letterClass} _14`}>e</span>
            <span className={`${letterClass} _15`}>c</span>
            <span className={`${letterClass} _16`}>r</span>
            <span className={`${letterClass} _17`}>a</span>
            <span className={`${letterClass} _18`}>f</span>
            <span className={`${letterClass} _19`}>t</span>
          </h1>

          <p>Test paragraph 1</p>
          <p>Test paragraph 2</p>
          <p>Test paragraph 3</p>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}
export default Minecraft

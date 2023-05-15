import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import Loader from 'react-loaders'
import { useState } from 'react'

const Twitter = () => {
  const [letterClass] = useState('text-animate')
  return (
    <>
      <div className="container info-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>T</span>
            <span className={`${letterClass} _12`}>w</span>
            <span className={`${letterClass} _13`}>i</span>
            <span className={`${letterClass} _14`}>t</span>
            <span className={`${letterClass} _15`}>t</span>
            <span className={`${letterClass} _16`}>e</span>
            <span className={`${letterClass} _17`}>r</span>
          </h1>
          <p>test paragraph 1</p>
          <p>test paragraph 2</p>
          <p>test paragraph 3</p>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}
export default Twitter

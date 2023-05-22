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

          <p>
            Minecraft was created by Mojang studios and released in 2011. This
            game has no story guideline or win conditions. It is one of the most
            best celebrated and most played games in the entire world.
          </p>
          <p>
            In the game, players play in an open world where they are free to
            gather resources, craft and build items, build structures, and many
            more. Depending on the mode, players are free to fight with other
            players or cooporate with one another.
          </p>
        </div>
      </div>
      <Loader type='pacman' />
    </>
  )
}
export default Minecraft

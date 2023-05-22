import './index.scss'
import {faCube, faCubes, faCubesStacked, faUsers, faLaptop, faGamepad} from '@fortawesome/free-solid-svg-icons'
import Loader from 'react-loaders'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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
        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faCube} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faCubes} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCubesStacked} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faUsers} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faLaptop} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGamepad} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}
export default Minecraft

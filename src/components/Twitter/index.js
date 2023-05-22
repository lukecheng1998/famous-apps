import './index.scss'
import {faTwitter} from '@fortawesome/free-brands-svg-icons'
import {faMessage, faComments, faInbox, faBell, faAddressCard} from '@fortawesome/free-solid-svg-icons'
import Loader from 'react-loaders'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Twitter = () => {
  const [letterClass] = useState('text-animate')
  return (
    <>
      <div className="container twitter-page">
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
          <p>
            Twitter was founded in 2005 during a brainstorming session held by
            members of a broadcasting company, Odeo. The goal was to introduce
            an SMS service to communicate with a small group. It was first used
            internally by members Odeo before it was spun off as its own
            website.
          </p>
          <p>
            Originally twitter was not clearly defined. Many people considered
            it to be either microblogging or social media. In 2007 twitter usage
            increased from 20,000 to nearly 60,000 tweets per day. As a result
            of this and many other events, Twitter exploded in popularity and
            many people started to use it a lot more frequently to post about
            their lives.
          </p>
          <p>
            Finally the platform was recently acquired by Elon Musk in 2022 and
            began to revamped twitter's platform. He introduced Twitter Blue for
            $8 a month and changed the moderation content. Recently Twitter has
            been in a lot of controversy due to moderation issues, freedom of
            speech issues, and issues with its verification policy.
          </p>
        </div>
        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faTwitter} color="#5ED4F4" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faMessage} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faComments} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faInbox} color="#D83A12" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faBell} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faAddressCard} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type='pacman' />
    </>
  )
}
export default Twitter

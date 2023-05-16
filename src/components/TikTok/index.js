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
          <p>
            Currently, the CEO of TikTok is called “Shou Zi Chew”. ByteDance was
            under the name “Douyin” that was marketed as a video-sharing social
            networking service that was similar to Facebook and Instagram. Since
            Facebook and Instagram was banned in China, it would be a great way
            for people in China to also enjoy similar features. This was a
            genius marketing business for ByteDance.{' '}
          </p>
          <p>
            In 2017, ByteDance bought Musical.ly that allowed users to make 15
            seconds of lip-sync videos. But they shortly closed the app down and
            placed the features in “Douyin”. Using features of Musical.ly, it
            helped TikTok to allow users to upload short videos of content the
            users would like. In August 2018, ByteDance released a global
            verison of Douyin, TikTok. It had an elaborate algorithm which could
            tell what content the users liked.
          </p>
          <p>
            TikTok was known as a dancing and lip-sync app in 2018 community. It
            was popular during qaruntine as people had to stay home and had
            nothing to do. In 2023, Tiktok was getting banned for security
            concerns by lawmakers. They didn't successfully win this court case.
          </p>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}
export default TikTok

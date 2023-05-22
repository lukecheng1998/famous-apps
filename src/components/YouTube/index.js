import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useState } from 'react'
import Loader from 'react-loaders'

const Twitter = () => {
  const [letterClass] = useState('text-animate')
  return (
    <>
      <div className="container youtube-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>Y</span>
            <span className={`${letterClass} _12`}>o</span>
            <span className={`${letterClass} _13`}>u</span>
            <span className={`${letterClass} _14`}>T</span>
            <span className={`${letterClass} _15`}>u</span>
            <span className={`${letterClass} _16`}>b</span>
            <span className={`${letterClass} _17`}>e</span>
          </h1>
          <p>
            YouTube was first created in February 14, 2005, in California in San
            Mateo. It was founded by Steven Chen, Chad Hurley, and Jawed Karim.
            Youtube was created for an easier way for people to share videos
            worldwide and let others watch it. But before long Youtube, there
            was no actual source/app to share experiences which could let you
            share videos.
          </p>
          <p>
            The CEOs thought of making a platform where it allows others to
            upload experiences or documents they had which they wanted to share.
            They tested the app by uploading the first video on Youtube, “Me at
            the Zoo”, by Jawed Karim. There were several apps that allowed to
            upload and see videos, but they cost money and had to many processes
            that would take too long to upload. Youtube used better ways for
            users to upload, access, comment, like, and share videos with less
            requirements than others.
          </p>
          <p>
            Finally in December 15, 2005, YouTube was officially released
            getting more than 2 millions views. More videos were getting
            uploaded and ended with more than 100 millions per day by summer
            2006. The site just exploding in views and never seemed to slow
            down, but this created a problem for YouTube. They had to buy more
            computer equipment which cost a lot and broadband connections to the
            Internet. But YouTube couldn’t continue buying more equipment and
            funding the app to keep going, so they looked for a buyer. In
            October 9, 2006, Google bought YouTube for around $1.65b. Copyright
            was also a problem, but Google made deals for YouTube users to be
            able to use copyrighted items like songs and images.
          </p>
          <p>
            In 2008, YouTube made a deal with Metro-Goldwyn Mayer, Inc to be
            able to show full length movies and shows, making them free with
            advertisements in the videos. About 2.68 billion active users go on
            Youtube and at least 52% of the human population on Earth use
            YouTube once a month. Over 122 million people hop on YouTube
            everyday on App and Website. It will continue to grow and grow until
            a better website is created.
          </p>
        </div>
      </div>
      <Loader type='pacman' />
    </>
  )
}
export default Twitter

import { Link } from 'react-router-dom'
// import LogoTitle from '../../assets/images/logo-s.png'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useState } from 'react'
import { useEffect } from 'react'
// import Logo from './Logo'
import Loader from 'react-loaders'
import myImage from '../../assets/images/headshot.center.png'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const [loading, setLoading] = useState(true)

  const nameArray = ['I', "'", 'm', ' ', 'K', 'e', 'v', 'i', 'n', ' ', 'N', 'g']
  const jobArray = ['W', 'e', 'b', ' ', 'D', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r']

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])
  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            {/* <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m </span> */}

            {/* <img src={LogoTitle} alt="developer" /> */}
            <AnimatedLetters letterClass={letterClass}
              strArray={nameArray}
              idx={15} />
            <br />

            <AnimatedLetters letterClass={letterClass}
              strArray={jobArray}
              idx={22} />
          </h1>
          <h2>Frontend developer/ javascript expert/ fitness professional</h2>
          <Link to="/contact" className="flat-button">Contact Me</Link>
        </div>

        {/* <Logo /> */}
      </div>
      {!loading && <img alt="knheadshot" src={myImage} className="face"
        style={{
          borderRadius: "100%",
          // display: "block",

          // backgroundPosition: "right",

        }}
      ></img>}


      <Loader type="pacman" />
    </>
  )
}

export default Home
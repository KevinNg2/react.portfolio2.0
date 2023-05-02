import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import {
    faAngular,
    faCss3,
    faGitAlt,
    faHtml5,
    faJsSquare,
    faReact,
} from '@fortawesome/free-brands-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Loader from 'react-loaders'



const About = () => {

    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    return (
        <>
            <div className="container about-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['A', 'b', 'o', 'u', 't', ' ', 'M', 'e']}
                            idx={15}
                        />
                    </h1>
                    <p>
                        Freelance full stack web developer based in Southern California. Helping clients turn their ideas into websites and applications
                        that work, designed and developed for simple and intutive experiences.
                    </p>

                    <br />
                    <p>
                        Hello there! I am a meticulous Frontend Developer from Orange County, California. My favorite tech stacks include Javascript, CSS3,
                        MongoDB, MYSQL and Node.js. I'm also a huge fan of React! I am interested in anything coding or design related from software engineering
                        to UI/UX, and look forward to working on incredible projects with like minded individuals!
                    </p>
                    <p align="LEFT">
                        <a href="https://github.com/KevinNg2/react.portfolio2.0/blob/main/Kevin%20Ng%20FSD%20Resume%2023%20(1)%20(1).pdf" class="link">Download My Resume</a>
                    </p>
                    <p>
                    </p>
                </div>

                <div className="stage-cube-cont">
                    <div className="cubespinner">
                        <div className="face1">
                            <FontAwesomeIcon icon={faAngular} color="#DD0031" />
                        </div>
                        <div className="face2">
                            <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                        </div>
                        <div className="face3">
                            <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                        </div>
                        <div className="face4">
                            <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                        </div>
                        <div className="face5">
                            <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                        </div>
                        <div className="face6">
                            <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
                        </div>
                    </div>
                </div>
            </div>
            <Loader type="pacman" />
        </>
    )
}

export default About
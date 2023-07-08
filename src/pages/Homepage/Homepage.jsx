import React from 'react';
import "./Homepage.scss";
import {motion} from "framer-motion";

// Images
import forest from "../../asset/output-onlinepngtools.png";
import sun from "../../asset/sun.png";
import avatar from "../../asset/Avatars - Default with Backdrop.png";
// Screenshort 
import explorecity from "../../asset/explorecity.jpeg";
import ai from "../../asset/ai_image_generator.png";
import brainbox from "../../asset/brainbox.jpeg";
const Homepage = () => {
    // button varriants 
    const buttonVariants = {
        initial: {
            opacity: 0
        }, 
        animate: {
            opacity: 1,
            transition: {
                duration: 0.3,
                delay: 1
            }
        },
        hover: {
            rotate: -3,
            duration: 0.5
        }
    }
    return (
        <div className="homepage">
            <div className="homepage__hero">
                <div className="hero__left">
                    <motion.div 
                        initial={{opacity: 0}}
                        animate={{opacity:100}}
                        transition={{
                            duration: 2
                        }}
                        className="hero__desc"
                    >
                        <p className="hero__title">Hello,</p>
                        <p className="hero__title">I am <span className="hero__name">Neat.</span></p>
                        <p className="hero__title">Web Developer</p>
                    </motion.div>
                    <motion.p 
                        initial={{opacity: 0}}
                        animate={{opacity:100}}
                        transition={{
                            duration: 1,
                            delay: 0.5
                        }}
                        className="hero__detail"
                    >
                        I make positive impact by building websites. I love three things: coffee, hiking and coding.
                    </motion.p>
                    <motion.button
                        variants={buttonVariants}
                        initial="initial"
                        animate="animate"
                        whileHover="hover"
                        className="hero__btn">
                        Check out my projects
                    </motion.button>
                </div>
                <div className="hero__right">
                    <motion.img 
                        src={sun} 
                        alt="sun"
                        className="hero__sun"
                        initial={{
                            x: 300
                        }}
                        animate={{
                            x: 0
                        }}
                        transition={{
                            delay: 1.5,
                            duration: 1
                        }}
                        whileInView={{
                            scale: [1,1.1,1,1.1,1],
                            y: [-30,0,-30],
                            transition: {
                                duration: 6,
                                repeat: Infinity
                            }
                        }}
                    >
                    </motion.img>
                    <motion.img 
                        initial={{
                            scale: 0
                        }}  
                        animate={{
                            scale: 1
                        }}
                        transition={{
                            delay: 1.5,
                            duration: 2
                        }}
                        src={forest} 
                        alt="sun"
                        className="hero__forest"
                    >
                    </motion.img>
                </div>
            </div>
            <div className="homepage__about">
                <div className="about__title-container">
                    <h1 className="about__title">ABOUT ME</h1>
                    <div className="about__border"></div>
                </div>
                <div className="about__content">
                    <img src={avatar} alt="Avatar" className="about__avatar"/>
                    <div className="about__info">
                        <div className="about__skills">
                            <p className="about__skill bg-blue">HTML</p>
                            <p className="about__skill bg-blue">CSS</p>
                            <p className="about__skill bg-blue">Sass</p>
                            <p className="about__skill bg-blue">JavaScript</p>
                            <p className="about__skill bg-blue">React</p>
                            <p className="about__skill bg-blue">BootStrap</p>
                            <p className="about__skill bg-red">Node.js</p>
                            <p className="about__skill bg-red">Express.js</p>
                            <p className="about__skill bg-red">MongoDB</p>
                            <p className="about__skill bg-red">Mongoose</p>
                            <p className="about__skill bg-red">MySQL</p>
                            <p className="about__skill bg-red">Knex.js</p>
                        </div>
                        <div className="about__details">
                            <p className="about__detail">Back in Grade 10, I decided to join a coding competition called “Technovation Girls” with a bunch of friends, but never could I ever imagine this coding competition has led me to find my passion and the kind of career I want. </p>
                            <p className="about__detail">Right after high school in 2020, I decided to pursue a bachelor degree in information technology, and I can’t wait to graduate in a couple of months. I remembered learning JavaScript as my first programming language, and suddenly fell in love with it.</p>
                            <p className="about__detail">Currently in my senior year, I am working as a Student IT Assistant, and I really enjoy providing technical supports to students, staff and faculty. I can’t wait to take on the challenges in the web development field as I am super excited to learn and explore new technologies.</p>
                        </div>
                        <div className="about__btn-container">
                            <button className="about__btn">Read my full bio</button>
                        </div>
                    </div>
            </div>    
        </div>
        {/* Project Section */}
        <div className="homepage__projects">
            <div className="projects__title-container">
                <h1 className="projects__title">FEATURED PROJECTS</h1>
                <div className="projects__border"></div>
            </div>
        
        {/* Project 1 */}
        <div className="projects__project">
            <p className="project__title">BrainBox</p>
            <div className="project__content">
                <img src={brainbox} alt="" className="project__img" />
                <div className="project__info">
                    <div className="project__techstacks">
                        <p className="project__item">JavaScript</p>
                        <p className="project__item">React</p>
                        <p className="project__item">Node.js</p>
                        <p className="project__item">Express.js</p>
                        <p className="project__item">MongoDB</p>
                        <p className="project__item">Mongoose</p>
                        <p className="project__item">Cloudinary</p>
                        <p className="project__item">JWT</p>
                    </div>
                    <p className="project__detail">BrainBox is a student-focused platform resembling LinkedIn, designed to connect students based on their university, degree, and courses. BrainBox offers news feed, course analysis, and a marketplace. It enhances networking and collaboration between students.</p>
                    
                    <div className="project__btn-container">
                        <button className="project__btn">View project</button>
                        <div className="project__btn-bg"></div>
                    </div>
                    
                </div>
            </div>
        </div>
        <div className="projects__project">
            <p className="project__title">Explore+City.</p>
            <div className="project__content">
                <img src={explorecity} alt="" className="project__img" />
                <div className="project__info">
                    <div className="project__techstacks">
                        <p className="project__item">JavaScript</p>
                        <p className="project__item">React</p>
                        <p className="project__item">Node.js</p>
                        <p className="project__item">Express.js</p>
                        <p className="project__item">MongoDB</p>
                        <p className="project__item">Mongoose</p>
                    </div>
                    <p className="project__detail">Explore+City. is a full-stack application that revolutionizes city exploration. With just a few clicks, users can search for a city, uncovering valuable information about cost of living, weather, air quality, tourist attractions and more.</p>
                    
                    <div className="project__btn-container">
                        <button className="project__btn">View project</button>
                        <div className="project__btn-bg"></div>
                    </div>
                    
                </div>
            </div>
        </div>
        <div className="projects__project">
            <p className="project__title">Ai Image Generator</p>
            <div className="project__content">
                <img src={ai} alt="" className="project__img" />
                <div className="project__info">
                    <div className="project__techstacks">
                        <p className="project__item">JavaScript</p>
                        <p className="project__item">React</p>
                        <p className="project__item">Node.js</p>
                        <p className="project__item">Express.js</p>
                        <p className="project__item">MongoDB</p>
                        <p className="project__item">Mongoose</p>
                        <p className="project__item">Cloudinary</p>

                    </div>
                    <p className="project__detail">AI Image Generator is a MERN stack application that utilizes artificial intelligent(DALL-E) to generate image based on user prompts. Also, users can share the generated image on the community page, and other users can later download those images.</p>
                    
                    <div className="project__btn-container">
                        <button className="project__btn">View project</button>
                        <div className="project__btn-bg"></div>
                    </div>
                    
                </div>
            </div>
        </div>
        </div>
    </div>
    )
}

export default Homepage
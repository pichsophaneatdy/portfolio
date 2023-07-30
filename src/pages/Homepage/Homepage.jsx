import React from 'react';
import "./Homepage.scss";
import {motion} from "framer-motion";
import {Link} from "react-router-dom";
// Images
import forest from "../../asset/output-onlinepngtools.png";
import sun from "../../asset/sun.png";
import link from "../../asset/icons8-external-link-48 (1).png";
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
                        <p className="hero__title">This is <span className="hero__name">Neat.</span></p>
                        <p className="hero__title">I am a web developer.</p>
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
                    <Link to="/projects">
                        <motion.button
                            variants={buttonVariants}
                            initial="initial"
                            animate="animate"
                            whileHover="hover"
                            className="hero__btn">
                            Check out my projects
                        </motion.button>
                    </Link>
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
            {/* About */}
            <div 
                className="homepage__about"
            >
                <motion.div 
                    className="about__title-container"
                    initial={{opacity: 0}}
                    whileInView={{opacity:1}}
                    transition={{duration: 1.5, delay: 0.5}}
                >
                    <h1 className="about__title">ABOUT ME</h1>
                    <div className="about__border"></div>
                </motion.div>
                <div className="about__content">
                    <div className="about__info">
                        <div className="about__details">
                            <motion.div 
                                initial={{opacity: 0}}
                                whileInView={{opacity:1}}
                                transition={{duration: 1.5, delay: 0.5}}
                                className="about__detail"
                            >
                                <p className="about__question">How I started coding</p>
                                <p className="about__answer">
                                    Back in Grade 10, I decided to join a coding competition called “Technovation Girls” with some friends, but never could I ever imagine this coding competition has led me to find my passion for coding and the kind of career I want. 
                                </p>
                            </motion.div>
                            <motion.div 
                                initial={{opacity: 0}}
                                whileInView={{opacity:1}}
                                transition={{duration: 1.5, delay: 0.5}}
                                className="about__detail"
                            >
                                <p className="about__question">My Education</p>
                                <p className="about__answer"><span className="m-bottom">Right after high school in 2020, I decided to pursue a bachelor degree in information technology at Fairleigh Dickinson University, Vancouver.</span><span className="m-bottom">During the last three years in university, I have been introduced to many computer science concepts including object-oriented programming in Java, data structure, algorithms, C#, ASP.Net, JavaScript.</span> <span className="m-bottom">I can't wait to graduate in Decemeber 2023.</span></p>
                            </motion.div>
                            <motion.div 
                                initial={{opacity: 0}}
                                whileInView={{opacity:1}}
                                transition={{duration: 1.5, delay: 0.5}}
                                className="about__detail"
                            >
                                <p className="about__question">My Professional Experience</p>
                                <p className="about__answer">Since August 2022, I have been working as a Student IT Assistant at Fairleigh Dickinson University. I really enjoy providing technical support to students. staff, and faculty.</p>
                            </motion.div>
                            <motion.div 
                                initial={{opacity: 0}}
                                whileInView={{opacity:1}}
                                transition={{duration: 1.5, delay: 0.5}}
                                className="about__detail"
                            >
                                <p className="about__question">My Tech Stacks</p>
                                <div className="about__skills">
                                    <p className="about__skill bg-blue">HTML</p>
                                    <p className="about__skill bg-blue">CSS</p>
                                    <p className="about__skill bg-blue">Sass</p>
                                    <p className="about__skill bg-blue">JavaScript</p>
                                    <p className="about__skill bg-blue">TypeScript</p>
                                    <p className="about__skill bg-blue">React</p>
                                    <p className="about__skill bg-blue">BootStrap</p>
                                    <p className="about__skill bg-red">Node.js</p>
                                    <p className="about__skill bg-red">Express.js</p>
                                    <p className="about__skill bg-red">MongoDB</p>
                                    <p className="about__skill bg-red">Mongoose</p>
                                    <p className="about__skill bg-red">MySQL</p>
                                    <p className="about__skill bg-red">Knex.js</p>
                                    <p className="about__skill bg-red">GraphQL</p>
                                    <p className="about__skill bg-red">Apollo Server</p>
                                    <p className="about__skill bg-red">Apollo Client</p>
                                    <p className="about__skill bg-red">Firebase</p>
                                </div>
                            </motion.div>
                        </div>
                        {/* <motion.div 
                            initial={{opacity: 0}}
                            whileInView={{opacity:1}}
                            transition={{duration: 1.5, delay: 0.5}}
                            className="about__btn-container">
                            <button className="about__btn">Read my full bio</button>
                        </motion.div> */}
                    </div>
                </div>    
        </div>
        {/* Project Section */}
        <div className="homepage__projects">
            <motion.div
                initial={{opacity: 0}}
                whileInView={{opacity:1}}
                transition={{duration: 1.5, delay: 0.5}}
                className="projects__title-container"
            >
                <h1 className="projects__title">FEATURED PROJECTS</h1>
                <div className="projects__border"></div>
            </motion.div>
        {/* Project 1 */}
        <motion.div 
            initial={{opacity: 0}}
            whileInView={{opacity:1}}
            transition={{duration: 1.5, delay: 0.5}}
            className="projects__project">
            <p className="project__title">LeetLog</p>
            <div className="project__content">
                <img src="https://i.imgur.com/Q5c6vQX.png" alt="" className="project__img" />
                <div className="project__info">
                    <div className="project__techstacks">
                        <p className="project__item">TypeScript</p>
                        <p className="project__item">React</p>
                        <p className="project__item">Apollo Client</p>
                        <p className="project__item">Node.js</p>
                        <p className="project__item">GraphQL</p>
                        <p className="project__item">MongoDB</p>
                        <p className="project__item">Mongoose</p>
                        <p className="project__item">Apollo Server</p>
                        <p className="project__item">Firebase</p>
                    </div>
                    <p className="project__detail">LeetLog is a full-stack web application that helps users keep track of their progress in solving LeetCode questions. Additionally, LeetLog provides a distribution map that visualizes the user's progress over time, making it easier to track improvements in problem-solving skills.</p>
                    
                    <a href="https://github.com/pichsophaneatdy/Leetlog-Server" className="project__btn-container">
                        <button className="project__btn">View project</button>
                        <div className="project__btn-bg"></div>
                    </a>
                    
                </div>
            </div>
        </motion.div>
        <motion.div 
            initial={{opacity: 0}}
            whileInView={{opacity:1}}
            transition={{duration: 1.5, delay: 0.5}}
            className="projects__project">
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
                    
                    <a href="https://github.com/pichsophaneatdy/brainbox-front-end" className="project__btn-container">
                        <button className="project__btn">View project</button>
                        <div className="project__btn-bg"></div>
                    </a>
                    
                </div>
            </div>
        </motion.div>
        <motion.div 
            initial={{opacity: 0}}
            whileInView={{opacity:1}}
            transition={{duration: 1.5, delay: 0.5}}
            className="projects__project">
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
                    
                    <a href="https://github.com/pichsophaneatdy/Explore_City_FrontEnd" className="project__btn-container">
                        <button className="project__btn">View project</button>
                        <div className="project__btn-bg"></div>
                    </a>
                    
                </div>
            </div>
        </motion.div>
        <motion.div 
            initial={{opacity: 0}}
            whileInView={{opacity:1}}
            transition={{duration: 1.5, delay: 0.5}}
            className="projects__project">
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
                    
                    <a href="https://github.com/pichsophaneatdy/AI-Image-Generator" className="project__btn-container">
                        <button className="project__btn">View project</button>
                        <div className="project__btn-bg"></div>
                    </a>
                    
                </div>
            </div>
        </motion.div>
        <Link to="/projects" className="project__archive-link">
            <motion.a>
                View Full Project Archive
                <img src={link} alt="link icon" className="project__archive"/>
            </motion.a>
        </Link>
        </div>
    </div>
    )
}

export default Homepage
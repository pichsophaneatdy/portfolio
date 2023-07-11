import React from 'react';
import "./Experience.scss";
import {motion} from "framer-motion";
import { Link } from 'react-router-dom';
// icon
import arrow from "../../asset/icons8-back-arrow-32 (1).png";
// data
import experience from '../../data/experience';
const Experience = () => {
    return (
        <div className="experience">
            <div className="experience__header">
                <Link to="/" className="link">
                    <motion.div 
                        initial={{x:-200}}
                        animate={{x: 0}}
                        transition={{duration: 1.5}}
                        className="return__container">
                        <img src={arrow} alt="Back arrow" className="return__icon" />
                        <p className="return__text">
                            Pichsophaneat Dy
                        </p>
                    </motion.div>
                </Link>
                <motion.p 
                    initial={{x: -200}}
                    animate={{x:0}}
                    transition={{duration: 1.5}}
                    className="experience__title"
                >
                    EXPERIENCE
                </motion.p>
            </div>
            <div className="experience__content">
                {
                    experience?.map((experience, index) => {
                        return (
                            <motion.div 
                                initial={{y:700}}
                                animate={{y:0}}
                                transition={{duration: 2, delay: index+1}}
                                key={index} 
                                className="experience__item"
                            >
                                <p className="experience__date">{experience.date}</p>
                                <div className="experience__detail">
                                    <p className="experience__title1">{experience.title}</p>
                                    <p className="experience__company">{experience.company}</p>
                                    <p className="experience__desc">{experience.role}</p>
                                    <div className="experience__skills">
                                        {
                                            experience.skills.map((skill, index) => {
                                                return <p key={index} className="experience__skill">{skill}</p>
                                            })
                                        }
                                    </div>
                                </div>
                            </motion.div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Experience
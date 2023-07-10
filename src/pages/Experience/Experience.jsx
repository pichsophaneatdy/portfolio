import React from 'react';
import "./Experience.scss";
import {motion} from "framer-motion";
// data
import experience from '../../data/experience';
const Experience = () => {
    return (
        <div className="experience">
            <motion.p 
                initial={{x: -200}}
                animate={{x:0}}
                transition={{duration: 1.5}}
                className="experience__title"
            >
                EXPERIENCE
            </motion.p>
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
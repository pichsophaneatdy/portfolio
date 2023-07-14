import React from 'react';
import "./Projects.scss";
import data from "../../data/project";
import github from "../../asset/icons8-github-128.png";
import {motion} from "framer-motion";

const Projects = () => {
    return (
        <motion.div 
            initial={{y:500}}
            animate={{y: 0}}
            transition={{duration: 1.5, delay: 0.5}}
            className="projects-scroll">
            {
                data.map((project, index) => {
                    return (
                        <a href={project.link} target="__blank" key={index} className="project-card">
                            <div className="project-card__container">
                                <img src={project.image} alt={project.name} className="project-card__image" />
                            </div>
                            <div className="project-card__content">
                                <p className="project-card__name">{project.name}</p>
                                <a href={project.link} target="__blank">
                                    <img src={github} alt="" className="project-card__icon"/>
                                </a>
                            </div>
                        </a>
                    )
                })
            }
        </motion.div>
    )
}

export default Projects
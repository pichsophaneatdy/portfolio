import React from 'react';
import "./Project.scss";
import {motion} from "framer-motion";
import { Link } from 'react-router-dom';
// components
import Projects from '../../components/Projects/Projects';
// data
import projects from '../../data/project';
// icon
import link from "../../asset/icons8-external-link-48 (1).png";
import arrow from "../../asset/icons8-back-arrow-32 (1).png";
const Project = () => {
    return (
        <div className="projectPage">
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
                initial={{x:-200}}
                animate={{x: 0}}
                transition={{duration: 1.5}}
                className="projectPage__title"
            >
                All Projects
            </motion.p>
            <Projects />
            <motion.table 
                initial={{y:500}}
                animate={{y: 0}}
                transition={{duration: 1.5, delay: 0.5}}
                className="projectPage__table"
            >
                <thead>
                    <tr className="projectPage__border">
                        <th className="projectPage__date">Date</th>
                        <th className="projectPage__name">Project</th>
                        <th className="projectPage__hide2 projectPage__type">Type</th>
                        <th className="projectPage__hide4 projectPage__tech">Built with</th>
                        <th className="projectPage__hide projectPage__anchor">Link</th>
                    </tr>
                </thead>
                <tbody>
                {
                    projects?.map((project) => {
                        return (
                            <tr key={project.name}>
                                <td className="projectPage__date">{project.date}</td>
                                <td className="projectPage__name">
                                    {project.name}
                                    <a  className="projectPage__link projectPage__hide3" href={project.link}>
                                        <img className="projectPage__icon2" src={link} alt="Link"/>
                                    </a>
                                </td>
                                <td className="projectPage__hide2 projectPage__row projectPage__type">{project.type}</td>
                                <td className="projectPage__hide4 projectPage__techstack">
                                    {
                                        project?.technology?.map((item, index) => {
                                            return <span key={index} className="projectPage__single-tech">{item}</span>
                                        })
                                    }
                                </td>
                                <td className="projectPage__hide projectPage__anchor">
                                    <a className="projectPage__link" href={project.link}>
                                        GitHub
                                        <img className="projectPage__icon" src={link} alt="Link"/>
                                    </a>
                                </td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </motion.table>
        </div>
    )
}

export default Project
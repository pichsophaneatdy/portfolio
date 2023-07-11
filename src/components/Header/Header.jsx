import React, {useState, useEffect} from 'react';
import "./Header.scss";
import {NavLink} from "react-router-dom";
import {motion} from "framer-motion"
import { useLocation } from 'react-router-dom';

// Icon
import email from "../../asset/icons8-email-100.png";
import github from "../../asset/icons8-github-128.png";
import linkedin from "../../asset/icons8-linkedin-50.png";
import menu from "../../asset/icons8-menu-64.png";
import cross from "../../asset/icons8-cross-30.png";
const Header = () => {
    const location = useLocation();
    const currentLocation = location.pathname;
    const [active, setActive] = useState(1);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    // menu variants
    const variants = {
        open: { opacity: 1, x: 0 ,
            transition: {
            stiffness: 20,
            duration: 0.5
        } },
        closed: { opacity: 0, x: "100%", type: "spring", transition: {
            stiffness: 20,
            duration: 0.5
        } },
    }
    useEffect(() => {
        if(currentLocation === "/") setActive(1);
        if(currentLocation === "/projects") setActive(2);
        if(currentLocation === "/experience") setActive(3);
        if(currentLocation === "/resume") setActive(4);
    }, [currentLocation])
    return (
    <header>
            <motion.nav
                initial={false}
                animate={isMenuOpen ? "open" : "closed"}
                variants={variants}
                className="header__dropdown-menu"
            >
                <div className="header__content">
                    <nav className="header__nav">
                        <NavLink to="/" onClick={()=>{
                                setIsMenuOpen(false);
                            }} className={active === 1 ? "header__item--active" : "header__item"}>
                            <p className="header__item-text">01</p>
                            <p className="header__item-text">About Me</p>
                        </NavLink>
                        <NavLink to="/projects" onClick={()=>{
                                setIsMenuOpen(false);
                            }} className={active === 2 ? "header__item--active" : "header__item"}>
                            <p className="header__item-text">02</p>
                            <p className="header__item-text">Projects</p>
                        </NavLink>
                        <NavLink to="/experience" onClick={()=>{
                                setIsMenuOpen(false);
                            }} className={active === 3 ? "header__item--active" : "header__item"}>
                            <p className="header__item-text">03</p>
                            <p className="header__item-text">Experience</p>
                        </NavLink>
                        <a target="__blank" href="https://drive.google.com/file/d/12HI4vLWpsPQZxZhVsfQRkb5nrT3U4uny/view?usp=sharing" onClick={()=>{
                                setIsMenuOpen(false);
                            }} className={active === 4 ? "header__item--active" : "header__item"}>
                            <p className="header__item-text">04</p>
                            <p className="header__item-text">Resume</p>
                        </a>
                    </nav>
                </div>
        </motion.nav>

        
        <div className="header2">
            <div className="header__left">
                <motion.a
                    whileHover={{scale: 1.15}}
                    transition={{duration: 0.5}}
                    target="_blank" href="mailto:pichsophaneat@gmail.com">
                    <img src={email} alt="" className="header__icon" />
                </motion.a> 
                <motion.a 
                    whileHover={{scale: 1.15}}
                    transition={{duration: 0.5}}
                    target="_blank" href="https://github.com/pichsophaneatdy">
                    <img src={github} alt="" className="header__icon" />
                </motion.a> 
                <motion.a 
                    whileHover={{scale: 1.15}}
                    transition={{duration: 0.5}}
                    target="_blank" href="https://www.linkedin.com/in/pichsophaneat/">
                    <img src={linkedin} alt="" className="header__icon" />
                </motion.a> 
            </div>
            <div className="header__right--big-screen">
                <NavLink className="header__anchor" to="/">
                    <p className={active === 1 ? "header__link--active" : "header__link"}>01<span>About Me</span></p>
                </NavLink>
                <NavLink className="header__anchor" to="/projects">
                    <p className={active === 2 ? "header__link--active" : "header__link"}>02<span>Projects</span></p>
                </NavLink>
                <NavLink className="header__anchor" to="/experience">
                    <p className={active === 3 ? "header__link--active" : "header__link"}>03<span>Experience</span></p>
                </NavLink>
                <a target="__blank" href="https://drive.google.com/file/d/1B1AkgCpCYkR_SpMh4-8Ul5U05POcPDfB/view?usp=sharing" className="header__anchor" to="/resume">
                    <p className={active === 4 ? "header__link--active" : "header__link"}>04<span>Resume</span></p>
                </a>
            </div>
            <div className="header__right">
                <button 
                    
                    onClick={()=> setIsMenuOpen(!isMenuOpen)} 
                    className="header__menu-btn"
                >
                    <motion.img whileHover={{scale:1.2, transition:{duration:0.5}}} src={isMenuOpen ? cross : menu} alt="" className="header__menu-icon" />
                </button>
            </div>
        </div>
    </header>
    )
}

export default Header
import './About.css'
import Timeline from './Timeline.js'
import Chevron from './chevron.svg'
import { useEffect, useState } from 'react';

const About = () => {
    const [showHeader, setShowHeader] = useState(false)

    useEffect(() => {
    }, []);

    const hideHeader = () => {
        if(window.scrollY > 0)
        {
            setShowHeader(true)
        }
        else
        {
            setShowHeader(false)
        }
    }



    window.addEventListener('scroll', hideHeader, true);


    return (
        <div className='about-container'>
            <div className='welcome-container'>
                <div className={`header-container ${showHeader && 'header-hide'}`}>
                    <h1 className='header'>hi, i'm <span className='header-inner-name' >Josh</span> 👋</h1>
                    <h2 className='subheader'>a software development enthusiast</h2>
                </div>

                <div className='scroller-container'>
                    <h1 className='scroller-header'><span className='header-inner-name'>scroll</span> to learn more about me</h1>
                    <div className='chevron-container'>
                        <img className='chevron chevron-delay-0' src={Chevron}></img>
                        <img className='chevron chevron-delay-1' src={Chevron}></img>
                        <img className='chevron chevron-delay-2' src={Chevron}></img>
                    </div>
                </div>

            </div>
            <Timeline />
        </div>

    );
};

export default About;

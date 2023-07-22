import React from 'react';
import ypkWelcome from '../../media/photos/ypk-welcome.png';
import introSecFooter from './elements/intro-sec-footer.svg';
import './styles/intro-section.css';


const IntroSection = () => {
    return (
        <div className='sec-intro relative w-full'>
            <div className='sec-intro-container text-white lftf t-0 relative h-700px border w-1kpx'>
                <h4>Hello.Namaste</h4>
                <h5>I am</h5>
                <h1>YUNUS</h1>
                <h3>PARVEZ</h3>
                <h2>KHAN</h2>
                <img
                    alt="Yunus Parvez Khan smilling and introducing something"
                    src={ypkWelcome}
                    className='h-600px absolute t-100px right-0'
                />
            </div>
            {/* This div contains a svg as background for nice visual effects */}
            <div className='intro-sec-footer-div relative w-full' />
        </div>
    )
}

export default IntroSection;
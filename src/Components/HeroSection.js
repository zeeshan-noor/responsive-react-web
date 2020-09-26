import React from 'react';
import './HeroSection.css';
import {Button} from './Button';
import '../App.css';
function HeroSection() {
    return (
        <div className="hero-container">
            <video src="/videos/video-2.mp4" autoPlay loop muted />
            <h1>Adventure Awaites</h1>
            <p>What are waiting for?</p>
            <div className="hero-btns" >
                <Button
                className="btns"
                buttonStyle='btn--outline'
                buttonSize='btn--large'
                >
                    Get Started
                </Button>
                <Button
                className="btns"
                buttonStyle='btn--primary'
                buttonSize='btn--large'
                >
                    Watch Trailar <i className="far fa-play-circle" />
                </Button>
            </div>
        </div>
    )
}

export default HeroSection ;

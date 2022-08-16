import React from 'react'
import '../App.css';
import { Button } from './Button'
import './HeroSection.css';
import imgA from '../images/company.png';

function HeroSection() {

    return (
        <div className='hero-container'>
            <img src={imgA} />
            <h1>이 돈을 언제 썼지?</h1><br></br>
            <p>더 이상 고민하지 마세요! MergePlan이 다 알려드립니다.</p>
            <div className="hero-btns">
                <Button className='btns' buttonStyle='btn--outline'
                    buttonSize='btn--large'>GET STARTED</Button>
                <Button className='btns' buttonStyle='btn--primary'
                    buttonSize='btn--large'>WATCH TRAILER <i className='far fa-play-circle' /></Button>
            </div>
        </div>
    )
}

export default HeroSection
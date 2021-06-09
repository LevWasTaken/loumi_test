import React from 'react';
import { Slide } from 'react-slideshow-image';

import 'react-slideshow-image/dist/styles.css'
import '../css/Slideshow.css'
import Candidate from './Candidate';
import candidates from '../candidates.json'

const displayCandidate = candidates.candidates.map((candidate) => {
    return <Candidate title={candidate.title} tenants={candidate.tenants} income={candidate.income} visiting_date={candidate.visiting_date}></Candidate>
})

let slides = [];
let size = 3

while (displayCandidate.length > 0) {
    slides.push(<div className="each-slide">{displayCandidate.splice(0, size)}</div>)
}

console.log(slides)
const Slideshow = () => {
    return (
        <div className="slide-container">
            <Slide
                autoplay={false}
                prevArrow={<div style={{ width: "30px", marginRight: "30px" }}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#aaa"><path d="M242 180.6v-138L0 256l242 213.4V331.2h270V180.6z" /></svg></div>}
                nextArrow={<div style={{ width: "30px", marginLeft: "30px" }}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#aaa"><path d="M512 256L270 42.6v138.2H0v150.6h270v138z" /></svg></div>}
            >
                {slides}
            </Slide>

        </div>
    )
}
export default Slideshow

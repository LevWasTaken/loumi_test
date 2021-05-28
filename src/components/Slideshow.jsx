import React from 'react';
import { Slide } from 'react-slideshow-image';

import 'react-slideshow-image/dist/styles.css'
import '../css/Slideshow.css'
import Candidate from './Candidate';
import candidates from '../candidates.json'

const displayCandidate = candidates.candidates.map((candidate) => {
    return <Candidate title = {candidate.title} tenants = {candidate.tenants} income = {candidate.income} visiting_date = {candidate.visiting_date}></Candidate>
})

console.log(candidates)
console.log(displayCandidate)
const Slideshow = () => {
    return (
        <div className="slide-container">
            <Slide autoplay={false}>
                <div className="each-slide">
                    {displayCandidate[0]}
                    {displayCandidate[1]}
                    {displayCandidate[2]}
                </div>
                <div className="each-slide">
                    {displayCandidate[3]}
                    {displayCandidate[4]}
                </div>
            </Slide>

        </div>
    )
}
export default Slideshow

import React from 'react';
import Carousel from 'react-elastic-carousel'
import Candidate from './Candidate';
import candidates from '../candidates.json'
import '../css/Caroussel.css'
const CustomCarousel = () => {
    
    const displayCandidate = candidates.candidates.map((candidate) => {
        return <Candidate title = {candidate.title} tenants = {candidate.tenants} income = {candidate.income} visiting_date = {candidate.visiting_date}></Candidate>
    })
    return (
        <div>
        <Carousel itemsToShow={3} renderPagination={()=> <div></div>}>
            <div className ="candidate">{displayCandidate[0]}</div>
            <div className ="candidate">{displayCandidate[1]}</div>
            <div className ="candidate">{displayCandidate[2]}</div>
            <div className ="candidate">{displayCandidate[3]}</div>
            <div className ="candidate">{displayCandidate[4]}</div>
        </Carousel>
        </div>
    )
}

export default CustomCarousel
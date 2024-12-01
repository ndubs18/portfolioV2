import React from 'react';

import './Techimages.css';

const Techimages = () => {
    return (
        <div className="Techimages"> 
            <div className='image'><img style={{height: "75px", width: "70px"}} src={require("../../images/256px-Typescript_logo_2020.svg.png")} alt = "techImage"></img></div>
            <div className='image'><img style={{height: "85px", width: "85px"}} src={require("../../images/JavaScript-01.svg")} alt = "techImage"></img></div>
            <div className='image'><img src={require("../../images/Node-JS-01.svg" )} alt = "techImage"></img></div>
            <div className='image'><img src={require("../../images/React-01.svg")} alt = "techImage"></img></div>
            <div className='image'><img src={require("../../images/HTML-5-01.svg")} alt = "techImage"></img></div>
            <div className='image'><img src={require("../../images/CSS-3-01.svg")} alt = "techImage"></img></div>
        </div>
    )
}

export default Techimages;
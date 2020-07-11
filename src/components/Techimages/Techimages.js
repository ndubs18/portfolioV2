import React from 'react';

import './Techimages.css'

const Techimages = () => {
    return (
        <div className="Techimages"> 
            <div className='image'><img src={require('./')} >one</img></div>
            <div className='image'><img src={require('./')} >two</img></div>
            <div className='image'><img src={require('./')} >three</img></div>
            <div className='image'><img src={require('./')} >four</img></div>
            <div className='image'><img src={require('./')} >five</img></div>
            <div className='image'><img src={require('./')} >six</img></div>
        </div>
    )
}

export default Techimages;
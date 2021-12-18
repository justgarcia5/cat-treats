import React from 'react';
import catImage from '../../images/cat_image1_desktop.png';

export default function MobileIntro(props) {

    return(
        <div className='intro-div'>
            <img src={catImage} alt='friendly cat' />
            <div className='col1'>
                <h1>
                    Treat your pet (and you).
                    <br />
                    It's on us!
                </h1>
                <p>Treat your pet to a healthy treat for <b>free</b> to kick off your Public Goods trial membership.</p>
                <p className='col1-2childp'><b>See what it's like to be a Public Goods member.</b></p>
                <ul>
                    <li>Included in your bundle is a free 2 week membership that gives you unlimited access to our entire collection of sustainable essentials.</li>
                    <li>Take a load off. We make it easier for you to make better choices. Always included: eco-friendly products you can trust.</li>
                </ul>
            </div>
        </div>
    )
}
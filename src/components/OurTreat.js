import React from 'react';
import './OurTreat.css'

import catTreats from '../images/cat_treats_fd_minnows_01 3.png'
import happyCat from '../images/cat_image2_mobile.png'

export default function OurTreat() {
    return(
        <div>
            <div className='ourtreats-div'>
                <h4>OUR TREAT</h4>
                <div className='treats-div-row1'>
                    <div>
                        <img src={catTreats} alt='cat treats' />
                        <h4>Freez Dried Minnows</h4>
                        <p>Healthy ingredients with nothing to hide</p>
                    </div>
                    <div>
                        <img src={catTreats} alt='cat treats' />
                        <h4>Freez Dried Minnows</h4>
                        <p>Healthy ingredients with nothing to hide</p>
                    </div>
                </div>

            </div>
            <div className='treats-div-row2'>
                <div>
                    <img src={happyCat} alt='cat treats' />
                </div>
                <div className='row2-trial-info'>
                    <h4>PET-APPROVED</h4>
                    <p><b>It feels good to be a member.</b></p>
                    <p>After your free trial, bevome a fulltime member with benifits for $59 a year.</p>
                    <p><span>&#10003;</span>  Cancel anytime during your free trial.</p>
                    <p><span>&#10003;</span>  Free shipping on orders of $45.</p>
                    <p><span>&#10003;</span>  Direct-to-consumer prices on hundreds of premium products.</p>
                </div>
            </div>
        </div>
    )
}
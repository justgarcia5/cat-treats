import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

import catTreats from '../../images/cat_treats_fd_minnows_01 3.png';
import happyCat from '../../images/cat_image2_mobile.png';

export default function MobileOurTreat() {
    return(
        <div>
            <div className='ourtreats-div-row1'>
                <h3>OUR TREAT</h3>
                <div className='ourtreats-inner-div'>
                    <div>
                        <img src={catTreats} alt='cat treats' />
                        <h3>Freeze Dried Minnows</h3>
                        <p>Healthy ingredients with nothing to hide.</p>
                    </div>
                </div>

            </div>
            <div className='ourtreats-div-row2'>
                <div>
                    <img src={happyCat} alt='cat treats' />
                </div>
                <div className='row2-trial-info'>
                    <h3>PET-APPROVED</h3>
                    <p><b>It feels good to be a member.</b></p>
                    <p>After your free trial, become a fulltime member with benifits for $59 a year.</p>
                    <div>
                        <i><FontAwesomeIcon icon={faCheck}  /></i>
                        <p> Cancel anytime during your free trial.</p>
                    </div>
                    <div>
                        <i><FontAwesomeIcon icon={faCheck}  /></i>
                        <p> Free shipping on orders of $45.</p>
                    </div>
                    <div>
                        <i><FontAwesomeIcon icon={faCheck}  /></i>
                        <p> Direct-to-consumer prices on hundreds of premium products.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
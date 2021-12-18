import React from 'react';
import './OurTreat.css'
import OurTreatsMobile from './mobile/OurTreatsMobile';
import OurTreatsDesktop from './desktop/OurTreatsDesktop';

export default function OurTreat(props) {
    return(
        <>
            { props.isMobile && <OurTreatsMobile />}
            { !props.isMobile && <OurTreatsDesktop />}
        </>
    )
}
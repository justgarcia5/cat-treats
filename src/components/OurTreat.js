import React from 'react';
import './OurTreat.css'
import MobileOurTreat from './mobile/MobileOurTreat';
import DesktopOurTreat from './desktop/DesktopOurTreat';

export default function OurTreat(props) {
    return(
        <>
            { props.isMobile && <MobileOurTreat /> }
            { !props.isMobile && <DesktopOurTreat /> }
        </>
    )
}
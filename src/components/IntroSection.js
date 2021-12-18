import React from 'react';
import './IntroSection.css';
import MobileIntro from './mobile/MobileIntro';
import DesktopIntro from './desktop/DesktopIntro';

export default function IntroSection(props) {
  console.log(props.isMobile)
  return (
    <>
      { props.isMobile && <MobileIntro /> }
      { !props.isMobile && <DesktopIntro /> }
    </>
  )
}

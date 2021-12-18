import React from 'react';
import './IntroSection.css';
import MobileIntro from './mobile/MobileIntro';
import DesktopIntro from './desktop/DesktopIntro';

export default class IntroSection extends React.Component {
  state = {
    isMobile: false,
  }

  componentDidMount() {
    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
      this.setState({ isMobile: true })
    } else {
      this.setState({ isMobile: false })
    }
  }

  render() {
    console.log(this.state.isMobile)

    return (
      <>
        { this.state.isMobile && <MobileIntro /> }
        { !this.state.isMobile && <DesktopIntro /> }
      </>
    );
  }
}

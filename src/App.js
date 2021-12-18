import React, { useState, useEffect } from 'react';
import './App.css';
import ClaimButton from './components/ClaimButton';
import IntroSection from './components/IntroSection';
import OurTreat from './components/OurTreat';

function App() {
  const [isMobile, setIsMobile] = useState(false);
  // eslint-disable-next-line no-restricted-globals
  let width = screen.width;

  useEffect(() => {
    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && width <= 600){
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  },[isMobile, width])

  return (
    <React.Fragment>
      <IntroSection
        isMobile={isMobile}
      />
      <OurTreat
        isMobile={isMobile}
      />
      {isMobile &&
        <ClaimButton />
      }
    </React.Fragment>
  );
}

export default App;

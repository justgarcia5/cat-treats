import React, { useState, useEffect} from 'react';
import './App.css';
import ClaimButton from './components/ClaimButton';
import IntroSection from './components/IntroSection';
import OurTreat from './components/OurTreat';

function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  },[isMobile])

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

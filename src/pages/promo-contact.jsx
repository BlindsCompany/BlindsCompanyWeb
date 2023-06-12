import React, { Fragment } from 'react';
import PromoContactPage from '../components/Promo/PromoContactPage/PromoContactPage';
import PromoMobileContactPage from '../components/promoMobile/PromoMobileContactPage/PromoMobileContactPage';
import { useState, useEffect } from 'react';

const PromoMalla = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 868px)'); // Adjust the breakpoint as needed

    const handleResize = () => {
      setIsMobile(mediaQuery.matches);
    };

    handleResize(); // Set initial value

    mediaQuery.addEventListener('change', handleResize);
    return () => {
      mediaQuery.removeEventListener('change', handleResize);
    };
  }, []);


  return (
    <Fragment>
      {isMobile ? (
        <PromoMobileContactPage />
      ) : (
        <PromoContactPage />
      )}
    </Fragment>
  );
}

export default PromoMalla;
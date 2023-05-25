import React, { useEffect, useState } from 'react';
import PromoHeader from '../promoHeader/PromoHeader';
import { Fragment } from 'react';
import PromoHero from '../promoHero/PromoHero';
import PromoSteps from '../promoSteps/PromoSteps';
import PromoContent from '../PromoContent/PromoContent';
import PromoContact from '../PromoContact/PromoContact';
import PromoFooter from '../PromoFooter/PromoFooter';
import PromoCarousel from '../PromoCarousel/PromoCarousel';
import PromoMobilePage from '../../promoMobile/promoMobilePage/PromoMobilePage';

const PromoPage = ({ product }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < window.innerHeight);
    };

    handleResize(); // Set initial value

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Fragment>
      {isMobile ? (
        <PromoMobilePage product={product} />
      ) : (
        <Fragment>
          <PromoHeader />
          <PromoHero product={product} />
          <PromoSteps />
          <PromoContent product={product} />
          <PromoCarousel product={product} />
          <PromoContact product={product} />
          <PromoFooter />
        </Fragment>
      )}
    </Fragment>
  );
};

export default PromoPage;

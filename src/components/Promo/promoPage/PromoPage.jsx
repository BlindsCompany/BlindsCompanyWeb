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
import PromoWhatsappAction from '../PromoActionButtons/PromoWhatsappAction';
import PromoPhoneAction from '../PromoActionButtons/PromoPhoneAction';

const initialValue = window.matchMedia('(max-width: 995px)').matches;

const PromoPage = ({ product }) => {
  const [isMobile, setIsMobile] = useState(initialValue);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 995px)'); // Adjust the breakpoint as needed

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
        <Fragment>
          <PromoWhatsappAction/>
          <PromoPhoneAction/>
          <PromoMobilePage product={product} />
        </Fragment>
      ) : (
        <Fragment>
          <PromoWhatsappAction/>
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

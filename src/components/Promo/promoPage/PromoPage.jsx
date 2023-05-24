import React from "react";
import PromoHeader from "../promoHeader/PromoHeader";
import { Fragment } from "react";
import PromoHero from "../promoHero/PromoHero";
import PromoSteps from "../promoSteps/PromoSteps";
import PromoContent from "../PromoContent/PromoContent";
import PromoContact from "../PromoContact/PromoContact";
import PromoFooter from "../PromoFooter/PromoFooter";
import PromoCarousel from "../PromoCarousel/PromoCarousel";
import PromoMobilePage from "../../promoMobile/promoMobilePage/PromoMobilePage";

import { useEffect, useState } from 'react';

const PromoPage = ({ product }) => {
  const [isMobile, setIsMobile] = useState(false);


  useEffect(() => {
    const userAgent = window.navigator.userAgent;
    setIsMobile(/Mobi|Android/i.test(userAgent));
  }, []);

  return (

    <Fragment>

      {isMobile ? 
        <PromoMobilePage product={product} />
      : 
      <Fragment>
          <PromoHeader />
          <PromoHero product={product} />
          <PromoSteps />
          <PromoContent product={product} />
          <PromoCarousel product={product} />
          <PromoContact product={product} />
          <PromoFooter />
        </Fragment>
      }


    </Fragment>
  )

}

export default PromoPage;
import React from "react";
import PromoHeader from "../promoHeader/PromoHeader";
import { Fragment } from "react";
import PromoHero from "../promoHero/PromoHero";
import PromoSteps from "../promoSteps/PromoSteps";
import PromoContent from "../PromoContent/PromoContent";
import PromoContact from "../PromoContact/PromoContact";
import PromoFooter from "../PromoFooter/PromoFooter";
import PromoCarousel from "../PromoCarousel/PromoCarousel";
import { BrowserView, MobileView } from 'react-device-detect';
import PromoMobilePage from "../../promoMobile/promoMobilePage/PromoMobilePage";
const PromoPage = ({ product }) => {
  return (
    <Fragment>
      <BrowserView>
        <PromoHeader />
        <PromoHero product={product} />
        <PromoSteps />
        <PromoContent product={product}/>
        <PromoCarousel product={product}/>
        <PromoContact product={product}/>
        <PromoFooter/>
      </BrowserView>
      <MobileView>
        <PromoMobilePage product={product}/>
      </MobileView>
    </Fragment>
  )

}

export default PromoPage;
import React from "react";
import PromoHeader from "../promoHeader/PromoHeader";
import { Fragment } from "react";
import PromoHero from "../promoHero/PromoHero";
import PromoSteps from "../promoSteps/PromoSteps";
import PromoContent from "../PromoContent/PromoContent";
import PromoContact from "../PromoContact/PromoContact";
import PromoFooter from "../PromoFooter/PromoFooter";
import PromoCarousel from "../PromoCarousel/PromoCarousel";

const PromoPage = ({ product }) => {
  return (
    <Fragment>
      <PromoHeader />
      <PromoHero product={product} />
      <PromoSteps />
      <PromoContent product={product}/>
      <PromoCarousel product={product}/>
      <PromoContact product={product}/>
      <PromoFooter/>
    </Fragment>
  )

}

export default PromoPage;
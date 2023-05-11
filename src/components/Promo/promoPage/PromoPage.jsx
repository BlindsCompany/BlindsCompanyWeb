import React from "react";
import PromoHeader from "../promoHeader/PromoHeader";
import { Fragment } from "react";
import PromoHero from "../promoHero/PromoHero";
import PromoSteps from "../promoSteps/PromoSteps";
import PromoContent from "../PromoAbout/PromoContent";

const PromoPage = ({ product }) => {
  return (
    <Fragment>
      <PromoHeader />
      <PromoHero product={product} />
      <PromoSteps />
      <PromoContent product={product}/>
    </Fragment>
  )

}

export default PromoPage;
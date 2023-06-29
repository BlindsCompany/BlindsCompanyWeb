import React from 'react';
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
import MediaQuery from "react-responsive";

const PromoPage = ({ product }) => {

  return (
    <Fragment>
      <MediaQuery query="(max-width: 995px)">
        <Fragment>
          <PromoWhatsappAction />
          <PromoPhoneAction />
          <PromoMobilePage product={product} />
        </Fragment>
      </MediaQuery>

      <MediaQuery query="(min-width: 996px)">
        <Fragment>
          <PromoWhatsappAction />
          <PromoHeader />
          <PromoHero product={product} />
          <PromoSteps />
          <PromoContent product={product} />
          <PromoCarousel product={product} />
          <PromoContact product={product} />
          <PromoFooter />
        </Fragment>
      </MediaQuery>

    </Fragment >
  );
};

export default PromoPage;

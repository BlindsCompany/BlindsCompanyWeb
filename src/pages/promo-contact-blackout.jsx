import React, { Fragment } from 'react';
import PromoContactPage from '../components/Promo/PromoContactPage/PromoContactPage';
import PromoMobileContactPage from '../components/promoMobile/PromoMobileContactPage/PromoMobileContactPage';
import { useState, useEffect } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import MediaQuery from "react-responsive";

const PromoContactUsBlackout = () => {


  const data = useStaticQuery(graphql`
    query {
      promoJson {
        contactBlackoutBanner {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  `);



  return (
    <Fragment>

      <MediaQuery query="(max-width: 995px)">
        <PromoMobileContactPage bannerText={'CORTINAS ENROLLABLES BLACKOUT'} bannerGatsbyImageData={data.promoJson.contactBlackoutBanner.childImageSharp.gatsbyImageData} />
      </MediaQuery>

      <MediaQuery query="(min-width: 996px)">
      <PromoContactPage bannerText={'CORTINAS ENROLLABLES BLACKOUT'} bannerGatsbyImageData={data.promoJson.contactBlackoutBanner.childImageSharp.gatsbyImageData} />
      </MediaQuery>
    </Fragment>
  );
}

export default PromoContactUsBlackout;
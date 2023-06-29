import React, { Fragment } from 'react';
import PromoContactPage from '../components/Promo/PromoContactPage/PromoContactPage';
import PromoMobileContactPage from '../components/promoMobile/PromoMobileContactPage/PromoMobileContactPage';
import { useStaticQuery, graphql } from 'gatsby';
import MediaQuery from "react-responsive";

const PromoContactUs = () => {


  const data = useStaticQuery(graphql`
    query {
      promoJson {
        contactBanner {
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
        <PromoMobileContactPage bannerText={'CONTÁCTANOS'} bannerGatsbyImageData={data.promoJson.contactBanner.childImageSharp.gatsbyImageData} />
      </MediaQuery>

      <MediaQuery query="(min-width: 996px)">
        <PromoContactPage bannerText={'CONTÁCTANOS'} bannerGatsbyImageData={data.promoJson.contactBanner.childImageSharp.gatsbyImageData} />
      </MediaQuery>
      
    </Fragment>
  );
}

export default PromoContactUs;
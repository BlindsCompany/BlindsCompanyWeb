import React, { Fragment } from 'react';
import PromoContactPage from '../components/Promo/PromoContactPage/PromoContactPage';
import PromoMobileContactPage from '../components/promoMobile/PromoMobileContactPage/PromoMobileContactPage';
import { useState, useEffect } from 'react';
import { useStaticQuery, graphql } from 'gatsby';

const PromoContactUsBlackout = () => {
  const [isMobile, setIsMobile] = useState(true);

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
        <PromoMobileContactPage bannerText={'CORTINAS ENROLLABLES BLACKOUT'} bannerGatsbyImageData={data.promoJson.contactBlackoutBanner.childImageSharp.gatsbyImageData}/>
      ) : (
        <PromoContactPage bannerText={'CORTINAS ENROLLABLES BLACKOUT'} bannerGatsbyImageData={data.promoJson.contactBlackoutBanner.childImageSharp.gatsbyImageData}/>
      )}
    </Fragment>
  );
}

export default PromoContactUsBlackout;
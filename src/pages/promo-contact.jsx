import React, { Fragment } from 'react';
import PromoContactPage from '../components/Promo/PromoContactPage/PromoContactPage';
import PromoMobileContactPage from '../components/promoMobile/PromoMobileContactPage/PromoMobileContactPage';
import { useState, useEffect } from 'react';
import { useStaticQuery, graphql } from 'gatsby';

const PromoContactUs = () => {
  const [isMobile, setIsMobile] = useState(false);

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
        <PromoMobileContactPage bannerText={'CONTÁCTANOS'} bannerGatsbyImageData={data.promoJson.contactBanner.childImageSharp.gatsbyImageData}/>
      ) : (
        <PromoContactPage bannerText={'CONTÁCTANOS'} bannerGatsbyImageData={data.promoJson.contactBanner.childImageSharp.gatsbyImageData}/>
      )}
    </Fragment>
  );
}

export default PromoContactUs;
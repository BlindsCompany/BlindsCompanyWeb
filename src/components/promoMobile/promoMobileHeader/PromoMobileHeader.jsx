import React, { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faBars, faCheck, faLocationDot, faPhone, faXmark } from '@fortawesome/free-solid-svg-icons';
import { GatsbyImage } from 'gatsby-plugin-image';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';

import { HeaderItems, HeaderLogoItems, IconText, PhoneNumbersContainer } from './PromoMobileHeaderStyles';

import SmoothCollapse from 'react-smooth-collapse';

const PromoMobileHeader = () => {

  const [isExpanded, setIsExpanded] = useState(false);

  const data = useStaticQuery(graphql`
  query {
    promoJson {
      companyLocationLink
      whatsappLink
      officeNumber
      logo{
        childImageSharp {
          gatsbyImageData(width:200)
        }
      } 
      header {
        items
      }
    }
  }
  `);

  const items = data.promoJson.header.items;

  const splideOptions = {
    type: 'loop',
    drag: 'free',
    pagination: false,
    arrows: false,
    perPage: 1,
    autoScroll: {
      pauseOnHover: false,
      pauseOnFocus: false,
      rewind: false,
      speed: 1
    }
  };

  const whatsappLink = data.promoJson.whatsappLink;

  const phoneNumber = data.promoJson.officeNumber;

  const locationLink = data.promoJson.companyLocationLink;

  const handlePhoneClick = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const handleWhatsappClick = () => {
    window.open(whatsappLink, '_blank');
  };

  const handleLocationClick = () => {
    window.open(locationLink, '_blank');
  };

  const handleCollapse = () => {
    setIsExpanded(!isExpanded)
  }




  return (
    <Fragment>

      <div style={{ backgroundColor: '#d5cec7' }}>
        <Splide options={splideOptions} extensions={{ AutoScroll }}>
          {
            items.map(item => (
              <SplideSlide>
                <HeaderItems key={item} >
                  <FontAwesomeIcon icon={faCheck} style={{ marginRight: '6px' }} />
                  <div>{item}</div>
                </HeaderItems>
              </SplideSlide>
            ))
          }
        </Splide>
      </div>



      <HeaderLogoItems>

        {isExpanded ? <FontAwesomeIcon size='lg' icon={faXmark} onClick={handleCollapse} /> : <FontAwesomeIcon size='lg' icon={faBars} onClick={handleCollapse} />}
        
        <GatsbyImage image={data.promoJson.logo.childImageSharp.gatsbyImageData} alt={'logo'} />
        <FontAwesomeIcon size='lg' icon={faLocationDot} onClick={handleLocationClick} />
      </HeaderLogoItems>

      <SmoothCollapse expanded={isExpanded}>
        <PhoneNumbersContainer>
          <IconText>
            <FontAwesomeIcon size='lg' icon={faPhone} onClick={handlePhoneClick} />
            809-535-2954
          </IconText>
          <IconText>
            <FontAwesomeIcon size='lg' icon={faWhatsapp} onClick={handleWhatsappClick} />
            829-904-0007
          </IconText>
        </PhoneNumbersContainer>
      </SmoothCollapse>



    </Fragment>
  );
};

export default PromoMobileHeader;

import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faCheck, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { GatsbyImage } from 'gatsby-plugin-image';

import {
  HeaderItems,
  ItemsContainer,
  PhoneNumbersContainer,
  IconText,
  ContactText,
  ClickIcon
} from './PromoHeaderStyles';

import { Container } from '../SharedStyles';


const PromoHeader = () => {
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

  const items = data.promoJson.header.items;

  return (
    <Fragment>
      <ItemsContainer>
        <Container>
          <HeaderItems>
            {items.map(item => (
              <div key={item} className='flex items-center'>
                <FontAwesomeIcon icon={faCheck} style={{ marginRight: '6px' }} />
                <div>{item}</div>
              </div>
            ))}
          </HeaderItems>
        </Container>
      </ItemsContainer>

      <Container style={{ padding: '20px' }}>
        <HeaderItems>
          <IconText onClick={handleLocationClick}>
          <FontAwesomeIcon size='mds' icon={faLocationDot} />
            VISITE NUESTRA TIENDA
          </IconText>
          <GatsbyImage image={data.promoJson.logo.childImageSharp.gatsbyImageData} alt={'logo'} />
          <PhoneNumbersContainer>
            <ContactText>
              CONTÁCTANOS
              <ClickIcon>
                <FontAwesomeIcon onClick={handlePhoneClick} size='md' icon={faPhone} />
              </ClickIcon>
              <ClickIcon>
                <FontAwesomeIcon onClick={handleWhatsappClick} size='lg' icon={faWhatsapp} />
              </ClickIcon>
            </ContactText>
            
          </PhoneNumbersContainer>

        </HeaderItems>
      </Container>
    </Fragment>
  );
};

export default PromoHeader;

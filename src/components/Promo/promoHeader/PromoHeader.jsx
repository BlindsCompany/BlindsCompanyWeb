import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faPhone,faCheck, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { GatsbyImage } from 'gatsby-plugin-image';

import {
  HeaderItems,
  ItemsContainer,
  PhoneNumbersContainer,
  IconText
} from './PromoHeaderStyles';

import { Container } from '../SharedStyles';

import Title from '../../../images/promo/logo2.png';

const PromoHeader = () => {
  const data = useStaticQuery(graphql`
    query {
      promoJson {
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

  return (
    <Fragment>
      <ItemsContainer>
        <Container>
          <HeaderItems>
            {items.map(item => (
              <div key={item} className='flex items-center'>
                <FontAwesomeIcon icon={faCheck} style={{marginRight:'6px'}} />
                <div>{item}</div>
              </div>
            ))}
          </HeaderItems>
        </Container>
      </ItemsContainer>

      <Container style={{padding:'20px'}}>
        <HeaderItems>
          <PhoneNumbersContainer>
            <IconText>
              <FontAwesomeIcon size='lg' icon={faPhone} />
              809-535-2954
            </IconText>
            <IconText>
              <FontAwesomeIcon size='lg' icon={faWhatsapp} />
              809-535-2954
            </IconText>
          </PhoneNumbersContainer>
          <GatsbyImage image={data.promoJson.logo.childImageSharp.gatsbyImageData} alt={'logo'} />
          <IconText>
            VISITE NUESTRA TIENDA
            <FontAwesomeIcon size='lg' icon={faLocationDot} />
          </IconText>
        </HeaderItems>
      </Container>
    </Fragment>
  );
};

export default PromoHeader;

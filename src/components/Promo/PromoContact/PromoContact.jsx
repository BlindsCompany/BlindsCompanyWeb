import React from "react";
import { Container } from "../SharedStyles";
import { Card, CreamButton } from "./PromoContactStyles";
import { BlackButton } from "./PromoContactStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { useStaticQuery, graphql } from 'gatsby';

const PromoContact = ({ product }) => {
  const data = useStaticQuery(graphql`
  query {
    promoJson {
      companyLocationLink
      whatsappLink
      officeNumber
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

  return (
    <Container style={{ marginTop: '60px', marginBottom: '80px' }}>
      <div style={{ textAlign: 'center', fontSize: '32px', marginTop: '70px', color: '#292b2c' }}>
      CONTÁCTANOS
      </div>

      <div style={{ display: 'flex', flexDirection: 'row', gap: '50px', marginTop: '30px' }}>
        <Card style={{ width: '50%' }}>
          <h3 style={{ fontSize: '28px', marginBottom: '40px', color: '#292b2c' }}>{product.contactPrompt}</h3>
          <BlackButton style={{ marginBottom: '30px', marginRight: '24px' }} onClick={handlePhoneClick}>
            <FontAwesomeIcon icon={faPhone} style={{ marginRight: '10px' }} /> 809-535-2954
          </BlackButton>
          <CreamButton style={{ marginBottom: '30px' }} onClick={handleWhatsappClick}>
            <FontAwesomeIcon icon={faWhatsapp} style={{ marginRight: '10px', fontSize:'20px' }} /> 829-904-0007
          </CreamButton>
        </Card>

        <Card style={{ width: '50%' }}>
          <h3 style={{ fontSize: '28px', marginBottom: '40px', color: '#292b2c' }}>QUIERES VER NUESTROS PRODUCTOS?</h3>
          <p>
            Visitanos para ver telas, mecanismos y productos terminados.
          </p>
          <div
            onClick={handleLocationClick}
            style={{
              display: 'flex',
              flexDirection: 'row',
              gap: '5px',
              alignItems: 'center',
              marginTop: '20px',
              cursor: 'pointer',
              fontWeight: 'bold'
            }}
            
            css={{
              '&:hover': {
                color: 'black'
              }
            }}
          >
            <div>Google Maps</div>
            <FontAwesomeIcon icon={faChevronRight} style={{fontSize:'smaller'}} />
          </div>

        </Card>
      </div>
    </Container>
  )

}

export default PromoContact
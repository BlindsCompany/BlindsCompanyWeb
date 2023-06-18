import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { useStaticQuery, graphql } from 'gatsby';

const PromoWhatsappAction = () => {
  const data = useStaticQuery(graphql`
        query {
          promoJson {
            companyLocationLink
            whatsappLink
            officeNumber
          }
        }
    `);

  const whatsappStyle = {
    position: 'fixed',
    height: '70px',
    width: '70px',
    borderColor: '#5a5652',
    backgroundColor: '#d5cec7',
    borderWidth: '10px',
    left: '1rem',
    bottom: '3rem',
    zIndex: '50',
    borderRadius: '9999px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'

  };



  return (
    <a
      href={data.promoJson.whatsappLink}
      style={whatsappStyle}
      aria-label="Contáctanos en Whatsapp"
    >
      <FontAwesomeIcon style={{ color: 'black' }} size='2x' icon={faWhatsapp} />
    </a>

  );
};

export default PromoWhatsappAction;

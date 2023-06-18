import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { useStaticQuery, graphql } from 'gatsby';

const PromoPhoneAction = () => {
    const data = useStaticQuery(graphql`
        query {
          promoJson {
            companyLocationLink
            whatsappLink
            officeNumber
          }
        }
    `);

    const phoneStyle={
      position:'fixed',
      height:'70px',
      width:'70px',
      borderColor:'#5a5652',
      backgroundColor:'#d5cec7',
      borderWidth:'10px',
      right:'1rem',
      bottom:'3rem',
      zIndex:'50',
      borderRadius:'9999px',
      display:'flex',
      alignItems:'center',
      justifyContent:'center'

    }

    return (


          <a
              href={`tel:${data.promoJson.officeNumber}`}
              style={phoneStyle}
              aria-label="Contáctanos por Teléfono"
          >
              <FontAwesomeIcon style={{color:'black'}} size='lg' icon={faPhone}/>
          </a>

        
    );
};

export default PromoPhoneAction;

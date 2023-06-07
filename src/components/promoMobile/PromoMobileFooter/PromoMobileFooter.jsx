
import React from "react";
import { useState } from "react";
import { BlackButton } from "./PromoMobileFooterStyles";
import { faWhatsapp, faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import SmoothCollapse from 'react-smooth-collapse';
import { navigate } from "gatsby";

const PromoMobileFooter = () => {
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);
  const [isProductsExpanded, setIsProductsExpanded] = useState(false);

  const data = useStaticQuery(graphql`
    query {
      promoJson {
        whatsappLink
        facebookLink
        instagramLink
        logo{
          childImageSharp {
            gatsbyImageData(width:200)
          }
        } 
      }
    }
  `);

  const handleDescriptionCollapse = () => {
    setIsDescriptionExpanded(!isDescriptionExpanded)
  }

  const handleProductsCollapse = () => {
    setIsProductsExpanded(!isProductsExpanded)
  }

  const whatsappLink = data.promoJson.whatsappLink;

  const instagramLink = data.promoJson.instagramLink;

  const facebookLink = data.promoJson.facebookLink;


  const handleWhatsappClick = () => {
    window.open(whatsappLink, '_blank');
  };

  const handleInstagramClick = () => {
    window.open(instagramLink, '_blank');
  };

  const handleFacebookClick = () => {
    window.open(facebookLink, '_blank');
  };


  return (
    <div style={{ backgroundColor: '#d5cec7', color: '#292b2c', paddingTop: '48px', paddingBottom: '24px', paddingLeft: '20px', paddingRight: '20px', marginTop: '40px' }}>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>

        <div style={{ display: 'flex', flexDirection: 'column' }}>

          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '10px', cursor: 'pointer' }} onClick={handleDescriptionCollapse}>
            
            <h4 style={{ fontSize: '21px', marginBottom: '0px' }}>
              MEJOR FABRICA, MEJORES PRECIOS
            </h4>
            {
              isDescriptionExpanded ? <FontAwesomeIcon size='lg' icon={faChevronUp} /> :
                <FontAwesomeIcon size='lg' icon={faChevronDown} />
            }

          </div>
          <SmoothCollapse expanded={isDescriptionExpanded}>
            <div style={{ fontSize: '18px' }}>
              En nuestra empresa entendemos la importancia de tener una fabricación de calidad.
              Estamos aquí para proporcionarle eso. Nuestro exclusivo proceso de fabricación incluye una
              máquina cortadora ultrasónica, bridas termosoldadas y una máquina de control de
              calidad para garantizar que su producto sea superior desde todos los ángulos.
            </div>
          </SmoothCollapse>
        </div>

        <hr style={{ borderColor: 'black' }} />


        <div style={{ display: 'flex', flexDirection: 'column', fontSize: '18px' }}>

          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '10px', cursor: 'pointer' }} onClick={handleProductsCollapse}>
            <h4 style={{ fontSize: '21px', marginBottom: '0px' }}>
              PRODUCTOS
            </h4>
            {
              isProductsExpanded ? <FontAwesomeIcon size='lg' icon={faChevronUp} /> :
                <FontAwesomeIcon size='lg' icon={faChevronDown} />
            }

          </div>

          <SmoothCollapse expanded={isProductsExpanded}>
            <div>
              Cortinas
            </div>
            <div>
              Permas
            </div>
            <div>
              Toldos
            </div>
            <div>
              Palilleria
            </div>
            <div>
              Shutters
            </div>
            <div>
              Mallas de Seguridad
            </div>
          </SmoothCollapse>
        </div>


        <hr style={{ borderColor: 'black' }} />

        <div style={{ display: 'flex', flexDirection: 'column' }}>

          <h4 style={{ fontSize: '21px', marginBottom: '10px' }}>
            NEWSLETTER
          </h4>

          <div>
            Suscríbete si quieres mantenerte informado de novedades.
          </div>
          <div>
            <input class="appearance-none border rounded px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" style={{ width: '50%', padding: '2px', marginTop: '15px' }} />
          </div>
          <div>
            <BlackButton style={{ fontSize: '14', marginTop: '10px', marginBottom: '20px' }}>
              ENVIAR
            </BlackButton>
          </div>

          <hr style={{ borderColor: 'black' }} />

          <h4 style={{ fontSize: '21px', marginBottom: '10px', marginTop: '15px' }}>
            SIGUENOS EN LAS REDES
          </h4>
          <div style={{ display: 'flex', flexDirection: 'row', gap: '10px' }}>
            <FontAwesomeIcon size='lg' icon={faWhatsapp} onClick={handleWhatsappClick} />
            <FontAwesomeIcon size='lg' icon={faInstagram} onClick={handleInstagramClick}/>
            <FontAwesomeIcon size='lg' icon={faFacebook} onClick={handleFacebookClick}/>
          </div>
        </div>

        <hr style={{ borderColor: 'black' }} />

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <h4 style={{ fontSize: '24px', marginBottom: '10px' }}>
            CONTACTANOS
          </h4>
          <div>
            Quieres cotizar, saber más o tienes alguna pregunta?
          </div>
          <div>
            <BlackButton onClick={() => navigate("/promo-contact")} style={{ fontSize: '14px', marginTop: '15px' }}>
              CONTACTANOS
            </BlackButton>
          </div>
        </div>

      </div>


      <hr style={{ borderColor: 'black', marginTop: '30px', marginBottom: '26px' }} />
      <div style={{textAlign:'center'}}>
        <GatsbyImage image={data.promoJson.logo.childImageSharp.gatsbyImageData} alt={'logo'} />
      </div>
    </div>
  )


}

export default PromoMobileFooter;
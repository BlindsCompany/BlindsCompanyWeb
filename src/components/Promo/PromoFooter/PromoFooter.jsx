
import React from "react";
import { Container } from "../SharedStyles";
import { BlackButton } from "./PromoFooterStyles";
import { faWhatsapp, faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage } from "gatsby-plugin-image";
import { navigate } from "gatsby";
import { FooterLink } from "./PromoFooterStyles";

const PromoFooter = () => {

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
    <div style={{ backgroundColor: '#d5cec7', color: '#292b2c', paddingTop: '48px', paddingBottom: '24px' }}>
      <Container>
        <div style={{ display: 'flex', flexDirection: 'row', gap: '24px' }}>

          <div style={{ display: 'flex', flexDirection: 'column', width: '33%' }}>
            <h4 style={{ fontSize: '24px', marginBottom: '10px' }}>
              MEJOR FABRICA, MEJORES PRECIOS
            </h4>
            <div style={{ fontSize: '18px' }}>
              En nuestra empresa entendemos la importancia de tener una fabricación de calidad.
              Estamos aquí para proporcionarle eso. Nuestro exclusivo proceso de fabricación incluye una
              máquina cortadora ultrasónica, bridas termosoldadas y una máquina de control de
              calidad para garantizar que su producto sea superior desde todos los ángulos.
            </div>

          </div>

          <div style={{ display: 'flex', flexDirection: 'column', width: '12%', fontSize: '17px' }}>
            <h4 style={{ fontSize: '24px', marginBottom: '10px' }}>
              PRODUCTOS
            </h4>
            <div>
              <FooterLink to="/productos">Cortinas</FooterLink>
            </div>
            <div>
              <FooterLink to="/productos/perma">Permas</FooterLink>
            </div>
            <div>
              <FooterLink to="/productos">Toldos</FooterLink>
            </div>
            <div>
              <FooterLink to="/productos/palilleria">Palilleria</FooterLink>
            </div>
            <div>
              <FooterLink to="/productos/shutters">Shutters</FooterLink>
            </div>
            <div>
              <FooterLink to="/productos/mallas-de-seguridad">Mallas de Seguridad</FooterLink>
            </div>

          </div>

          <div style={{ display: 'flex', flexDirection: 'column', width: '25%' }}>
            <h4 style={{ fontSize: '24px', marginBottom: '10px' }}>
              NEWSLETTER
            </h4>

            <div>
              Suscríbete si quieres mantenerte informado de novedades.
            </div>
            <div>
              <input class="appearance-none border rounded px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" style={{ padding: '2px', marginTop: '15px', width: '75%' }} />
            </div>
            <div>
              <BlackButton style={{ fontSize: '14', marginTop: '10px', marginBottom: '20px' }}>
                ENVIAR
              </BlackButton>
            </div>

            <h4 style={{ fontSize: '24px', marginBottom: '10px' }}>
              SIGUENOS EN LAS REDES
            </h4>
            <div style={{ display: 'flex', flexDirection: 'row', gap: '10px' }}>
              <FontAwesomeIcon size='lg' icon={faWhatsapp} onClick={handleWhatsappClick} style={{cursor:'pointer'}} />
              <FontAwesomeIcon size='lg' icon={faInstagram} onClick={handleInstagramClick} style={{cursor:'pointer'}}/>
              <FontAwesomeIcon size='lg' icon={faFacebook} onClick={handleFacebookClick} style={{cursor:'pointer'}}/>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', width: '25%' }}>
            <h4 style={{ fontSize: '24px', marginBottom: '10px' }}>
              CONTACTANOS
            </h4>
            <div>
              Quieres cotizar, saber más o tienes alguna pregunta?
            </div>
            <div>
              <BlackButton onClick={() => navigate("/promo-contact")} style={{ fontSize: '14', marginTop: '15px' }}>
                CONTACTANOS
              </BlackButton>
            </div>
          </div>

        </div>


      </Container>

      <hr style={{ borderColor: 'black', margin: '16px' }} />
      <div style={{ textAlign: 'center' }}>
        <GatsbyImage image={data.promoJson.logo.childImageSharp.gatsbyImageData} alt={'logo'} />
      </div>
    </div>
  )


}

export default PromoFooter;

import React from "react";
import { Container } from "../SharedStyles";
import { BlackButton } from "./PromoFooterStyles";
import { faWhatsapp, faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage } from "gatsby-plugin-image";
import { navigate } from "gatsby";
import { FooterLink, FooterItem } from "./PromoFooterStyles";

const PromoFooter = () => {

  const data = useStaticQuery(graphql`
    query {
      promoJson {
        whatsappDisplayNumber
        instagramHandle
        facebookHandle
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

          <div style={{ display: 'flex', flexDirection: 'column', width: '15%' }}>

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

          <div style={{ display: 'flex', flexDirection: 'column', width: '28%', fontSize: '17px' }}>
            <h4 style={{ fontSize: '24px', marginBottom: '10px' }}>
              SIGUENOS EN LAS REDES
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>

              <FooterItem onClick={handleWhatsappClick}>
                <FontAwesomeIcon size='lg' icon={faWhatsapp} style={{ marginRight:"10px" }} />
                {data.promoJson.whatsappDisplayNumber}
              </FooterItem>
              
              <FooterItem onClick={handleInstagramClick}>
                <FontAwesomeIcon size='lg' icon={faInstagram} style={{ marginRight:"10px" }}/>
                {data.promoJson.instagramHandle}
              </FooterItem>

              <FooterItem onClick={handleFacebookClick}>
                <FontAwesomeIcon size='lg' icon={faFacebook} style={{ marginRight:"10px" }}/>
                {data.promoJson.facebookHandle}
              </FooterItem>
            </div>

          </div>

          <div style={{ display: 'flex', flexDirection: 'column', width: '28%' }}>
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


          </div>

          <div style={{ display: 'flex', flexDirection: 'column', width: '28%' }}>
            <h4 style={{ fontSize: '24px', marginBottom: '10px' }}>
            CONTÁCTANOS
            </h4>
            <div>
              Quieres cotizar, saber más o tienes alguna pregunta?
            </div>
            <div>
              <BlackButton onClick={() => navigate("/promo-contact")} style={{ fontSize: '14', marginTop: '15px' }}>
              CONTÁCTANOS
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

import React from "react";
import { Container } from "../SharedStyles";
import { BlackButton } from "./PromoFooterStyles";
import { faWhatsapp, faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage } from "gatsby-plugin-image";

const PromoFooter = () => {

  const data = useStaticQuery(graphql`
    query {
      promoJson {
        logo{
          childImageSharp {
            gatsbyImageData(width:200)
          }
        } 
      }
    }
  `);



  return (
    <div style={{ backgroundColor: '#d5cec7', color: '#292b2c', paddingTop: '48px', paddingBottom:'24px'}}>
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

          <div style={{ display: 'flex', flexDirection: 'column', width: '12%', fontSize: '18px' }}>
            <h4 style={{ fontSize: '24px', marginBottom: '10px' }}>
              PRODUCTOS
            </h4>
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

          </div>

          <div style={{ display: 'flex', flexDirection: 'column', width: '25%' }}>
            <h4 style={{ fontSize: '24px', marginBottom: '10px' }}>
              NEWSLETTER
            </h4>

            <div>
              Suscríbete si quieres mantenerte informado de novedades.
            </div>
            <div>
              <input class="appearance-none border rounded px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" style={{ padding: '2px', marginTop: '15px', width:'75%' }} />
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
              <FontAwesomeIcon size='lg' icon={faWhatsapp} />
              <FontAwesomeIcon size='lg' icon={faInstagram} />
              <FontAwesomeIcon size='lg' icon={faFacebook} />
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
              <BlackButton style={{ fontSize: '14', marginTop: '15px' }}>
                CONTACTANOS
              </BlackButton>
            </div>
          </div>

        </div>


      </Container>

      <hr style={{ borderColor: 'black', margin: '16px' }} />
      <div style={{textAlign:'center'}}>
        <GatsbyImage image={data.promoJson.logo.childImageSharp.gatsbyImageData} alt={'logo'} />
      </div>
    </div>
  )


}

export default PromoFooter;
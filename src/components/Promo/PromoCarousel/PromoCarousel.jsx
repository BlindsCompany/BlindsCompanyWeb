import React from "react";
import { Container } from "../SharedStyles";
import '@splidejs/react-splide/css';
import { GatsbyImage } from "gatsby-plugin-image";

const PromoCarousel = ({ product }) => {

  const gallery = product.gallery;


  return (
    <Container>
      <div style={{ textAlign: 'center', fontSize: '32px', color: '#292b2c', marginBottom: '30px' }}>
        ALGUNOS DE NUESTROS TRABAJOS
      </div>


      <div style={{ display: 'flex', flexDirection: 'row', gap: '10px', justifyContent:'center' }}>
        {
          gallery.map((img, index) => (
            <div style={{width:'33%'}}>
              <GatsbyImage image={img.path.childImageSharp.gatsbyImageData} alt={`image ${index}`} style={{width:'100%', height:'300px', objectFit:'cover'}} />

            </div>
          ))
        }
        
      </div>
    </Container>
  )
}

export default PromoCarousel;

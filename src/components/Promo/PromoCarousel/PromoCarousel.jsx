import React from "react";
import { Container } from "../SharedStyles";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage } from "gatsby-plugin-image";

const PromoCarousel = () => {

  const data = useStaticQuery(graphql`
    query {
      promoJson {
        gallery{
          path{
            childImageSharp {
              gatsbyImageData(height:280)
            }
          } 
        }  
      }
    }
  `);
  
  const gallery = data.promoJson.gallery;

  // Add Splide options
  const splideOptions = {
    type: 'slide',
    perPage: 3,
    pagination: false,
  };

  return (
    <Container>
      <div style={{ textAlign: 'center', fontSize: '32px', color: '#292b2c', marginBottom:'30px'}}>
        ALGUNOS DE NUESTROS TRABAJOS
      </div>

      <Splide options={splideOptions} aria-label="My Favorite Images">
        {
         gallery.map((img, index) => (
            <SplideSlide>
              <GatsbyImage image={img.path.childImageSharp.gatsbyImageData} alt={`image \${index}`} />

            </SplideSlide>
          ))
        }
        
      </Splide>
    </Container>
  )
}

export default PromoCarousel;

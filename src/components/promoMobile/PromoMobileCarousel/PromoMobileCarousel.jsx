import React from "react";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { GatsbyImage } from "gatsby-plugin-image";
import { Fragment } from "react";
const PromoMobileCarousel = ({ product }) => {

  const gallery = product.gallery;

  // Add Splide options
  const splideOptions = {
    type: 'slide',
    perPage: 1,
    pagination: false,
  };

  return (
    <Fragment>
      <div style={{padding:'12px'}}>
        <div style={{ textAlign: 'center', fontSize: '25px', color: '#292b2c', marginBottom: '30px' }}>
          ALGUNOS DE NUESTROS TRABAJOS
        </div>

        <Splide options={splideOptions} aria-label="My Favorite Images">
          {
            gallery.map((img, index) => (
              <SplideSlide>
                <GatsbyImage image={img.path.childImageSharp.gatsbyImageData} alt={`image \${index}`} style={{width:'100%', height:'300px', objectFit:'cover'}} />

              </SplideSlide>
            ))
          }

        </Splide>
      </div>

    </Fragment>
  )
}

export default PromoMobileCarousel;

import React from "react";
import { Container } from "../SharedStyles";
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage } from "gatsby-plugin-image";

const PromoContent = ({ product }) => {
  console.log(product.content);
  return (
    <Container>
      {
        product.content.map((cont, index) => {
          return ( index % 2 === 0  ? (
            
            <div style={{ display: 'flex', flexDirection: 'row', marginBottom:'100px' }}>

              <div style={{ width: '50%', display: 'flex', flexDirection: 'column', paddingRight:'50px' }}>
                <h2 style={{ fontSize: '32px' }}>
                  {cont.title}
                </h2>
                <div style={{ fontSize: '18px' }}>
                  {cont.description}
                </div>
              </div>

              <div>
                <GatsbyImage image={cont.image.childImageSharp.gatsbyImageData}  />
              </div>

            </div>
          ) :(
            
            <div style={{ display: 'flex', flexDirection: 'row', marginBottom:'100px' }}>

              <div>
                <GatsbyImage image={cont.image.childImageSharp.gatsbyImageData}  />
              </div>

              <div style={{ width: '50%', display: 'flex', flexDirection: 'column', paddingLeft:'50px' }}>
                <h2 style={{ fontSize: '32px' }}>
                  {cont.title}
                </h2>
                <div style={{ fontSize: '18px' }}>
                  {cont.description}
                </div>
              </div>
            </div>

          ))

        })
      }

    </Container>
  )
}

export default PromoContent
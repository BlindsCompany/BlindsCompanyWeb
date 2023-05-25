import React from "react";
import { Container } from "../SharedStyles";
import { GatsbyImage } from "gatsby-plugin-image";

const PromoContent = ({ product }) => {
  return (
    <Container>
      {
        product.content.map((cont, index) => {
          return ( index % 2 === 0  ? (
            
            <div style={{ display: 'flex', flexDirection: 'row', marginBottom:'100px' }}>

              <div style={{ width: '50%', display: 'flex', flexDirection: 'column', paddingRight:'50px' }}>
                <h2 style={{ fontSize: '32px', color:'#292b2c' }}>
                  {cont.title}
                </h2>
                <div style={{ fontSize: '18px' }}>
                  <div dangerouslySetInnerHTML={{ __html: cont.description }} />
                </div>
              </div>

              <div style={{width:'50%'}}>
                <GatsbyImage image={cont.image.childImageSharp.gatsbyImageData} alt={cont.title} style={{width:'100%', height:'360px', objectFit:'cover' }} />
              </div>

            </div>
          ) :(
            
            <div style={{ display: 'flex', flexDirection: 'row', marginBottom:'100px' }}>

              <div style={{width:'50%'}}>
                <GatsbyImage image={cont.image.childImageSharp.gatsbyImageData} alt={cont.title} style={{width:'100%', height:'360px', objectFit:'cover' }} />
              </div>

              <div style={{ width: '50%', display: 'flex', flexDirection: 'column', paddingLeft:'50px' }}>
                <h2 style={{ fontSize: '32px' }}>
                  {cont.title}
                </h2>
                <div style={{ fontSize: '18px' }}>
                  <div dangerouslySetInnerHTML={{ __html: cont.description }} />
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
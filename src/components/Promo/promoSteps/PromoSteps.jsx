import React from "react";
import { Container } from "../SharedStyles";
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage } from "gatsby-plugin-image";

const PromoSteps = () => {
  const data = useStaticQuery(graphql`
    query {
      promoJson {
        steps {
          title
          description
          image {
            childImageSharp {
              gatsbyImageData(height: 80)
            }
          }
        }
      }
    }
  `);

  const steps = data.promoJson.steps;

  return (
    <>
      <Container>
        <div style={{textAlign:'center', fontSize:'32px', marginTop:'70px'}}>
          TUS PRODUCTOS FÁCIL Y RAPIDO
        </div>

        <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between', marginTop:'40px', marginBottom:'40px'}}>
          {steps.map(step =>(
            <div key={step.title} style={{display:'flex', flexDirection:'column', padding:'30px', gap:'5px'}}>
              <div style={{textAlign:'center', marginBottom:'20px'}}>
                <GatsbyImage image={step.image.childImageSharp.gatsbyImageData} alt={step.title} />
              </div>
              
              <div style={{fontWeight:'bold', fontSize:'20px', textAlign:'center'}}>
                {step.title}
              </div>
              
              <div style={{textAlign:'center', fontSize:'18px'}}>
                {step.description}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </>
  );
}

export default PromoSteps;

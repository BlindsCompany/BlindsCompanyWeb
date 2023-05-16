import React from "react";
import { Container } from "../SharedStyles";
import { ImgWrapper, ContentWrapper, Title, BlackButton, CreamButton } from "./PromoHeroStyles";
import { GatsbyImage } from "gatsby-plugin-image";


const PromoHero = ({ product }) => {
  
  return (
    <Container>
      <ImgWrapper style={{height:'auto'}}>
        
        <GatsbyImage image={product.heroBanner.childImageSharp.gatsbyImageData} alt={product.heroTitle} style={{filter:'brightness(80%)', width:'100%', height:'725px', objectFit:'cover'}}/>
        <ContentWrapper>
          <div>
            <Title>{product.heroTitle}</Title>
            <div style={{display:'flex', flexDirection:'row', gap:'20px', justifyContent:'center'}}>
              <BlackButton>
                <p>Llamanos <br/> 809-535-2954</p>
              </BlackButton>
              <CreamButton>
              <p>Escríbenos <br/>  829-904-0007</p>
              </CreamButton>
            </div>
          </div>
        </ContentWrapper>
      </ImgWrapper>
    </Container>
  );
}

export default PromoHero;

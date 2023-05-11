import React from "react";
import { Container } from "../SharedStyles";
import { ImgWrapper, Img, ContentWrapper, Title, BlackButton, CreamButton } from "./PromoHeroStyles";
import { GatsbyImage } from "gatsby-plugin-image";

import data from '../../../data/promo/promo.json'

const PromoHero = ({ product }) => {

  console.log(product);
  return (
    <Container>
      <ImgWrapper>
        
        <GatsbyImage image={product.heroBanner.childImageSharp.gatsbyImageData} alt={product.heroTitle} style={{filter:'brightness(80%)'}}/>
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

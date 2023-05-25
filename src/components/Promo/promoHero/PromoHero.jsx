import React from "react";
import { Container } from "../SharedStyles";
import { ImgWrapper, ContentWrapper, Title, BlackButton, CreamButton } from "./PromoHeroStyles";
import { GatsbyImage } from "gatsby-plugin-image";
import { useStaticQuery, graphql } from 'gatsby';

const PromoHero = ({ product }) => {

  const data = useStaticQuery(graphql`
    query {
      promoJson {
        whatsappLink
        officeNumber
      }
    }
  `);

  const whatsappLink = data.promoJson.whatsappLink;

  const phoneNumber = data.promoJson.officeNumber;


  const handlePhoneClick = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const handleWhatsappClick = () => {
    window.open(whatsappLink, '_blank');
  };

  
  return (
    <Container>
      <ImgWrapper style={{height:'auto'}}>
        
        <GatsbyImage image={product.heroBanner.childImageSharp.gatsbyImageData} alt={product.heroTitle} style={{filter:'brightness(80%)', width:'100%', height:'725px', objectFit:'cover'}}/>
        <ContentWrapper>
          <div>
            <Title>{product.heroTitle}</Title>
            <div style={{display:'flex', flexDirection:'row', gap:'20px', justifyContent:'center'}}>
              <BlackButton onClick={handlePhoneClick}>
                <p>Llamanos <br/> 809-535-2954</p>
              </BlackButton>
              <CreamButton onClick={handleWhatsappClick}>
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

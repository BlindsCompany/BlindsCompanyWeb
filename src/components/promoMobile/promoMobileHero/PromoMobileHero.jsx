import React from "react";
import { ImgWrapper, ContentWrapper, Title, BlackButton, CreamButton } from "./PromoMobileHeroStyles";
import { GatsbyImage } from "gatsby-plugin-image";
import { useStaticQuery, graphql } from 'gatsby';

const PromoMobileHero = ({ product }) => {

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
    <ImgWrapper style={{ height: 'auto' }}>

      <GatsbyImage image={product.heroBanner.childImageSharp.gatsbyImageData} alt={product.heroTitle}
        style={{
          filter: 'brightness(80%)',
          width: '100%',
          height: '550px',
          objectFit: 'cover'
        }} />

      <ContentWrapper>
        <Title>{product.heroTitle}</Title>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', justifyContent: 'center', alignItems: 'center' }}>
          <BlackButton onClick={handlePhoneClick}>
            <p>Llamanos - 809-535-2954</p>
          </BlackButton>
          <CreamButton onClick={handleWhatsappClick}>
            <p>Escríbenos - 829-904-0007</p>
          </CreamButton>
        </div>
      </ContentWrapper>
    </ImgWrapper>
  );
}

export default PromoMobileHero;

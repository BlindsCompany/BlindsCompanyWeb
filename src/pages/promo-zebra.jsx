import React from 'react';
import PromoHeader from '../components/Promo/promoHeader/PromoHeader';
import PromoPage from '../components/Promo/promoPage/PromoPage';
import { useStaticQuery, graphql } from 'gatsby';
const PromoZebra = () =>{

  const data = useStaticQuery(graphql`
  query {
    promoJson {
      products {
        zebra {
          heroTitle
          heroBanner{
            childImageSharp {
              gatsbyImageData
            }
          }
          content {
            image{
              childImageSharp {
                gatsbyImageData(height:360)
              }
            }
            title
            description
          }
        }
      }
    }
  }
`);



  return (
    <PromoPage product={data.promoJson.products.zebra}/>
);
}

export default PromoZebra;
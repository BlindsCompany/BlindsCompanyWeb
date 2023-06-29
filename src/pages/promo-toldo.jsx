import React from 'react';
import PromoPage from '../components/Promo/promoPage/PromoPage';
import { useStaticQuery, graphql } from 'gatsby';
const PromoToldo = () =>{

  const data = useStaticQuery(graphql`
  query {
    promoJson {
      products {
        toldo {
          heroTitle
          heroBanner{
            childImageSharp {
              gatsbyImageData
            }
          }
          contactPrompt
          content {
            image{
              childImageSharp {
                gatsbyImageData
              }
            }
            title
            callToAction
            description
          }
          gallery{
            path{
              childImageSharp {
                gatsbyImageData
              }
            } 
          }
        }
      }
    }
  }
`);



  return (
    <PromoPage product={data.promoJson.products.toldo}/>
);
}

export default PromoToldo;
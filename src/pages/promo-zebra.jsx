import React from 'react';
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
    <PromoPage product={data.promoJson.products.zebra}/>
);
}

export default PromoZebra;
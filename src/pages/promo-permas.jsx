import React from 'react';
import PromoPage from '../components/Promo/promoPage/PromoPage';
import { useStaticQuery, graphql } from 'gatsby';
const PromoPermas = () =>{

  const data = useStaticQuery(graphql`
  query {
    promoJson {
      products {
        permas {
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

console.log(data.promoJson.products.permas);


  return (
    <PromoPage product={data.promoJson.products.permas}/>
);
}

export default PromoPermas;
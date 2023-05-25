import React from 'react';
import PromoPage from '../components/Promo/promoPage/PromoPage';
import { useStaticQuery, graphql } from 'gatsby';
const PromoPalilleria = () =>{

  const data = useStaticQuery(graphql`
  query {
    promoJson {
      products {
        palilleria {
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
    <PromoPage product={data.promoJson.products.palilleria}/>
);
}

export default PromoPalilleria;
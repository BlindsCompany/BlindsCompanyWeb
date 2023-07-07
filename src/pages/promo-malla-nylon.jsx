import React from 'react';
import PromoPage from '../components/Promo/promoPage/PromoPage';
import { useStaticQuery, graphql } from 'gatsby';

const PromoMalla = () =>{

  const data = useStaticQuery(graphql`
  query {
    promoJson {
      products {
        mallaNylon {
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
    <PromoPage product={data.promoJson.products.mallaNylon}/>
);
}

export default PromoMalla;
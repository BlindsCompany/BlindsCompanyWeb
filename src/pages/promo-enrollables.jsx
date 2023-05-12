import React from 'react';
import PromoPage from '../components/Promo/promoPage/PromoPage';
import { useStaticQuery, graphql } from 'gatsby';

const PromoEnrollables = () =>{

  const data = useStaticQuery(graphql`
  query {
    promoJson {
      products {
        enrollables {
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
    <PromoPage product={data.promoJson.products.enrollables}/>
);
}

export default PromoEnrollables;
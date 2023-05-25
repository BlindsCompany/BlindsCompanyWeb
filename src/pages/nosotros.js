import React from 'react';
import Hero from '../components/hero/Hero';
import HistorySection from '../components/historySection/HistorySection';
import { graphql } from 'gatsby';
import Seo from '../components/Seo';
import Layout from '../templates/Layout';

const AboutPage = ({ data }) => {
    return (
        <Layout>
            <Seo title="Sobre Nosotros" />
            <Hero media={data.aboutJson.hero.image} />
            <HistorySection />
        </Layout>
    );
};

export const query = graphql`
    query {
        aboutJson {
            hero {
                image {
                    src {
                        childImageSharp {
                            gatsbyImageData(width: 1440)
                        }
                    }
                }
            }
        }
    }
`;

export default AboutPage;

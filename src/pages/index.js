import React from 'react';
import Hero from '../components/hero/Hero';
import CategoriesSection from '../components/categoriesSection/CategoriesSection';
import SupperposedSection from '../components/supperposedSection/SupperposedSection';
import CatalogsSection from '../components/catalogsSection/CatalogsSection';
import { graphql } from 'gatsby';
import Seo from '../components/Seo';

const IndexPage = ({ data }) => {
    return (
        <>
            <Seo />
            <Hero
                title="VIVE LA BELLEZA"
                subtitle="Productos inspirados en la Naturaleza"
                video
                media="/homepage-video.webm"
                mobileVideo="/homepage-video-sm.webm"
                mp4Fallback="/homepage-video.mp4"
                poster="/homepage-video-poster.webp"
            />
            <CategoriesSection
                categories={data.allProductCategoriesJson.edges.map(({ node }) => node)}
            />
            <SupperposedSection data={data.homepageJson.sideBySide} />
            <CatalogsSection catalogs={data.globalJson.catalogs} />
        </>
    );
};

export const query = graphql`
    query {
        homepageJson {
            sideBySide {
                title
                card {
                    title
                    description
                    image {
                        src {
                            childImageSharp {
                                gatsbyImageData(width: 450)
                            }
                        }
                    }
                }
            }
        }
        allProductCategoriesJson {
            edges {
                node {
                    title
                    hash
                    featuredImage {
                        src {
                            childImageSharp {
                                gatsbyImageData(width: 650)
                            }
                        }
                    }
                }
            }
        }
        globalJson {
            catalogs {
                name
                viewLink
                downloadLink
                image {
                    childImageSharp {
                        gatsbyImageData(width: 650)
                    }
                }
            }
        }
    }
`;

export default IndexPage;

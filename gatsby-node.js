const path = require('path');

async function createProductPages(actions, graphql) {
    const { data } = await graphql(`
        query {
            allProductCategoriesJson {
                edges {
                    node {
                        products {
                            title
                            heroTitle
                            slug
                            subtitle
                            description
                            canShowDefaultExtraCopy
                            extraCopy {
                                title
                                text
                            }
                            featuredImage {
                                src {
                                    childImageSharp {
                                        gatsbyImageData(width: 1400)
                                    }
                                }
                                alt
                            }
                            gallery {
                                src {
                                    childImageSharp {
                                        gatsbyImageData(width: 600)
                                    }
                                    publicURL
                                }
                                alt
                            }
                            productCatalogs {
                                img {
                                    src {
                                        childImageSharp {
                                            gatsbyImageData(width: 400)
                                        }
                                    }
                                    alt
                                }
                                name
                                url
                            }
                            ctas {
                                label
                                url
                            }
                        }
                    }
                }
            }
        }
    `);

    data.allProductCategoriesJson.edges.forEach(({ node }) => {
        node.products.forEach((product) => {
            actions.createPage({
                path: `/productos/${product.slug.toLowerCase()}`,
                component: path.resolve('./src/templates/Product.js'), // remember to add file extension
                context: {
                    data: product,
                },
            });
        });
    });
}

async function createProjectPages(actions, graphql) {
    const { data } = await graphql(`
        query {
            allProjectsListJson {
                edges {
                    node {
                        slug
                    }
                }
            }
        }
    `);

    data.allProjectsListJson.edges.forEach(({ node }) => {
        actions.createPage({
            path: `/proyectos/${node.slug}`,
            component: path.resolve('./src/templates/Project.js'),
            context: {
                slug: node.slug,
            },
        });
    });
}

exports.createPages = async function ({ actions, graphql }) {
    await createProductPages(actions, graphql);
    await createProjectPages(actions, graphql);
};

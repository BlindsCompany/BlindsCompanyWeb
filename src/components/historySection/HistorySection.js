import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';

const HistorySection = () => {
    const data = useStaticQuery(graphql`
        query {
            aboutJson {
                infoSection {
                    blocks {
                        title
                        description
                        img {
                            src {
                                childImageSharp {
                                    gatsbyImageData(width: 600)
                                }
                            }
                            alt
                        }
                    }
                }
            }
        }
    `);

    return (
        <section className="pt-base">
            <div className="section-title-container lg:w-4/5">
                <h2 className="h2">
                    BLINDS COMPANY BY PROYESOL, UNA COMPAÑIA FAMILIAR CON MAS DE 25 AÑOS
                </h2>
                <p>
                    Bienvenido al mundo inspirador de Blinds Company: un mundo de soluciones en el
                    que la belleza y la funcionalidad se unen, para crear e instalar la solución
                    perfecta de cobertura solar. Desde su creación en 2012 Blinds basó sus
                    colecciones y proyectos inspirados en el arte, la arquitectura, el diseño, la
                    tecnología y la naturaleza.
                </p>
            </div>
            <div className="section-title-container">
                <h2 className="h2">Vertiendes Blinds Company</h2>
            </div>
            <div className="grid grid-cols-1 gap-8 lg:gap-y-10 md:grid-cols-2 lg:grid-cols-3">
                {data.aboutJson.infoSection.blocks.map((block, i) => {
                    return (
                        <div key={i}>
                            <GatsbyImage
                                image={block.img.src.childImageSharp.gatsbyImageData}
                                alt={block.img.alt}
                                className="h-87.5 w-full"
                                objectFit="cover"
                                imgClassName="object-top"
                            />
                            <h3 className="mt-4 uppercase">{block.title}</h3>
                            <p className="mt-5 text-justify">{block.description}</p>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default HistorySection;

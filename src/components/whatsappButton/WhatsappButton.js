import React from 'react';
import WhatsappIcon from '../icons/WhatsappIcon';
import { useStaticQuery, graphql } from 'gatsby';

const WhatsappButton = () => {
    const data = useStaticQuery(graphql`
        query {
            globalJson {
                contact {
                    phone {
                        whatsappLink
                    }
                }
            }
        }
    `);
    return (
        <a
            href={data.globalJson.contact.phone.whatsappLink}
            className="fixed h-[70px] w-[70px] bg-primary-500 border-primary-900 border-[10px] left-2.5 bottom-9 z-50 rounded-full flex items-center justify-center"
            aria-label="Contáctanos en Whatsapp"
        >
            <WhatsappIcon className="text-white h-7 w-7" />
        </a>
    );
};

export default WhatsappButton;

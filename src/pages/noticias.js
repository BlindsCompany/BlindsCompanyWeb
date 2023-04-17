import React from 'react';
import Seo from '../components/Seo';

const Noticias = () => {
    return (
        <>
            <Seo title="Noticias" />
            <div className="news-container">
                <div className="news-branding-hide"></div>
                <iframe
                    src="https://blindscompany.wordpress.com"
                    className="news-container"
                    title="Blinds Company Blog"
                />
            </div>
        </>
    );
};

export default Noticias;

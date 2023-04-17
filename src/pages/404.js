import { Link } from 'gatsby';
import * as React from 'react';
import Seo from '../components/Seo';

const NotFoundPage = () => {
    return (
        <>
            <Seo title="Página no encontrada" />
            <div className="flex flex-col items-center mt-16">
                <h1 className="text-5xl font-bold">404 Página no encontrada</h1>
                <Link className="inline-block mt-6 underline" to="/">
                    Ir al inicio
                </Link>
            </div>
        </>
    );
};

export default NotFoundPage;

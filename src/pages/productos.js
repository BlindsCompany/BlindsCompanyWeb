import React from 'react';
import ProductsShowcase from '../components/productsShowcase/ProductsShowcase';
import Seo from '../components/Seo';

const Productos = () => {
    return (
        <>
            <Seo title="Productos" />
            <ProductsShowcase />
        </>
    );
};

export default Productos;

import React from 'react';
import ProductsShowcase from '../components/productsShowcase/ProductsShowcase';
import Seo from '../components/Seo';
import Layout from '../templates/Layout';

const Productos = () => {
    return (
        <Layout>
            <Seo title="Productos" />
            <ProductsShowcase />
        </Layout>
    );
};

export default Productos;

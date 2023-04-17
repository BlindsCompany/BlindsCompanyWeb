import React from 'react';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
import WhatsappButton from '../components/whatsappButton/WhatsappButton';
import '../styles/lib/typography.css';
import '../styles/tailwind/build.css';

const Layout = ({ children }) => {
    return (
        <>
            <Navbar />
            <main className="flex flex-col flex-1">
                <div className="container">{children}</div>
            </main>
            <WhatsappButton />
            <Footer />
        </>
    );
};

export default Layout;

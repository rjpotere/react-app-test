import React, { useState } from 'react';
import Header from './Header';
import Home from '../components/pages/Home';
import About from '../components/pages/About';
import Projects from '../components/pages/Projects';
import ContactMe from '../components/pages/ContactMe';

export default function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('Home');

    const renderPage = () => {
        if (currentPage === 'Home') {
            return <Home />;
        }

        if (currentPage === 'About') {
            return <About />;
        }

        if (currentPage === 'Projects') {
            return <Projects />;
        }
        
        return <ContactMe />;
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
            <Header currentPage={currentPage} handlePageChange={handlePageChange} />
            {renderPage()}
        </div>
    )
}
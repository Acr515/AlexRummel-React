import React from 'react';
import { Outlet } from 'react-router-dom';
import NavigationBar from 'components/NavigationBar';
import Footer from 'components/Footer';

/**
 * Wrapper for entire site, showing header, footer, and other constant elements.
 */
export default function App() {
    return (
        <div className="_App">
            <NavigationBar />
            <Outlet />
            <Footer />
        </div>
    )
}
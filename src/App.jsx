import React from 'react';
import { Outlet } from 'react-router-dom';
import NavigationBar from 'components/NavigationBar';

/**
 * Wrapper for entire site, showing header, footer, and other constant information.
 */
export default function App() {
    return (
        <div>
            <NavigationBar />
            <Outlet />
            <p>Footer idk</p>
        </div>
    )
}
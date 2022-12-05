import React from 'react';
import { Outlet } from 'react-router-dom';

/**
 * Wrapper for entire site, showing header, footer, and other constant information.
 */
export default function App() {
    return (
        <div>
            <p>Hello React!</p>
            <Outlet />
            <p>Footer idk</p>
        </div>
    )
}
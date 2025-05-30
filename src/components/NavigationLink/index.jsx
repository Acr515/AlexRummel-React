import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './style.scss';

/**
 * Renders a navigation bar link with special effects.
 */
function NavigationLink({ label, src, isExternal, onClick }) {
    const location = useLocation();
    const current = location.pathname === src;

    return (
        <div className={`_NavigationLink ${current ? 'current' : ''}`}>
            { !isExternal ? (
                <Link data-text={label} className='link-text _Mod_glowing-text' onClick={onClick} to={src}>{label}</Link>
            ) : (
                <a data-text={label} className='link-text _Mod_glowing-text' onClick={onClick} href={src}>{label}</a>
            )}
            <span className='triangle' />
        </div>
    );
}

export default NavigationLink;
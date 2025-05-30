import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import WidthContainer from 'components/WidthContainer';
import NavigationLink from 'components/NavigationLink';
import useScrollEvents from 'hooks/useScrollEvents';
import './style.scss';

export default function NavigationBar() {
    const [opened, setOpened] = useState(false);    // for navigation bar in mobile layout
    const location = useLocation();
    const locationRef = useRef(location);
    const scroll = useScrollEvents();
    const navRef = useRef(null);
    const wordmarkRef = useRef(null);
    const setHomePageNavigationVisibilityRef = useRef(null);

    // const colors = useContext(PageColorContext);

    useEffect(() => {
        setHomePageNavigationVisibilityRef.current = setHomePageNavigationVisibility;
        locationRef.current = location;

        scroll.on(setHomePageNavigationVisibility);
        setHomePageNavigationVisibility(null, window.scrollY);
        
        if (location.pathname !== '/' && navRef.current !== null && wordmarkRef.current !== null) {
            wordmarkRef.current.style.opacity = '';
            navRef.current.style.setProperty('--background-opacity', '');
        }

        return () => {
            scroll.off(setHomePageNavigationVisibility.current);
        };
    }, [location]);

    const setHomePageNavigationVisibility = useCallback((_, scrollY) => {
        if (locationRef.current.pathname !== '/' || navRef.current === null || wordmarkRef.current === null) { return; }
        const wordmarkOpacity = opened ? 1 : scrollY > 260 ? 1 : Math.max(0, 1 - ((260 - scrollY) * .01));
        wordmarkRef.current.style.opacity = wordmarkOpacity;

        const navOpacity = scrollY > 460 ? 1 : Math.max(0, 1 - ((460 - scrollY) * .007));
        navRef.current.style.setProperty('--background-opacity', navOpacity);
    }, []);
    
    // Collapse mobile navigation when a link is clicked
    const linkClicked = () => {
        setOpened(false);
    }

    return (
        <nav className={`_NavigationBar ${ opened ? "open" : "" }`} ref={navRef}>
            <WidthContainer className="container" verticalPadding={false}>
                <Link 
                    className="title _Mod_glowing-text" 
                    to="/"
                    data-text='Alex Rummel'
                    ref={wordmarkRef}
                >
                    Alex Rummel
                </Link>
                <ul className="link-list">
                    <li>
                        <NavigationLink src='/' onClick={linkClicked} label='portfolio' />
                    </li>
                    <li>
                        <NavigationLink src='/other' onClick={linkClicked} label='other' />
                    </li>
                    <li>
                        <NavigationLink src='/about' onClick={linkClicked} label='about' />
                    </li>
                    <li>
                        <NavigationLink src='/bin/AlexRummel_Resume.pdf' onClick={linkClicked} label='resume' isExternal />
                    </li>
                </ul>
                <div className="burger-button" onClick={ () => setOpened(!opened) }>
                    <div className="line line-1"></div>
                    <div className="line line-2"></div>
                    <div className="line line-3"></div>
                </div>
            </WidthContainer>
        </nav>
    )
}
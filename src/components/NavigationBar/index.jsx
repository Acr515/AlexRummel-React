import React, { useContext, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import WidthContainer from 'components/WidthContainer';
import PageColorContext from 'context/PageColorContext';
import './style.scss';
import NavigationLink from 'components/NavigationLink';

export default function NavigationBar() {
    const [opened, setOpened] = useState(false);    // for navigation bar in mobile layout
    const location = useLocation();

    const getHeaderOpacity = (y) => 
        location.pathname !== '/' ? 1 : opened ? 1 : y > 260 ? 1 : Math.max(0, 1 - ((260 - y) * .01));
    const getHeaderBgOpacity = (y) => 
        location.pathname !== '/' ? 1 : y > 460 ? 1 : Math.max(0, 1 - ((460 - y) * .007));

    const [headerOpacity, setHeaderOpacity] = useState(getHeaderOpacity(window.scrollY));
    const [headerBgOpacity, setHeaderBgOpacity] = useState(getHeaderBgOpacity(window.scrollY));

    const colors = useContext(PageColorContext);
    
    // Collapse mobile navigation when a link is clicked
    const linkClicked = () => {
        setOpened(false);
    }

    // Scrolling and resize change listeners
    useEffect(() => {
        const onScroll = () => {
            setHeaderOpacity(getHeaderOpacity(window.scrollY));
            setHeaderBgOpacity(getHeaderBgOpacity(window.scrollY));
        }
        const onResize = () => {
            if (innerWidth > 600) setOpened(false);
        }

        if (location.pathname === '/') {
            window.addEventListener('scroll', onScroll, { passive: true });
            window.addEventListener('resize', onResize, { passive: true });
        } else {
            window.removeEventListener('scroll', onScroll);
            window.removeEventListener('resize', onResize);
        }
        
        onScroll();
        
        return () => {
            window.removeEventListener('scroll', onScroll);
            window.removeEventListener('resize', onResize);
        }
    }, [location]);

    return (
        <nav 
            className={`_NavigationBar ${ opened ? "open" : "" }`}
            style={{ 
                backgroundColor: headerBgOpacity < 1 ? `rgba(4, 4, 4, ${headerBgOpacity})` : colors.background || "#040404"
            }}
        >
            <WidthContainer className="container" verticalPadding={false}>
                <Link 
                    className="title module-glow" 
                    to="/"
                    style={{ opacity: opened ? 1 : headerOpacity }}
                    data-text='Alex Rummel'
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
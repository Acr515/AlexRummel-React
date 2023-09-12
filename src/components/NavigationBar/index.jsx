import React, { useContext, useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import WidthContainer from 'components/WidthContainer';
import PageColorContext from 'context/PageColorContext';
import './style.scss';

export default function NavigationBar() {
    
    // Setup checking for current screen
    const [opened, setOpened] = useState(false);    // for navigation bar in mobile layout
    const location = useLocation();
    const [currentPath, setCurrentPath] = useState("");
    const currentPathRef= useRef({});
    currentPathRef.current = currentPath;
    const getHeaderOpacity = (y) => {
        return currentPathRef.current != "/" || opened ? 1 : y > 260 ? 1 : Math.max(0, 1 - ((260 - y) * .01));
    }
    const getHeaderBgOpacity = (y) => currentPathRef.current != "/" ? 1 : y > 460 ? 1 : Math.max(0, 1 - ((460 - y) * .007));
    const [headerOpacity, setHeaderOpacity] = useState(getHeaderOpacity(window.scrollY));
    const [headerBgOpacity, setHeaderBgOpacity] = useState(getHeaderBgOpacity(window.scrollY));

    const colors = useContext(PageColorContext);

    
    // Collapse mobile navigation when a link is clicked
    const linkClicked = () => {
        setOpened(false);
    }

    // Scrolling and resize change listeners
    useEffect(() => {
        // Setters
        const onScroll = () => {
            setHeaderOpacity(getHeaderOpacity(window.scrollY));
            setHeaderBgOpacity(getHeaderBgOpacity(window.scrollY));
        }
        const onResize = () => {
            if (innerWidth > 600) setOpened(false);
        }

        // Clean up code
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });
        window.removeEventListener('resize', onResize);
        window.addEventListener('resize', onResize, { passive: true });
        return () => { window.removeEventListener('scroll', onScroll); window.removeEventListener('resize', onResize); }
    }, []);

    // Location change listening
    useEffect(() => {
        setCurrentPath(location.pathname);
    }, [location]);
    useEffect(() => {
        setHeaderOpacity(getHeaderOpacity(window.scrollY));
        setHeaderBgOpacity(getHeaderBgOpacity(window.scrollY));
    }, [currentPath]);

    return (
        <nav 
            className={`_NavigationBar ${ opened ? "open" : "" }`}
            style={{ 
                backgroundColor: headerBgOpacity < 1 ? `rgba(4, 5, 4, ${headerBgOpacity})` : colors.background || "#040504"
            }}
        >
            <WidthContainer className="container" verticalPadding={false}>
                <Link 
                    className="title" 
                    to="/"
                    style={{ 
                        opacity: opened ? 1 : headerOpacity,
                        color: colors.font || "inherit"
                    }}
                >
                    Alex Rummel
                </Link>
                <ul className="link-list">
                    <li>
                        <div className="overline"></div>
                        <Link className="link-text" onClick={linkClicked} to="/" style={{ color: colors.font || "" }}>portfolio</Link>
                    </li>
                    <li>
                        <div className="overline"></div>
                        <Link className="link-text" onClick={linkClicked} to="/other" style={{ color: colors.font || "" }}>other</Link>
                    </li>
                    <li>
                        <div className="overline"></div>
                        <Link className="link-text" onClick={linkClicked} to="/about" style={{ color: colors.font || "" }}>about</Link>
                    </li>
                    <li>
                        <div className="overline"></div>
                        { process.env.NODE_ENV == 'production' ? 
                            <a className="link-text" onClick={linkClicked} href="/bin/AlexRummel_Resume.pdf" style={{ color: colors.font || "" }}>resume</a>
                        :
                            <Link className="link-text" onClick={linkClicked} to="/bin/AlexRummel_Resume.pdf" style={{ color: colors.font || "" }}>resume</Link>
                        }
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
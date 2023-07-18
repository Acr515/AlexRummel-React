import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import WidthContainer from 'components/WidthContainer';
import './style.scss';

export default function NavigationBar() {
    
    // Setup checking for current screen
    const location = useLocation();
    const [currentPath, setCurrentPath] = useState("");
    const currentPathRef= useRef({});
    currentPathRef.current = currentPath;
    const getHeaderOpacity = (y) => {
        return currentPathRef.current != "/" ? 1 : y > 260 ? 1 : Math.max(0, 1 - ((260 - y) * .01));
    }
    const getHeaderBgOpacity = (y) => currentPathRef.current != "/" ? 1 : y > 460 ? 1 : Math.max(0, 1 - ((460 - y) * .007));
    const [headerOpacity, setHeaderOpacity] = useState(getHeaderOpacity(window.scrollY));
    const [headerBgOpacity, setHeaderBgOpacity] = useState(getHeaderBgOpacity(window.scrollY));

    const [opened, setOpened] = useState(false);
    
    // Collapse mobile navigation when a link is clicked
    const linkClicked = () => {
        setOpened(false);
    }

    // Scrolling change listeners
    useEffect(() => {
        // Setters
        const onScroll = () => {
            setHeaderOpacity(getHeaderOpacity(window.scrollY));
            setHeaderBgOpacity(getHeaderBgOpacity(window.scrollY));
        }
        // Clean up code
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    // Location change listening
    useEffect(() => {
        console.log(location.pathname);
        setCurrentPath(location.pathname);
    }, [location]);
    useEffect(() => {
        setHeaderOpacity(getHeaderOpacity(window.scrollY));
        setHeaderBgOpacity(getHeaderBgOpacity(window.scrollY));
    }, [currentPath]);

    return (
        <nav 
            className={`_NavigationBar ${ opened ? "open" : "" }`}
            style={{ backgroundColor: `rgba(4, 5, 4, ${headerBgOpacity})` }}
        >
            <WidthContainer className="container" verticalPadding={false}>
                <Link 
                    className="title" 
                    to="/"
                    style={{ opacity: headerOpacity }}
                >
                    Alex Rummel
                </Link>
                <ul className="link-list">
                    <li><div className="overline"></div><Link onClick={linkClicked} to="/">portfolio</Link></li>
                    <li><div className="overline"></div><Link onClick={linkClicked} to="/about">about me</Link></li>
                    <li>
                        <div className="overline"></div>
                        { process.env.NODE_ENV == 'production' ? 
                            <a onClick={linkClicked} href="/bin/AlexRummel_Resume.pdf">resume</a>
                        :
                            <Link onClick={linkClicked} to="/bin/AlexRummel_Resume.pdf">resume</Link>
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
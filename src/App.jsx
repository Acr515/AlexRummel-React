import React, { useEffect, useRef, useState } from 'react';
import { Outlet, ScrollRestoration, useLocation } from 'react-router-dom';
import NavigationBar from 'components/NavigationBar';
import Footer from 'components/Footer';
import ImageViewerContext from 'context/ImageViewerContext';
import PageColorContext from 'context/PageColorContext';
import ImageViewer from 'components/ImageViewer';
import PortfolioEntries from 'config/PortfolioEntries';

/**
 * Wrapper for entire site, showing header, footer, and other constant elements.
 */
export default function App() {

    // Image viewer
    const [viewerVisible, setViewerVisible] = useState(false);
    const [viewerImage, setViewerImage] = useState(null);
    const openImage = image => {
        setViewerVisible(true);
        setViewerImage(image);
    };
    const closeImage = () => {
        setViewerVisible(false);
    };

    // Location change listening for document color changes
    const location = useLocation();
    const [currentPath, setCurrentPath] = useState("");
    const [customColors, setCustomColors] = useState({});
    const currentPathRef= useRef({});
    currentPathRef.current = currentPath;
    useEffect(() => {
        setCurrentPath(location.pathname);
    }, [location]);
    // Search for portfolio document color if one exists
    useEffect(() => {
        let path = currentPathRef.current.split('/').at(-1);
        const project = PortfolioEntries.getProject(path);
        console.log(project)
        if (project != null && typeof project.colors !== 'undefined') {
            // Update color state with custom colors
            setCustomColors(project.colors);
        } else setCustomColors({});
    }, [currentPath]);

    return (
        <div 
            className="_App"
            style={{
                backgroundColor: customColors.background || "revert",
                color: customColors.font || "revert",
            }}
        >
            <ImageViewerContext.Provider value={{ openImage, closeImage }}>
                <PageColorContext.Provider value={customColors}>
                    <NavigationBar />
                    <Outlet />
                    <Footer />
                    <ImageViewer
                        image={viewerImage}
                        visible={viewerVisible}
                    />
                    <ScrollRestoration />
                </PageColorContext.Provider>
            </ImageViewerContext.Provider>
        </div>
    )
}
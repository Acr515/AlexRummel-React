import React, { useState } from 'react';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import NavigationBar from 'components/NavigationBar';
import Footer from 'components/Footer';
import ImageViewerContext from 'context/ImageViewerContext';
import ImageViewer from 'components/ImageViewer';

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

    return (
        <div className="_App">
            <ImageViewerContext.Provider value={{ openImage, closeImage }}>
				<NavigationBar />
				<Outlet />
				<Footer />
				<ImageViewer
					image={viewerImage}
					visible={viewerVisible}
				/>
				<ScrollRestoration />
            </ImageViewerContext.Provider>
        </div>
    )
}
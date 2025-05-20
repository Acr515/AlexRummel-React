import React, { useContext, useEffect, useRef } from 'react';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import ImageViewerContext from 'context/ImageViewerContext';
import XIcon from 'assets/images/icons/x-icon.png';
import useOutsideAlerter from 'hooks/useOutsideAlerter';
import sleep from 'util/sleep';
import './style.scss';

export default function ImageViewer({image, visible}) {

    const imageViewer = useContext(ImageViewerContext);
    const viewerRef = useRef(null);
    const imageRef = useRef(null);
    useOutsideAlerter(imageRef, () => { resetImage(); imageViewer.closeImage(); });
    
    const resetImage = async () => {
        await sleep(250);
        viewerRef.current.resetTransform(0, "easeOut");
    }

    // Reset width/height of image after window is resized
    useEffect(() => {
        const resetView = () => {
            viewerRef.current.resetTransform(0, "easeOut")
        };
        window.addEventListener("resize", resetView);

        return () => window.removeEventListener("resize", resetView);
    }, []);

    // Reset width/height of image after image viewer is dismissed
    useEffect(() => {
        if (!visible) resetImage();
    }, [visible]);

    return (
        <div className={`_ImageViewer ${!visible ? "hidden" : ""}`}>
            <div className="background"></div>
            <button className="x-button" onClick={imageViewer.closeImage}>
                <img src={XIcon} alt="Exit" />
            </button>
            <TransformWrapper 
                centerOnInit
                centerOnZoomedOut
                wheel={{
                    step: .3
                }}
                doubleClick={{
                    mode: "reset"
                }}
                initialScale={0.85}
                minScale={0.85}
                ref={viewerRef}
            >
                <TransformComponent onClick={imageViewer.closeImage}>
                    <img className="image" src={image} ref={imageRef} />
                </TransformComponent>
            </TransformWrapper>
        </div>
    )
}
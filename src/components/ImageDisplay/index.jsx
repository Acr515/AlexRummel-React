import React, { useContext } from 'react';
import ImageViewerContext from 'context/ImageViewerContext';
import MagnifyingGlass from 'assets/images/icons/magnifying-glass.png';
import './style.scss';

/**
 * Used in portfolio entries to display image(s) with captions.
 * @param {Array} images An array of `require` statements containing references to images. For right now, avoid using more than 2
 * @param {string} caption A text caption to show beneath the image(s)
 * @param {number} maxWidth Forces a certain maximum width to apply to images
 * @param {number} captionMargin Overrides the default margin between the image area and the caption
 * @param {boolean} showBorders Defaults to false. When true, shows a gray border around each image
 * @param {boolean} forceFullWidth Defaults to false. When true, ensures the image inside stretches across the entire page
 * @param {boolean} clickToExpand Defaults to false. When true, images can be clicked and zoomed into
*/
export default function ImageDisplay({ className = "", style, images, caption = null, maxWidth = null, captionMargin, showBorders = false, forceFullWidth = false, clickToExpand = false }) {
    
    const imageViewer = useContext(ImageViewerContext);
    
    return (
        <div className={`_ImageDisplay ${className}`} style={style}>
            <div className={`image-container`}>
            {
                images.map((img, ind) => (
                    <div 
                        className={`single-image-container ${clickToExpand ? "expandable" : ""}`}
                        key={ind}
                        onClick={clickToExpand ? () => imageViewer.openImage(img) : null}
                    >
                        <img 
                            className={`image ${showBorders && " bordered"} ${forceFullWidth && " full-width"}`}
                            style={{ ...maxWidth != null ? { maxWidth } : {} }}
                            src={img}
                        />
                        { clickToExpand && 
                            <div className="hover-overlay">
                                <img 
                                    src={MagnifyingGlass}
                                    className="magnifying-glass"
                                />
                            </div>
                        }
                    </div>
                ))
            }
            </div>
            { caption != null && <div className="image-caption" style={{ marginTop: captionMargin || "unset" }}>
                {clickToExpand && <span className="bold-action">Click {images.length == 1 ? "the" : "an"} image to expand it. </span>}{caption}
            </div> }
        </div>
    )
}
import React from 'react';
import './style.scss';

/**
 * Used in portfolio entries to display image(s) with captions.
 * @param {Array} images An array of `require` statements containing references to images. For right now, avoid using more than 2
 * @param {string} caption A text caption to show beneath the image(s)
 * @param {number} maxWidth Forces a certain maximum width to apply to images
 * @param {boolean} showBorders Defaults to false. When true, shows a gray border around each image
 * @param {boolean} forceFullWidth Defaults to false. When true, ensures the image inside stretches across the entire page
*/
export default function ImageDisplay({ images, caption = null, maxWidth = null, showBorders = false, forceFullWidth = false }) {
    return (
        <div className="_ImageDisplay">
            <div className={`image-container`}>
            {
                images.map((img, ind) => (
                    <img 
                        className={`image ${showBorders && "bordered"}${forceFullWidth && " full-width"}`}
                        style={ maxWidth != null ? { maxWidth } : {}}
                        src={img}
                        key={ind}
                    />
                ))
            }
            </div>
            { caption != null && <caption className="image-caption">
                {caption}
            </caption> }
        </div>
    )
}
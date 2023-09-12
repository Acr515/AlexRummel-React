import React from 'react';
import './style.scss'

/**
 * This component restricts the width of text content, essentially creating the margins on either side of the site.
 * Most, if not all, content should be wrapped inside this element.
 * @param {number} width Defaults to 1150. The container will size to the smaller of 100% width and this number
 * @param {boolean} verticalPadding Defaults to true. Adds padding to the top and bottom of the element
 */
export default function WidthContainer({ children, className, width = 1150, verticalPadding = true, style }) {
    return (
        <div 
            className={`_WidthContainer ${verticalPadding ? "vertical-padding" : ""} ${className ? className : ""}`}
            style={{ ...style, maxWidth: width }}
        >
            {children}
        </div>
    )
}
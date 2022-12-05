import React from 'react';
import './style.scss'

/**
 * This component restricts the width of text content, essentially creating the margins on either side of the site.
 * Most, if not all, content should be wrapped inside this element.
 * @param {boolean} verticalPadding Defaults to true. Adds padding to the top and bottom of the element.
 */
export default function WidthContainer({ children, className, verticalPadding = true }) {
    return (
        <div 
            className={`_WidthContainer ${verticalPadding ? "vertical-padding" : ""} ${className || ""}`}
        >
            {children}
        </div>
    )
}
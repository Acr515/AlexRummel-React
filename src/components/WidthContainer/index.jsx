import React from 'react';
import './style.scss'

/**
 * This component restricts the width of text content, essentially creating the margins on either side of the site.
 * Most, if not all, content should be wrapped inside this element.
 */
export default function WidthContainer({ children, className }) {
    return (
        <div className={`_WidthContainer ${className || ""}`}>{children}</div>
    )
}
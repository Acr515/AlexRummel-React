import React from 'react';
import './style.scss';

/**
 * Creates a horizontal gray line on the screen intended for use between sections of content.
 */
export default function SectionDivider({ className = "", style }) {
    return (
        <div style={style} className={`_SectionDivider ${className}`}>
            <div></div>
        </div>
    )
}
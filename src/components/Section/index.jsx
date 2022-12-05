import React from 'react';
import WidthContainer from 'components/WidthContainer';
import './style.scss';

/**
 * Represents a section of content on any page. Fill with any elements you want!
 */
export default function Section({ children, className, style }) {
    return (
        <section className={`_Section ${className || ""}`} style={style}>
            <WidthContainer className="section-container">
                {children}
            </WidthContainer>
        </section>
    )
}
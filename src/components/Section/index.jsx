import React from 'react';
import WidthContainer from 'components/WidthContainer';

/**
 * Represents a section of content on any page. Fill with any elements you want!
 * Because this component shells a `WidthContainer`, there is also an `outerClassName` property you can assign to the outer `<section>` element
 */
export default function Section({ children, className, outerClassName, style }) {
    return (
        <section className={`_Section ${outerClassName || ""}`} style={style}>
            <WidthContainer className={`${className || ""}`}>
                {children}
            </WidthContainer>
        </section>
    )
}
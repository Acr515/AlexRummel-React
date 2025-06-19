import React, { forwardRef } from 'react';
import WidthContainer from 'components/WidthContainer';

/**
 * Represents a section of content on any page. Fill with any elements you want!
 * Because this component shells a `WidthContainer`, there is also an `outerClassName` property you can assign to the outer `<section>` element
 */
function Section({ children, className, outerClassName, style, columns = false }, ref) {
    return (
        <section className={`_Section ${outerClassName || ''}`} style={style} ref={ref}>
            <WidthContainer className={`${className || ''}`} columns={columns}>
                {children}
            </WidthContainer>
        </section>
    )
}

export default forwardRef(Section);
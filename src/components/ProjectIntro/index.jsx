import React from 'react';
import WidthContainer from 'components/WidthContainer';
import './style.scss';

/**
 * A standard-use introductory section component for each project that uses a small image to the left
 * and a custom HTML description to the right.
 * @param {URL} image The image to display alongside the HTML description
 */
export default function ProjectIntro({ children, image }) {
    return (
        <WidthContainer className="_ProjectIntro" width={1250}>
            <div className="image-holder">
                <img src={image} className="image" />
            </div>
            <div className="text-holder">
                {children}
            </div>
        </WidthContainer>
    )
}
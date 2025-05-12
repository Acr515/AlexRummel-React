import React from 'react';
import WidthContainer from 'components/WidthContainer';
import './style.scss';

/**
 * A standard-use introductory section component for each project that uses a small image to the left
 * and a custom HTML description to the right.
 * @param {ProjectEntry} entry The project to display.
 * @param {string} overview An overview of the project. // TODO: Remove??
 */
export default function ProjectIntro({ entry }) {
    return (
        <div className="_ProjectIntro">
            <WidthContainer className="project-intro-container">
                <div className="column">
                    <h3>Overview</h3>
                    <p>Giggidy giggidy giggidy</p>
                    <h3>Collaborators</h3>
                    <p>Giggidy giggidy giggidy</p>
                </div>
                <div className="column">
                    <h3>Tools Used</h3>
                    <p>Many very dumb tools</p>
                </div>
            </WidthContainer>
        </div>
    )
}
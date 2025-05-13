import React, { forwardRef, useImperativeHandle, useRef } from 'react';
import WidthContainer from 'components/WidthContainer';
import './style.scss';

/**
 * A standard-use introductory section component for each project that uses a small image to the left
 * and a custom HTML description to the right.
 * @param {ProjectEntry} entry The project to display.
 */
function ProjectIntro({ entry }, ref) {
    const elementRef = useRef(null);
    useImperativeHandle(ref, () => ({
        getTop: () => {
            if (elementRef.current === null) { return window.innerHeight; }
            return elementRef.current.getBoundingClientRect().top;
        },
        getBottom: () => {
            if (elementRef.current === null) { return window.innerHeight; }
            return elementRef.current.getBoundingClientRect().bottom;
        }
    }));

    return (
        <div className="_ProjectIntro" ref={elementRef}>
            <WidthContainer className="project-intro-container">
                <div className="column">
                    <h3>Overview</h3>
                    <p>{entry.specs.overview ?? "Giggidy giggidy giggidy"}</p>
                    <h3>Collaborators</h3>
                    <p>Giggidy giggidy giggidy</p>
                </div>
                <div className="column">
                    <h3>Tools Used</h3>
                    {
                        // TODO: Remove this check once all projects are updated
                        Array.isArray(entry.specs.toolsUsed) ? (
                            entry.specs.toolsUsed.map(string => <p key={string}>{string}</p>) 
                        ) : (
                            Object.keys(entry.specs.toolsUsed).map(category => (
                                <div className='tool-group'key={category}>
                                    <h4>{category}</h4>
                                    <p>{entry.specs.toolsUsed[category]}</p>
                                </div>
                            ))
                        )
                    }
                </div>
            </WidthContainer>
        </div>
    )
}

export default forwardRef(ProjectIntro);
import React, { useState, useRef, useCallback, useEffect } from 'react';
import MetaTags from 'components/MetaTags';
import WidthContainer from 'components/WidthContainer';
import ProjectIntro from 'components/ProjectIntro';
import ScrollIndicator from 'components/ScrollIndicator';
import useScrollEvents from 'hooks/useScrollEvents';
import './style.scss';

/**
 * Creates the large header shown on every portfolio entry's page. This also auto-generates the `MetaTags` component.
 * The header can be either a single static image or a precomposed child element. It will be fixed and take up the entire
 * size of the viewport.
 * @param {PortfolioEntry} entry The portfolio data to use
 * @param {string} wideImage Optional. A large image to show in the background of the project header and tagline
 * @param {string} wordmark Optional. The wordmark of the project show. Although not required, it is highly recommended
 * @param {object} scrollEvents Optional. The `useScrollEvents` hook of the parent; if it doesn't exist, this component will create its own
 */
export default function PortfolioHeader({ children, entry, wideImage = null, wordmark = null, scrollEvents = null }) {
    const [graphicIsVisible, setGraphicIsVisible] = useState(true);
    const introRef = useRef(null);
    const scrollEventBackup = useScrollEvents();

    const onScroll = useCallback(() => {
        setGraphicIsVisible(introRef.current.getBottom() > 0);
    }, []);

    useEffect(() => {
        (scrollEvents ?? scrollEventBackup).on(onScroll);
        
        return () => {
            (scrollEvents ?? scrollEventBackup).off(onScroll);
        }
    }, []);

    return (
        <div className="_PortfolioHeader">
            <MetaTags
                title={entry.title}
                description={entry.tagline}
            />
            <div className="heading-wrapper">
                <div className="heading-section">
                    <div className="large-graphic" style={{ display: graphicIsVisible ? 'block' : 'none' }}>
                        { typeof children !== 'undefined' ? children : (
                            <img className='static-image' src={wideImage} />
                        )}
                    </div>
                    <div className="heading-content">
                        <WidthContainer>
                            <div className='project-title-container'>
                                { 
                                    wordmark === null ? (
                                        <h1>{entry.title}</h1>
                                    ) : (
                                        <img className='wordmark' src={wordmark} alt={entry.title} />
                                    )
                                }
                            </div>
                            <div className="tagline">{entry.tagline}</div>
                            <ScrollIndicator />
                        </WidthContainer>
                    </div>
                </div>
            </div>
            <div className='glowing-edge' />
            <ProjectIntro entry={entry} ref={introRef} />
            <div className='glowing-edge' />
        </div>
    )
}
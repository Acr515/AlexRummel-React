import MetaTags from 'components/MetaTags';
import React, { useState, useEffect, useRef } from 'react';
import WidthContainer from 'components/WidthContainer';
import ProjectIntro from 'components/ProjectIntro';
import './style.scss';
import ScrollIndicator from 'components/ScrollIndicator';

/**
 * Creates the large header shown on every portfolio entry's page. This also auto-generates the `MetaTags` component.
 * The header can be either a single static image or a precomposed child element. It will be fixed and take up the entire
 * size of the viewport.
 * @param {PortfolioEntry} entry The portfolio data to use
 * @param {string} wideImage Optional. A large image to show in the background of the project header and tagline
 * @param {string} wordmark Optional. The wordmark of the project show. Although not required, it is highly recommended.
 */
export default function PortfolioHeader({ children, entry, wideImage = null, wordmark = null }) {
    const introRef = useRef(null);
    const [graphicIsVisible, setGraphicIsVisible] = useState(true);

    useEffect(() => {
        const onScroll = () => {
            setGraphicIsVisible(introRef.current.getBottom() > 0);
        };

        window.addEventListener('scroll', onScroll);

        return () => {
            window.removeEventListener('scroll', onScroll);
        };
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
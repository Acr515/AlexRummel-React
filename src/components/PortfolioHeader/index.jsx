import MetaTags from 'components/MetaTags';
import React, { useContext } from 'react';
import WidthContainer from 'components/WidthContainer';
import PageColorContext from 'context/PageColorContext';
import './style.scss';

/**
 * Creates the large header shown on every portfolio entry's page. This also auto-generates the `MetaTags` component.
 * The header can be either a single static image or a precomposed child element. It will be fixed and take up the entire
 * size of the viewport.
 * @param {PortfolioEntry} entry The portfolio data to use
 * @param {string} wideImage Optional. A large image to show in the background of the project header and tagline
 * @param {string} wordmark Optional. The wordmark of the project show. Although not required, it is highly recommended.
 */
export default function PortfolioHeader({ children, entry, wideImage = null, wordmark = null }) {

    const colors = useContext(PageColorContext);

    return (
        <div className="_PortfolioHeader">
            <MetaTags
                title={entry.title}
                description={entry.tagline}
            />
            <div className="heading-section">
                <div className="large-graphic">
                    { typeof children !== 'undefined' ? children : (
                        <img className='static-image' src={wideImage} />
                    )}
                </div>
                <div className="heading-content">
                    <WidthContainer>
                        <h1>{entry.title}</h1>
                        <div className="tagline">{entry.tagline}</div>
                    </WidthContainer>
                </div>
            </div>
        </div>
    )
}
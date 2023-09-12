import MetaTags from 'components/MetaTags';
import React from 'react';
import WidthContainer from 'components/WidthContainer';
import './style.scss';

/**
 * Creates the large header shown on every portfolio entry's page. This also auto-generates the `MetaTags` component.
 * @param {PortfolioEntry} entry The portfolio data to use
 * @param {object} wideImage The large image to show in the background of the project header and tagline
 * @param {boolean} dim Optional. If true, dims the opacity of the header image
 */
export default function PortfolioHeader({ entry, wideImage = null, dim = false }) {
    return (
        <div className="_PortfolioHeader">
            <MetaTags
                title={entry.title}
                description={entry.tagline}
            />
            <div className="heading-section">
                <img src={wideImage} className="large-image" style={{ opacity: dim ? 0.5 : 1 }} />
                <div className="heading-content">
                    <WidthContainer>
                        <h1>{entry.title}</h1>
                        <div className="tagline">{entry.tagline}</div>
                    </WidthContainer>
                </div>
            </div>
            <WidthContainer>
                <div className="specifications">
                    <h3 className="date">{entry.specs.dates}</h3>
                    {entry.specs.toolsUsed.map((tools, i) => <h3 key={i}>{tools}</h3>)}
                </div>
            </WidthContainer>
        </div>
    )
}
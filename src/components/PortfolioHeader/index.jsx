import MetaTags from 'components/MetaTags';
import Section from 'components/Section';
import React from 'react';
import './style.scss';

/**
 * Creates the large header shown on every portfolio entry's page. This also auto-generates the `MetaTags` component.
 * @param {PortfolioEntry} entry The portfolio data to use
 * @param {object} wideImage The large, wide image to be displayed directly beneath the specifications table. Omitting this value means NEITHER of these images are shown
 * @param {object} narrowImage The narrower image to be displayed directly beneath the specifications table.
 * @param {boolean} flipLargeImages Defaults to false. By default, the wider image presents to the left edge of the screen. Setting to true moves it to the right edge
 */
export default function PortfolioHeader({ entry, wideImage = null, narrowImage, flipLargeImages = false }) {
    return (
        <div className="_PortfolioHeader">
            <MetaTags
                title={entry.title}
            />
            <Section>
                <img className="banner-image" width="800" height="275" src={entry.featuredImage} />
                <h1>{entry.title}</h1>
                <p>{entry.tagline}</p>
                <h2>Specifications</h2>
                <div className="info-section">
                    <div className="row">
                        <span className="cat">Dates</span>
                        <span className="val">{entry.specs.dates}</span>
                    </div>
                    <div className="row">
                        <span className="cat">Tools Used</span>
                        <span className="val">
                            {
                                entry.specs.toolsUsed.map((tool, ind) => (
                                    <span
                                        key={ind}
                                        className="info-line"
                                    >
                                        {tool}
                                    </span>
                                ))
                            }
                        </span>
                    </div>
                    { entry.specs.linkNames.length > 0 &&
                        <div className="row">
                            <span className="cat">Links</span>
                            <span className="val">
                                {
                                    entry.specs.linkNames.map((link, ind) => (
                                        <a 
                                            target="blank" 
                                            href={entry.specs.linkLocations[ind]} 
                                            key={ind}
                                            className="info-line"
                                        >
                                            {link}
                                        </a>
                                    ))
                                }
                            </span>
                        </div>
                    }
                </div>
            </Section>
            { wideImage != null && <div className="large-image-group">
                { flipLargeImages && <div className="large-image-column narrow">
                    <div className="large-image" style={{ backgroundImage: `url(${narrowImage})` }}></div>
                </div> }
                <div className="large-image-column">
                    <div className="large-image" style={{ backgroundImage: `url(${wideImage})` }}></div>
                </div>
                { !flipLargeImages && <div className="large-image-column narrow">
                    <div className="large-image" style={{ backgroundImage: `url(${narrowImage})` }}></div>
                </div> }
            </div> }
        </div>
    )
}
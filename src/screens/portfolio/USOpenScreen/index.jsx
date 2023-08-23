import React from 'react';
import Section from 'components/Section';
import PortfolioHeader from 'components/PortfolioHeader';
import ImageDisplay from 'components/ImageDisplay';
import PortfolioEntries from 'config/PortfolioEntries';

import Header from 'projects/USOpen/header.png';
import imports from 'projects/USOpen/imports';
import './style.scss';
import WidthContainer from 'components/WidthContainer';

/**
 * The portfolio page for the US Open rebrand.
 */
export default function USOpenScreen() {
    return (
        <div className="_USOpenScreen _Screen"> 
            <PortfolioHeader 
                entry={PortfolioEntries.getProject("us-open")}
                wideImage={Header}
            />
            <WidthContainer className="initial-two-column" width={1250}>
                <div className="image-holder">
                    <img src={imports['arthur-ashe']} className="ashe-initial" />
                </div>
                <div className="text-holder">
                    <p>
                        The prompt for this project was to select an event, update its brand identity, and illustrate how the new identity could be applied.
                    </p>
                    <p>
                        I selected the US Open tennis tournament and began by researching its history and venue for inspiration.
                    </p>
                </div>
            </WidthContainer>

            <div className="research-insights">
                <img src={imports['research-insights']} />
            </div>

            <Section className="opportunities">
                <div>
                    <p>After researching, three clear design goals emerged that guided the iteration process:</p>
                </div>
                <div>
                    <ul className="opportunity-list">
                        <li><span>
                            How can the new identity incorporate elements of the event&apos;s host venue or city?
                            <p>The current identity does not visually acknowledge features of NYC or the venue</p>
                        </span></li>
                        <li><span>
                            How can the new identity illustrate the energy and excitement of the event?
                            <p>The US Open is known for its late nights of tense, powerful, world-class tennis</p>
                        </span></li>
                        <li><span>
                            How can the new identity appeal to a diverse audience of varying levels of tennis experience?
                            <p>The USTA, whose mission is promoting increased tennis participation, hosts the event</p>
                        </span></li>
                    </ul>
                </div>
            </Section>
            <Section>
                <h2>Applications</h2>
                <p>With my completed logo in hand, I implemented it into various real-life applications, ranging from its presence in the stadium and screen media to merchandising.</p>
                <h3>Stadium</h3>
                <ImageDisplay
                    images={[imports['stadium-graphics']]}
                    forceFullWidth
                    className="application-images"
                />
                <h3>Scoreboards</h3>
                <ImageDisplay
                    images={[imports['scoreboard']]}
                    forceFullWidth
                    className="application-images"
                />
                <h3>Motion</h3>
                <div className="split-display">
                    <img src={imports['logo-animation']} className="split-column" />
                    <video controls className="split-column">
                        <source type="video/mp4" src={imports['logo-animation-video']} />
                    </video>
                </div>
                <h3>Merchandise</h3>
                <ImageDisplay
                    images={[imports['merchandise']]}
                    forceFullWidth
                    className="application-images"
                />
            </Section>
        </div>
    )
}
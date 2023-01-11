import React from 'react';
import Section from 'components/Section';
import SectionDivider from 'components/SectionDivider';
import PortfolioHeader from 'components/PortfolioHeader';
import ImageDisplay from 'components/ImageDisplay';
import PortfolioEntries from 'config/PortfolioEntries';

import WideImage from 'projects/USOpen/assets/ashe-exterior.jpg';
import NarrowImage from 'projects/USOpen/assets/nadal-tall.png';
import imports from 'projects/USOpen/imports';
import './style.scss';

/**
 * The portfolio page for the US Open rebrand.
 */
export default function USOpenScreen() {
    return (
        <div className="_USOpenScreen _Screen">
            <PortfolioHeader 
                entry={PortfolioEntries.getProject("us-open")}
                flipLargeImages={true}
                wideImage={WideImage}
                narrowImage={NarrowImage}
            />
            <Section>
                <h2>Introduction</h2>
				<p>
					I was tasked with selecting any event and completely redesigning its entire brand. I chose the US Open tennis tournament as I saw significant opportunities to improve upon their recent rebranding attempt.
				</p>
                <ImageDisplay 
                    images={[imports['old-logo']]}
                    maxWidth={200}
                    caption="The current US Open logo."
                    captionMargin={32}
                />
            </Section>
            <SectionDivider />
            <Section>
                <h2>Process</h2>
				<p>
					I began by researching the US Open, focusing on its history, location, and audience. With that information, I analyzed the current logo, including whether or not it met its design goals.
				</p>
                <p>
                    I then generated numerous hand and digital sketches, emphasizing a logo that embodies any features of its location in New York City, as well as a the overall energy and intensity of the event. Once the new logo was fully developed, I applied the design to a number of physical objects and places, including souvenirs and sections of the venue.
                </p>
                <ImageDisplay 
                    images={[imports['hand-sketches']]}
                    forceFullWidth
                />
                <ImageDisplay 
                    images={[imports['digital-sketches']]}
                    forceFullWidth
                />
                <ImageDisplay
                    images={[imports['final-concepts']]}
                    forceFullWidth
                />
                <ImageDisplay
                    images={[imports['color-concepts']]}
                    forceFullWidth
                />
            </Section>
            <SectionDivider />
            <Section>
                <h2>Results</h2>
                <p>With my completed logo in hand, I implemented it into various real-life applications, focusing on merchandise and the overall venue experience, and culminating in a <a href="/bin/AlexRummel_USOpen_BrandProposal.pdf">comprehensive brand book</a>.</p>
                <ImageDisplay
                    images={[imports['ashe-logo-large'], imports['ashe-logo-small']]}
                    forceFullWidth
                />
                <ImageDisplay
                    images={[imports['arthur-ashe-process']]}
                    forceFullWidth
                />
                <ImageDisplay
                    images={[imports['scoreboards']]}
                    forceFullWidth
                />
                <div className="split-display">
                    <img src={imports['logo-animation']} className="split-column" />
                    <video controls className="split-column">
                        <source type="video/mp4" src={imports['logo-animation-video']} />
                    </video>
                </div>
                <ImageDisplay
                    images={[imports['tennis-balls']]}
                    forceFullWidth
                />
            </Section>
        </div>
    )
}
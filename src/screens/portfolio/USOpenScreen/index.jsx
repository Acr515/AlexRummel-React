import React from 'react';
import Section from 'components/Section';
import SectionDivider from 'components/SectionDivider';
import PortfolioHeader from 'components/PortfolioHeader';
import ImageDisplay from 'components/ImageDisplay';
import PortfolioEntries from 'config/PortfolioEntries';

import WideImage from 'projects/USOpen/assets/ashe-exterior.jpg';
import NarrowImage from 'projects/USOpen/assets/nadal-tall.png';
import imports from 'projects/USOpen/imports';

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
                    caption="Hand and digital sketches of potential logo concepts."
                    forceFullWidth
                />
                <ImageDisplay
                    images={[imports['final-concepts']]}
                    caption="The final three logo designs. I ultimately selected the far right design."
                    forceFullWidth
                />
                {/* Color iterations */}
                {/* Talk about applications */}
            </Section>
            <Section>
                <h2>Results</h2>
            </Section>
        </div>
    )
}
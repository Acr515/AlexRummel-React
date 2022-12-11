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
 * The portfolio page for Ludum Dare 46.
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
					I was tasked with selecting any event and completely redesigning its entire brand. I chose the US Open tennis tournament as I saw significant opportunities to improve upon their latest rebranding strategies.
				</p>
            </Section>
            <SectionDivider />
            <Section>
                <h2>Process</h2>
				<p>
					I began by researching the US Open event, focusing on its history, location, and audience. We used that information and reflected on the current branding and its shortcomings, including whether or not it matched its design goals or not, as well as a technical analysis.
				</p>
                <p>
                    With this information in hand, I generated numerous hand and digital sketches. I emphasized a logo that embodies some feature of its location in New York City, as well as a the overall energy and intensity of the event.
                </p>
                {/* Put the sketch images here */}
                <p>
                </p>
                {/* Talk about color */}
                {/* Talk about applications */}
            </Section>
            <Section>
                <h2>Results</h2>
            </Section>
        </div>
    )
}
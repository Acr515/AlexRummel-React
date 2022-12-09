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
					I began by researching the US Open event, focusing on its history, location, audience, and 
				</p>
            </Section>
        </div>
    )
}
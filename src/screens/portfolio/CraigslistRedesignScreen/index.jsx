import React from 'react';
import Section from 'components/Section';
import SectionDivider from 'components/SectionDivider';
import PortfolioHeader from 'components/PortfolioHeader';
import ImageDisplay from 'components/ImageDisplay';
import PortfolioEntries from 'config/PortfolioEntries';

import WideImage from 'projects/CraigslistRedesign/small-cover.jpg';
import NarrowImage from 'projects/CraigslistRedesign/assets/cincinnati.jpg';
import imports from 'projects/CraigslistRedesign/imports';

/**
 * The portfolio page for the Craigslist Redesign.
 */
export default function CraigslistRedesignScreen() {
    return (
        <div className="_CraigslistRedesignScreen _Screen">
            <PortfolioHeader 
                entry={PortfolioEntries.getProject("craigslist-redesign")}
                wideImage={WideImage}
                narrowImage={NarrowImage}
                flipLargeImages
            />
            <Section>
                <h2>Introduction</h2>
                <p>
					The redesign focused on making two specific task flows easier: finding housing and creating a post. Diagramming user flows through the current Craigslist website revealed design flaws that needed to be addressed:
				</p>
                <ul>
                    <li>The button used to post was not immediately obvious</li>
                    <li>There was a lack of confidence in the process of creating a post and what next steps would be</li>
                    <li>Map feature was obtuse and frustrating to use</li>
                    <li>Categories on the home page were difficult to parse</li>
                </ul>
                <ImageDisplay
                    images={[imports['usability-data-1'], imports['usability-data-2']]}
                    clickToExpand
                />
            </Section>
            <SectionDivider />
            <Section>
                <h2>Process</h2>
                <p>
                    I began by sketching possible flows while prioritizing these design objectives. I also created a basic wireframe in Adobe XD to model what these sketches may look like in practice while retaining a similar visual identity to the current website.
                </p>
                <ImageDisplay
                    images={[imports['sketch-1'], imports['sketch-2']]}
                />
                <ImageDisplay
                    images={[imports['sketch-3'], imports['sketch-4']]}
                />
                <ImageDisplay
                    images={[imports['sketch-5'], imports['sketch-6']]}
                />
                <ImageDisplay
                    images={[imports['wireframe']]}
                    forceFullWidth
                />
                <p>
                    The basis of the new visual language would be to make the site feel more warm and inviting. I employed the use of a more vibrant base color, a rounder typeface, and bouncy interaction animations to do so.
                </p>
                <ImageDisplay
                    images={[imports['style-guide']]}
                    forceFullWidth
                />
                <ImageDisplay
                    images={[imports['button-animations']]}
                    maxWidth={400}
                />
            </Section>
            <SectionDivider />
            <Section>
                <h2>Results</h2>
                <ImageDisplay
                    images={[imports['final-results']]}
                    forceFullWidth={true}
                />
            </Section>
        </div>
    )
}
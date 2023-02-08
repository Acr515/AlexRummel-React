import React from 'react';
import Section from 'components/Section';
import SectionDivider from 'components/SectionDivider';
import PortfolioHeader from 'components/PortfolioHeader';
import ImageDisplay from 'components/ImageDisplay';
import PortfolioEntries from 'config/PortfolioEntries';

import WideImage from 'projects/CraigslistRedesign/small-cover.jpg';
import NarrowImage from 'projects/CraigslistRedesign/assets/cincinnati.jpg';
import imports from 'projects/CraigslistRedesign/imports';
import './style.scss';
import WidthContainer from 'components/WidthContainer';

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
                <h2>User Testing</h2>
                <p>
					To assess Craigslist&apos;s problem areas, two users were asked to search for a home using the built-in map, then create a post. The findings revealed that:
				</p>
                <ul>
                    <li>The button used to post was not immediately obvious</li>
                    <li>There was a lack of confidence in the process of creating a post</li>
                    <li>The map feature was obtuse and frustrating to use</li>
                    <li>The categories on the home page were difficult to parse</li>
                </ul>
                <ImageDisplay
                    images={[imports['user-flow-a']]}
                    forceFullWidth
                />
                <ImageDisplay
                    images={[imports['user-flow-b']]}
                    forceFullWidth
                />
            </Section>
            <SectionDivider />
            <Section>
                <h2>Concept Development</h2>
                <p>
                    I began by sketching possible flows while prioritizing the repair of the pain points that were found. I tried to implement image alternatives to Craigslist elements wherever possible to make up for Craigslist&apos;s current stiff, text-heavy communication method.
                </p>
            </Section>
            <WidthContainer width={1400}>
                <div className="wide-column-area">
                    <div className="column text-column">
                        <p>This is where I&apos;ll describe some of the highlights, but I&apos;m just putting placeholder text here for now.</p>
                    </div>
                    <div className="column image-column">
                        <ImageDisplay
                            images={[imports['sketch-1'], imports['sketch-2']]}
                        />
                        <ImageDisplay
                            images={[imports['sketch-3'], imports['sketch-4']]}
                        />
                        <ImageDisplay
                            images={[imports['sketch-5'], imports['sketch-6']]}
                        />
                    </div>
                </div>
            </WidthContainer>
            <Section>
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
            <div className="result-background">
                <Section>
                    <h2>Results</h2>
                    <ImageDisplay
                        images={[imports['home-page-large']]}
                        forceFullWidth
                        style={{ marginTop: 32, marginBottom: 0 }}
                    />
                    <ImageDisplay
                        images={[imports['listing-gallery'], imports['listing-details']]}
                        gap={32}
                        style={{ marginTop: 32, marginBottom: 0 }}
                    />
                    <ImageDisplay
                        images={[imports['listing-map']]}
                        forceFullWidth
                        style={{ marginTop: 32, marginBottom: 0 }}
                    />
                    <ImageDisplay
                        images={[imports['create-landing'], imports['create-details']]}
                        gap={32}
                        style={{ marginTop: 32, marginBottom: 0 }}
                    />
                    <ImageDisplay
                        images={[imports['create-images'], imports['create-draft']]}
                        gap={32}
                        style={{ marginTop: 32, marginBottom: 0 }}
                    />
                </Section>
            </div>
        </div>
    )
}
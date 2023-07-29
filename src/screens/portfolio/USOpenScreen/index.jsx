import React from 'react';
import Section from 'components/Section';
import PortfolioHeader from 'components/PortfolioHeader';
import ImageDisplay from 'components/ImageDisplay';
import PortfolioEntries from 'config/PortfolioEntries';

import Header from 'projects/USOpen/header.png';
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
                wideImage={Header}
            />
            <Section>
                <h2>Development</h2>
				<p>
					I was tasked with selecting any event and completely redesigning its entire brand. I chose the US Open tennis tournament as I saw significant opportunities to improve upon their recent rebranding attempt.
				</p>
				<p>
					After thorough research of the event, I decided to create a design that would:
				</p>
                <ul>
                    <li>Encapsulate the same energy and intensity of the event</li>
                    <li>Include an implicit connection to some feature of the venue or its host city</li>
                    <li>Remain accessible to fans, old and new</li>
                </ul>
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
                    images={[imports['color-study']]}
                    forceFullWidth
                    caption="In selecting potential brand colors, I sought a palette that would emulate American colors without being too predictable while keeping with the logo's fresh, dynamic aesthetic."
                    captionMargin={20}
                />
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
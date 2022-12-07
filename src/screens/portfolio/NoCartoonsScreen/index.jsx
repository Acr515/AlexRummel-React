import React from 'react';
import Section from 'components/Section';
import PortfolioHeader from 'components/PortfolioHeader';
import ImageDisplay from 'components/ImageDisplay';
import PortfolioEntries from 'config/PortfolioEntries';

import imports from 'projects/NoCartoons/imports';

/**
 * The portfolio page for the No Cartoons advertisement.
 */
export default function NoCartoonsScreen() {
    return (
        <div className="_NoCartoonsScreen _Screen">
            <PortfolioHeader 
                entry={PortfolioEntries.getProject("no-cartoons")}
            />
            <Section>
                <h2>Description</h2>
				<p>
					Hardt Insurance, a local insurance agency, approached me asking for my help putting together an advertisement to be shown at local movie theaters. They already had a theme and a rough script, and it was my job to collect the clips I needed on-site and put it all together.
				</p>
                <p>
                    The goal was to present a generalization of recognizable insurance competitors as cartoon characters with a comedic and aggressively cinematic tone, followed by a more general, neighborly appeal to viewers.
                </p>
                <ImageDisplay
                    images={[imports['stillframe-team']]}
                    showBorders={true}
                />
                <p>
                    The ad continues to run at movie theaters and made appearances on social media and local TV. 
                </p>
                <div style={{ padding: "35% 0 0 0", position: "relative", width: "100%", maxWidth: 720, margin: "56px auto 24px" }}>
                    <iframe 
                        src="https://player.vimeo.com/video/625536965?h=70b41efa17&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" 
                        frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" 
                        allowFullScreen
                        style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", maxWidth: 720, maxHeight: 400 }}
                        title="Hardt Insurance: No Cartoons!">
                    </iframe>
                </div>
                <script src="https://player.vimeo.com/api/player.js"></script>
            </Section>
        </div>
    )
}
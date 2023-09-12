import React from 'react';
import Section from 'components/Section';
import PortfolioItem from 'components/PortfolioItem';
import PortfolioEntries from 'config/PortfolioEntries';
import MetaTags from 'components/MetaTags';
import './style.scss';

/**
 * A screen that shows all other portfolio entries.
 */
export default function OtherProjectsScreen() {
    return (
        <div className="_OtherProjectsScreen _Screen">
            <MetaTags
                title="Other Projects"
                description="A catalog of some of my other side projects."
            />
            <Section>
                <h1>Other Projects</h1>
                <p>A catalog of some other fun side projects that I&apos;ve worked on over the years.</p>
            </Section>
            <Section>
                <div className="portfolio-container">
                    {
                        PortfolioEntries.getNonFeaturedProjects().map(entry => (
                            <PortfolioItem
                                key={entry.urlName}
                                entry={entry}
                                width={340}
                                height={300}
                            />
                        ))
                    }
                </div>
            </Section>
        </div>
    )
}
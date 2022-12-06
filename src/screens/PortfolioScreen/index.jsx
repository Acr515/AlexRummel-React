import React from 'react';
import Section from 'components/Section';
import SectionDivider from 'components/SectionDivider';
import PortfolioItem from 'components/PortfolioItem';
import PortfolioEntries from 'config/PortfolioEntries';
import './style.scss';
import MetaTags from 'components/MetaTags';

/**
 * The screen that shows all portfolio entries.
 */
export default function PortfolioScreen() {
    return (
        <div className="_PortfolioScreen _Screen">
            <MetaTags
                title="Portfolio"
                description="A catalog of some of my best projects over the years."
            />
            <Section>
                <h1>Portfolio</h1>
            </Section>
            <SectionDivider />
            <Section>
                <div className="portfolio-container">
                    {
                        PortfolioEntries.sortProjects().map(entry => (
                            <PortfolioItem
                                key={entry.urlName}
                                entry={entry}
                            />
                        ))
                    }
                </div>
            </Section>
        </div>
    )
}
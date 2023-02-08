import React from 'react';
import Section from 'components/Section';
import PortfolioItem from 'components/PortfolioItem';
import FeaturedPortfolioItem from 'components/FeaturedPortfolioItem';
import SectionDivider from 'components/SectionDivider';
import MetaTags from 'components/MetaTags';
import PortfolioEntries from 'config/PortfolioEntries';
import MyPicture from 'assets/images/alex-image.jpg'
import './style.scss';

/**
 * The index page of the website.
 */
export default function HomeScreen() {
    return (
        <div className="_HomeScreen _Screen">
            <MetaTags title="Portfolio" />
            <Section className="image-section">
                <div className="image-text">
					<h1>I&apos;m Alex!</h1>
					<p>
						I am currently a student at the University of Cincinnati majoring in Communication Design and minoring in Computer Science. 
                        { /*<span className="warning"> Please pardon the dust! This site is actively being developed and is still missing information in some places.</span>*/ }
					</p>
				</div>
				<div 
                    className="image-round"
                    style={{ backgroundImage: `url(${MyPicture})` }}
                ></div>
            </Section>
            <SectionDivider />
            <Section>
                <h2>Featured Work</h2>
                {
                    PortfolioEntries.getFeaturedProjects().map(entry => (<FeaturedPortfolioItem 
                        entry={entry}
                        key={entry.urlName}
                    />))
                }
            </Section>
            <Section>
                <div className="portfolio-container">
                    {
                        PortfolioEntries.sortProjects(PortfolioEntries.getNonFeaturedProjects()).map(entry => (
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
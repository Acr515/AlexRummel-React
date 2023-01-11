import React from 'react';
import Section from 'components/Section';
import SectionDivider from 'components/SectionDivider';
import MetaTags from 'components/MetaTags';
import FeaturedPortfolioItem from 'components/FeaturedPortfolioItem';
import PortfolioEntries from 'config/PortfolioEntries';
import MyPicture from 'assets/images/alex-image.jpg'
import './style.scss';

/**
 * The index page of the website.
 */
export default function HomeScreen() {
    return (
        <div className="_HomeScreen _Screen">
            <MetaTags />
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
            <SectionDivider />
            <Section>
                <h2>About Me</h2>
				<p>
					I grew up in South Haven, Michigan and graduated from South Haven High School. I was involved in band, FIRST Robotics, and tennis for all four of my years in high school. During my free-time, I enjoy playing tennis, developing my various programming projects, and spending time with friends and family.
				</p>
				<p>
					I&apos;m always looking for new opportunities! If you think I could be of assistance for your next project, feel free to get in contact with me through my <a href="https://www.linkedin.com/in/alex-rummel/">LinkedIn</a> or my <a href="mailto:rummelac@mail.uc.edu">email</a>.
				</p>
            </Section>
        </div>
    )
}
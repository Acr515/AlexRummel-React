import React, { useEffect, useState } from 'react';
import Section from 'components/Section';
import PortfolioItem from 'components/PortfolioItem';
import MetaTags from 'components/MetaTags';
import PortfolioEntries from 'config/PortfolioEntries';
import BackgroundVideo from 'assets/videos/home-animation.mp4'
import './style.scss';

/**
 * The index page of the website.
 */
export default function HomeScreen() {
    
    // Scrolling change functions
    const getDescriptionOpacity = (y) => y < 110 ? 1 : Math.max(0, 1 - ((y - 110) * .01));
    const getBgOffset = (y) => y * .25;

    // Scrolling change definitions
    const [descriptionOpacity, setDescriptionOpacity] = useState(getDescriptionOpacity(window.scrollY));
    const [bgOffset, setBgOffset] = useState(getBgOffset(window.scrollY));

    // Scrolling change listeners
    useEffect(() => {
        // Setters
        const onScroll = () => {
            setDescriptionOpacity(getDescriptionOpacity(window.scrollY));
            setBgOffset(getBgOffset(window.scrollY));
        }

        // Clean up code
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <div className="_HomeScreen _Screen">
            <MetaTags title="Portfolio" />
            <div 
                className="background-video"
                style={{ marginTop: bgOffset }}
            >
                <video className="video-element" loop autoPlay muted playsInline>
                    <source src={BackgroundVideo} type="video/mp4" />
                </video>
            </div>
            <Section className="heading-section" style={{ opacity: descriptionOpacity }}>
                <div className="name">
					<h1>Alex Rummel</h1>
				</div>
				<div className="description">
                    I&apos;m a designer and developer specializing in <span className="highlight">UI/UX design</span> and <span className="highlight">front-end software programming.</span>
                </div>
            </Section>
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
import React, { useCallback, useEffect, useRef } from 'react';
import Section from 'components/Section';
import PortfolioItem from 'components/PortfolioItem';
import MetaTags from 'components/MetaTags';
import PortfolioEntries from 'config/PortfolioEntries';
import BackgroundVideo from 'assets/videos/home-animation.mp4'
import useScrollEvents from 'hooks/useScrollEvents';
import './style.scss';

/**
 * The index page of the website.
 */
export default function HomeScreen() {
    const scroll = useScrollEvents();
    const headingRef = useRef(null);

    const setTopLevelTextOpacity = useCallback((_, scrollY) => {
        if (headingRef.current === null)  { return; }
        headingRef.current.style.opacity = scrollY < 110 ? 1 : Math.max(0, 1 - ((scrollY - 110) * .01));
    });

    useEffect(() => {
        scroll.on(setTopLevelTextOpacity);
        setTopLevelTextOpacity(null, window.scrollY);

        return () => {
            scroll.off(setTopLevelTextOpacity);
        };
    }, []);

    return (
        <div className="_HomeScreen _Screen">
            <MetaTags title="Portfolio" />
            <div className="background-video">
                <video className="video-element" loop autoPlay muted playsInline>
                    <source src={BackgroundVideo} type="video/mp4" />
                </video>
            </div>
            <Section outerClassName="heading-section-wrapper" className="heading-section" ref={headingRef}>
                <div className="name">
					<h1>Alex Rummel</h1>
				</div>
				<div className="description">
                    I&apos;m a designer and developer who specializes in <span className="highlight">UI/UX design</span> and <span className="highlight">front-end software programming.</span>
                </div>
            </Section>
            <Section>
                <div className="portfolio-container">
                    {
                        PortfolioEntries.getFeaturedProjects().map(entry => (
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
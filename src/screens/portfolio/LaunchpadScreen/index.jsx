import React, { useCallback, useEffect, useRef } from 'react';
import Section from 'components/Section';
import PortfolioHeader from 'components/PortfolioHeader';
import ImageDisplay from 'components/ImageDisplay';
import PortfolioEntries from 'config/PortfolioEntries';
import useScrollEvents from 'hooks/useScrollEvents';
import imports from 'projects/Launchpad/imports';
import SectionHeader from 'components/SectionHeader';
import './style.scss';

/**
 * The portfolio page for Launchpad.
 */
export default function LaunchpadScreen() {
    const rootElement = useRef(null);
    const scroll = useScrollEvents();

    const setScrollDistanceProperty = useCallback((_, scrollY) => {
        if (rootElement.current === null) { return; }
        rootElement.current.style.setProperty('--scroll-distance', scrollY);
    }, []);

    useEffect(() => {
        scroll.on(setScrollDistanceProperty);

        return () => {
            scroll.off(setScrollDistanceProperty);
        }
    }, []);

    const cssVariables = {
        '--fixed-pattern': `url(${imports['stars']})`,
    };

    return (
        <div className="_LaunchpadScreen _Screen" ref={rootElement} style={cssVariables}>
            <PortfolioHeader 
                entry={PortfolioEntries.getProject("launchpad")}
                wordmark={imports['wordmark']}
                scrollEvents={scroll}
            >
                <img className='star-background' src={imports['stars']} />
                <img className='star-background blend' src={imports['stars']} />
                <video className="video-element" loop autoPlay muted playsInline>
                    <source src={imports['bubble_animation']} type="video/webm" />
                </video>
            </PortfolioHeader>


            <div className='project-contents'>
                <div className='project-brief'>
                    <img src={imports['image_bubbles']} className='image-bubbles' />
                    <Section outerClassName='brief-contents' columns>
                        <div>
                            <SectionHeader label='Brief' />
                            <h3>Problem Statement</h3>
                            <p>
                                FIRST Robotics Competition (FRC) is the ultimate sport of the mind for high school students around the world. Teams are given just six weeks each year to prototype, build, and program a robot to play a game against other robots. Many rural or low-income teams struggle to field competitive robots due to a lack of software knowledge.
                            </p>
                        </div>
                        <div className='empty-column'/>
                        <div className='design-solution'>
                            <h3>Design Solution</h3>
                            <p>
                                <strong>Launchpad</strong> is a website that guides underserved high school robotics teams through the yearly software setup process. It serves as the confident mentor in the room for teams who don&apos;t have programming leaders, providing a structured and engaging approach for struggling teams.
                            </p>
                        </div>
                    </Section>
                </div>

                <Section outerClassName='section-heading' columns>
                    <div>
                        <SectionHeader label='Research' color='red' />
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                    </div>
                </Section>

                <Section className='screenshot-section'>
                    <ImageDisplay
                        images={[ imports['screen-welcome'], imports['screen-modules'] ]}
                        clickToExpand
                        gap={32}
                        className='screenshot-set'
                    />
                    <ImageDisplay
                        images={[ imports['screen-tasks'], imports['screen-tasks2'] ]}
                        clickToExpand
                        gap={32}
                        className='screenshot-set'
                    />
                    <ImageDisplay
                        images={[ imports['screen-steps'], imports['screen-steps2'] ]}
                        clickToExpand
                        gap={32}
                        className='screenshot-set'
                    />
                </Section>
            </div>
        </div>
    )
}
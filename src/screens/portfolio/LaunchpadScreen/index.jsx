import React from 'react';
import Section from 'components/Section';
import PortfolioHeader from 'components/PortfolioHeader';
import ImageDisplay from 'components/ImageDisplay';
import PortfolioEntries from 'config/PortfolioEntries';
import Header from 'projects/Launchpad/header.png';
import imports from 'projects/Launchpad/imports';
import './style.scss';

/**
 * The portfolio page for the Craigslist Redesign.
 */
export default function LaunchpadScreen() {
    return (
        <div className="_LaunchpadScreen _Screen">
            <PortfolioHeader 
                entry={PortfolioEntries.getProject("launchpad")}
                wideImage={Header}
                wordmark={imports['wordmark']}
            />

            <div className='project-contents'>
                <Section outerClassName='scope-section' className='scope-container'>
                    <img src={imports['project_scope_background']} className='scope-background' />
                    <div>
                        <h2>Problem Space</h2>
                        <p>
                            FIRST Robotics Competition (FRC) is the ultimate sport of the mind for high school students around the world. Teams are given just six weeks each year to prototype, build, and program a robot to play a game against other robots. Many rural or low-income teams struggle to field competitive robots due to a lack of software knowledge.
                        </p>
                    </div>
                    <div>
                        <h2>Design Solution</h2>
                        <p>
                            Launchpad is a website that guides underserved high school robotics teams through the yearly software setup process. It serves as the confident mentor in the room for teams who don&apos;t have programming leaders, providing a structured and engaging approach for struggling teams.
                        </p>
                    </div>
                </Section>

                <Section className='wip-section'>
                    <p className='wip-caption'>
                        I am still working on my project, so I don&apos;t have all of my process documentation here yet; when the prototype is released to the public, you&apos;ll be able to find it at the link below:
                    </p>
                    <p>
                        <a className='wip-link' href='https://launchpad.alexrummel.com' rel='noreferrer' target='_blank'>launchpad.alexrummel.com</a>
                    </p>
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
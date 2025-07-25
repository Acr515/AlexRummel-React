import React from 'react';
import Section from 'components/Section';
import PortfolioHeader from 'components/PortfolioHeader';
import ImageDisplay from 'components/ImageDisplay';
import PortfolioEntries from 'config/PortfolioEntries';
import ProjectIntro from 'components/ProjectIntro';

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
            />
            <ProjectIntro image={imports['icon-array']}>
                <p>
                    Launchpad is a website I designed and programmed for my senior capstone project for the University of Cincinnati. I chose my topic, FIRST robotics, based on the wealth of past experience I have in the program.
                </p>
            </ProjectIntro>

            <Section outerClassName='scope-section' className='scope-container'>
                <img src={imports['project_scope_background']} className='scope-background' />
                <div className='scope-content'>
                    <h2>Problem Space</h2>
                    <p>
                        FIRST Robotics Competition (FRC) is the ultimate sport of the mind for high school students around the world. Teams are given just six weeks each year to prototype, build, and program a robot to play a game against other robots. Many rural or low-income teams struggle to field competitive robots due to a lack of software knowledge.
                    </p>
                </div>
                <div className='scope-content'>
                    <h2>Design Solution</h2>
                    <p>
                        Launchpad is a website that guides underserved high school robotics teams through the yearly software setup process. It serves as the confident mentor in the room for teams who don&apos;t have programming leaders, providing a structured and engaging approach for struggling teams.
                    </p>
                </div>
            </Section>

            <Section className='wip-section'>
				<div>
					<p className='wip-caption'>
						I am still working on building out this webpage to illustrate my process. In the meantime, I encourage you to view the completed prototype, as well as my comprehensive process book, using the links here!
					</p>
				</div>
                <div className='wip-link-list'>
					<p>
						<a className='wip-link' href='https://launchpad.alexrummel.com' rel='noreferrer' target='_blank'>Live prototype</a>
					</p>
					<p>
						<a className='wip-link' href='https://alexrummel.com/assets/documents/Launchpad-ProcessBook.pdf' rel='noreferrer' target='_blank'>Process book (PDF)</a>
					</p>
					<p>
						<a className='wip-link' href='https://alexrummel.com/link/launchpad-behance/' rel='noreferrer' target='_blank'>Adobe Behance page</a>
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
    )
}
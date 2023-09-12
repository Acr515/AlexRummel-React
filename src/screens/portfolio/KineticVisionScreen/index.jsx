import React from 'react';
import Section from 'components/Section';
import PortfolioHeader from 'components/PortfolioHeader';
import ImageDisplay from 'components/ImageDisplay';
import PortfolioEntries from 'config/PortfolioEntries';
import './style.scss';

import Header from 'projects/KineticVision/header.png';
import imports from 'projects/KineticVision/imports';
import ProjectIntro from 'components/ProjectIntro';

/**
 * The portfolio page for my Kinetic Vision co-op experience.
 */
export default function KineticVisionScreen() {
    return (
        <div className="_KineticVisionScreen _Screen">
            <PortfolioHeader 
                entry={PortfolioEntries.getProject("kinetic-vision")}
                wideImage={Header}
            />
            <ProjectIntro image={imports['building']}>
                <p>
                    I was a member of the Mobile + AR Team, a sub-team of the Interactive department, at Kinetic Vision for two co-op terms. During my time, I designed and developed for numerous technologies that I had no prior experience with, allowing me to gain new technical skills and key industry knowledge.
                </p>
                <p>
                    Due to the nature of Kinetic Vision&apos;s work, the precise details of the projects I worked on and their clients are confidential.
                </p>
            </ProjectIntro>

            <Section className="no-bottom-padding">
                <h2>Technologies</h2>
                <ImageDisplay
                    images={[imports['technology-graphic']]}
                    className="desktop"
                    forceFullWidth
                />
                <ImageDisplay
                    images={[imports['technology-graphic-mobile']]}
                    className="mobile"
                    forceFullWidth
                />
            </Section>
            <Section className="no-top-padding">
                <h2>Leadership</h2>
                <p>
                    I was able to exercise a leadership role on a few different projects during my experience at Kinetic Vision.
                </p>
                <div className="lined-section">
                    <div className="line"></div>
                    <div className="text-area">
                        <p>
                            <span className="emphasis">I was the sole member of an internal R&D project that involved using an iOS device&apos;s camera to record data with the help of augmented reality.</span> This served as my introduction to Swift and native app development as it taught me several skills I used throughout the co-op.
                        </p>
                        <ul>
                            <li>Learned SwiftUI and RealityKit while creating a native AR app</li>
                            <li>Designed UI of prototype and novel technology to capture spatial data of an AR object</li>
                        </ul>
                        <div className="spacer"></div>
                        <p>
                            <span className="emphasis">I led development on a project for a client who sought a web solution for healthcare workers to learn about a medical device.</span> They provided a set of design specifications, and I implemented the solution using the React.js framework to create a web-app.
                        </p>
                        <ul>
                            <li>Communicated directly with the client about progress</li>
                            <li>Designed custom interaction animations that weren&apos;t described in specifications</li>
                        </ul>
                        <div className="spacer"></div>
                        <p>
                            <span className="emphasis">Similar to the previous project, I created a web-app for a client who sought a large set of education modules for doctors.</span> I used React.js, a modular webpack solution, and their set of basic design specifications for the implementation.
                        </p>
                        <ul>
                            <li>Communicated directly with the client during all phases of the project</li>
                            <li>Designed entire framework from the development phase to the production phase</li>
                            <li>Conducted code reviews of coworkers and client as they interfaced with my framework</li>
                            <li>Designed custom interaction animations that weren&apos;t described in specifications</li>
                        </ul>
                    </div>
                    <div className="line"></div>
                </div>
            </Section>
            <div className="blue-background-container">
                <div className="blue-background"></div>
                <Section>
                    <h2>Takeaways</h2>
                    <p>
                        I worked with a vast number of technologies that thoroughly challenged my ability to think critically and learn quickly. This experience greatly expanded my awareness of different user-facing devices that can be used to solve problems. I also had the opportunity to work directly with several clients and peers, which transformed my professional communication skills. My time at Kinetic Vision was invaluable to my career development!
                    </p>
                    <ImageDisplay
                        images={[imports['interns']]}
                        maxWidth={700}
                    />
                </Section>
            </div>
        </div>
    )
}
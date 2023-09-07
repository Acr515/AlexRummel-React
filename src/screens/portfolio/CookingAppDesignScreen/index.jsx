import React from 'react';
import PortfolioHeader from 'components/PortfolioHeader';
import PortfolioEntries from 'config/PortfolioEntries';

import Header from 'projects/CookingAppDesign/header.jpg';
import AppDemo from 'projects/CookingAppDesign/assets/app-demo.mp4';
import imports from 'projects/CookingAppDesign/imports';
import ProjectIntro from 'components/ProjectIntro';
import WidthContainer from 'components/WidthContainer';
import './style.scss';

/**
 * The portfolio page for the Cooking App Design.
 */
export default function CookingAppDesignScreen() {

    return (
        <div className="_CookingAppDesignScreen _Screen">
            <PortfolioHeader 
                entry={PortfolioEntries.getProject("cooking-app-design")}
                wideImage={Header}
            />
            <ProjectIntro image={imports['phone-kitchen']}>
                <p>
                    This design was the result of an interaction design class project where we were prompted to improve a facet of daily life using UI design. I selected cooking as I had identified it as a process that could use invigoration in my own life.
                </p>
            </ProjectIntro>

            <section className="planning">
                <WidthContainer width={1500} className="split-columns">
                    <div className="column">
                        <h2>Journey Map</h2>
                        <p style={{ maxWidth: 500 }}>
                            I created this journey map to better understand the cooking process and visualize where visual touchpoints occur, from finding a recipe to cleaning up after eating it.
                        </p>
                    </div>
                    <div className="column image padded" style={{ maxWidth: 700 }}>
                        <img src={imports['journey-map']} />
                    </div>
                </WidthContainer>
                <WidthContainer width={1500} className="split-columns">
                    <div className="column">
                        <h2>Situational Limitations</h2>
                        <p style={{ maxWidth: 500 }}>
                            While the journey map shows that the process of cooking can be fun, it also highlights an opportunity area where an app could step in to help. Somebody engaged in cooking has a predictable set of situational limitations that make it difficult to read and interface with traditional instructions. 
                        </p>
                    </div>
                    <div className="column image padded" style={{ maxWidth: 700 }}>
                        <img src={imports['situational-limitations']} />
                    </div>
                </WidthContainer>
                <WidthContainer width={1500}>
                    <h2>App Goals</h2>
                    <div className="image" style={{ maxWidth: 1000, marginTop: 32 }}>
                        <img src={imports['app-goals']} />
                    </div>
                </WidthContainer>
            </section>

            <WidthContainer width={1200} className="split-columns">
                <div className="column">
                    <h2>Benchmarking</h2>
                </div>
                <div className="column image" style={{ maxWidth: 800 }}>
                    <img src={imports['benchmarking']} />
                </div>
            </WidthContainer>
            <WidthContainer width={1200} className="split-columns">
                <div className="column">
                    <h2>Sketches</h2>
                    <p>
                        The final sketches focused on how users would explore recipes, including an Explore tab which allows users to see many recipes quickly. I chose a carousel format with large recipe components that take up the majority of the screen after feedback from peers.
                    </p>
                </div>
                <div className="column image" style={{ maxWidth: 800 }}>
                    <img src={imports['sketches']} />
                </div>
            </WidthContainer>
            <WidthContainer width={1200} className="split-columns">
                <div className="column">
                    <h2>Wireframes</h2>
                    <p>
                        Digitized, interactive versions of the sketches revealed that the <span className="bold">Cook Mode</span>, or the state of the app to be used in the kitchen for instructions, needed more iteration later on as users did not respond well to initializing it or using it.
                    </p>
                </div>
                <div className="column image" style={{ maxWidth: 800 }}>
                    <img src={imports['wireframes']} />
                </div>
            </WidthContainer>
            <WidthContainer width={1200}>
                <h2>Information Architecture</h2>
                <div className="column image" style={{ maxWidth: 900, margin: "64px auto" }}>
                    <img src={imports['information-architecture']} />
                </div>
            </WidthContainer>

            <section className="style-intro">
                <WidthContainer width={1500}>
                    <h2>Visual Style</h2>
                    <p>
                        blah blah blah
                    </p>
                </WidthContainer>
                <WidthContainer width={2200} className="split-columns">
                    <div className="column image">
                        <img src={imports['mood-board-1']} />
                    </div>
                    <div className="column image">
                        <img src={imports['mood-board-2']} />
                    </div>
                </WidthContainer>
                <WidthContainer width={1100}>
                    <div className="image">
                        <img src={imports['style-refinement']} />
                    </div>
                </WidthContainer>
            </section>

            <WidthContainer width={1200}>
                <h2>Cook Mode</h2>
                <p>
                    The kitchen instruction interface underwent the most change of any other screen as test users responded to initial designs:
                </p>
                <ul>
                    <li>One step would occupy an entire screen and slide left or right by <span className="bold">tapping anywhere in the left and right regions</span> of the screen to enable easy, imprecise interaction without use of fingers, i.e. with an elbow or knuckle tap. This needed some sort of onboarding process for users to understand it.</li>
                    <li>Directions can also be changed by <span className="bold">speaking commands aloud</span>, but this functionality needed to be more emphasized through the UI and the preceding onboarding.</li>
                    <li>Microphone functionality needed to be <span className="bold">easily toggleable</span> in Cook Mode without burying it in a separate settings screen.</li>
                </ul>
                <div className="image" style={{ maxWidth: 1000 }}>
                    <img src={imports['cook-mode-iteration']} />
                </div>
            </WidthContainer>

            <section>
                <div className="image">
                    <img src={imports['app-preview']} />
                </div>
            </section>

            <WidthContainer width={1200}>
                <video className="app-demo" muted controls>
                    <source src={AppDemo} type="video/mp4" />
                </video>
            </WidthContainer>
        </div>
    )
}
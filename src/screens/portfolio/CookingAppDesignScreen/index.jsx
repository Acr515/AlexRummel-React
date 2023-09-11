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
                            A journey map helped me understand the cooking process and visualize where digital touchpoints may occur, from finding a recipe to cleaning up after eating it.
                        </p>
                    </div>
                    <div className="column image" style={{ maxWidth: 700 }}>
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
                    <div className="column image" style={{ maxWidth: 700 }}>
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

            <WidthContainer width={1300} className="split-columns">
                <div className="column">
                    <h2>Benchmarking</h2>
                    <p className="small">
                        A critical benchmark was <span className="bold">Spotify</span>, whose Car Mode was a great example of handling a similar set of situational limitations as my concept would.
                    </p>
                </div>
                <div className="column image" style={{ maxWidth: 800 }}>
                    <img src={imports['benchmarking']} />
                </div>
            </WidthContainer>
            <WidthContainer width={1300} className="split-columns">
                <div className="column">
                    <h2>Sketches</h2>
                    <p className="small">
                        The final sketches focused on how users would explore recipes, including a <span className="bold">Discover tab</span> to inspire users. I chose a <span className="bold">carousel format</span> for this screen so that many recipes could be viewed in quick succession. Recipes would each take up the whole screen, and could be <span className="bold">swiped horizontally</span> to get a new recipe and <span className="bold">swiped vertically</span> to view more details on a recipe.
                    </p>
                </div>
                <div className="column image" style={{ maxWidth: 800 }}>
                    <img src={imports['sketches']} />
                </div>
            </WidthContainer>
            <WidthContainer width={1300} className="split-columns">
                <div className="column">
                    <h2>Wireframes</h2>
                    <p className="small">
                        Digitized, interactive versions of the sketches revealed that the <span className="bold">Cook Mode</span>, or the state of the app to be used in the kitchen for instructions, needed more iteration later on as users did not respond well to initializing it or using it.
                    </p>
                </div>
                <div className="column image" style={{ maxWidth: 800 }}>
                    <img src={imports['wireframes']} />
                </div>
            </WidthContainer>
            <WidthContainer width={1300}>
                <h2>Information Architecture</h2>
                <p>
                    All components of the app would lead to recipes and their resulting Cook Mode screens, since this would be the core functionality of the UI.
                </p>
                <div className="column image" style={{ maxWidth: 900, margin: "64px auto" }}>
                    <img src={imports['information-architecture']} />
                </div>
            </WidthContainer>

            <section className="style-intro">
                <WidthContainer width={1100}>
                    <h2>Visual Style</h2>
                    <p>Style directions 1 and 2 were developed to explore the warm, homemade side of cooking versus sharp, bold, more aggressive tones resembling cutlery and fresh produce. The final style combined features of each direction.</p>
                </WidthContainer>
                <WidthContainer width={1100}>
                    <div className="image">
                        <img src={imports['style-development']} />
                    </div>
                </WidthContainer>
            </section>

            <WidthContainer width={1500} className="split-columns bottom-margin">
                <div className="column">
                    <h2>Cook Mode</h2>
                    <p style={{ maxWidth: 500 }} className="small">
                        The kitchen instruction interface would show one step at a time, occupying an entire screen. Moving forward or backward would be accomplished by <span className="bold">tapping anywhere in the left or right regions</span> of the screen to enable easy, imprecise interaction <span className="bold">without use of fingers</span>, i.e. with an elbow or knuckle tap, or by using <span className="bold">your voice</span> to activate commands.
                    </p>
                </div>
                <div className="column image" style={{ maxWidth: 1200 }}>
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
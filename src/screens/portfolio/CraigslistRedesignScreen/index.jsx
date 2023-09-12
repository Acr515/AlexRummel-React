import React from 'react';
import Section from 'components/Section';
import WidthContainer from 'components/WidthContainer';
import PortfolioHeader from 'components/PortfolioHeader';
import ImageDisplay from 'components/ImageDisplay';
import PortfolioEntries from 'config/PortfolioEntries';
import ProjectIntro from 'components/ProjectIntro';

import Header from 'projects/CraigslistRedesign/header.png';
import Chevron from 'assets/images/icons/chevron.png';
import imports from 'projects/CraigslistRedesign/imports';
import './style.scss';

/**
 * The portfolio page for the Craigslist Redesign.
 */
export default function CraigslistRedesignScreen() {
    return (
        <div className="_CraigslistRedesignScreen _Screen">
            <PortfolioHeader 
                entry={PortfolioEntries.getProject("craigslist-redesign")}
                wideImage={Header}
            />
            <ProjectIntro image={imports['small-cover']}>
                <p>
                    As an interaction design project, I was assigned to study the Craigslist website&apos;s faults with user testing and redesign the UI, with a focus on the housing sections of the website. 
                </p>
            </ProjectIntro>

            <Section>
                <h2>User Testing</h2>
                <p>
					To assess Craigslist&apos;s problem areas, two users were asked to search for a home using the built-in map, then create a post. The findings revealed a series of pain points, which became the basis of the redesign.
				</p>
                <ImageDisplay
                    images={[imports['user-flow-a']]}
                    forceFullWidth
                />
                <ImageDisplay
                    images={[imports['user-flow-b']]}
                    forceFullWidth
                />
                <div className="redesign-grid">
                    <div className="row">
                        <div className="cell header">Pain Points</div>
                        <div className="arrow" />
                        <div className="cell header">Design Objectives</div>
                    </div>
                    <div className="row">
                        <div className="cell">The categories on the home page were difficult to parse</div>
                        <img className="arrow" src={Chevron} />
                        <div className="cell">De-clutter the home page and make it more approachable without overwhelming users with links</div>
                    </div>
                    <div className="row">
                        <div className="cell">The map feature was obtuse and frustrating to use, requiring several repetitive interactions</div>
                        <img className="arrow" src={Chevron} />
                        <div className="cell">Find a way to group properties/avoid clutter on the map and reduce the number of clicks it takes to begin viewing results</div>
                    </div>
                    <div className="row">
                        <div className="cell">The button used to post was not immediately obvious</div>
                        <img className="arrow" src={Chevron} />
                        <div className="cell">Raise the button within the visual hierarchy</div>
                    </div>
                    <div className="row">
                        <div className="cell">Lack of confidence in the process of creating a post</div>
                        <img className="arrow" src={Chevron} />
                        <div className="cell">Make user confident and aware of their status while creating the post, ensuring clarity of where they are in the process</div>
                    </div>
                </div>
            </Section>
            <Section>
                <h2>Concept Development</h2>
                <p>
                    I began by sketching possible flows while prioritizing the repair of the pain points that were found. I tried to implement image alternatives to Craigslist elements wherever possible to make up for Craigslist&apos;s current stiff, text-heavy communication method.
                </p>
            </Section>
            <WidthContainer width={1300}>
                <div className="wide-column-area">
                    <div className="column text-column left">
                        <p>
                            <span className="bold">Carousel for map entries</span> that updates as you click areas of the map while panning it, instead of zooming in the map on click
                        </p>
                        <p>
                            <span className="bold">Image substitutes</span> for home page categories
                        </p>
                        <p>
                            <span className="bold">More prominent link</span> to begin creating a post
                        </p>
                        <p>
                            <span className="bold">Simpler, more legible area</span> for filtering posts
                        </p>
                        <p>
                            <span className="bold">Progress indicator</span> during post creation
                        </p>
                    </div>
                    <div className="column image-column sketches">
                        <ImageDisplay
                            images={[imports['sketch-1'], imports['sketch-2']]}
                            className="sketch-list"
                        />
                        <ImageDisplay
                            images={[imports['sketch-3'], imports['sketch-4']]}
                            className="sketch-list"
                        />
                        <ImageDisplay
                            images={[imports['sketch-5'], imports['sketch-6']]}
                            className="sketch-list"
                        />
                    </div>
                </div>
            </WidthContainer>
            <WidthContainer width={1300}>
                <div className="wide-column-area">
                    <div className="column text-column right mobile">
                        <p>
                            This basic wireframe created in Adobe XD demonstrates some of the concepts illustrated in sketches. I tried to maintain a similar visual style to the current Craigslist website in order to make it comparable.
                        </p>
                    </div>
                    <div className="column image-column">
                        <ImageDisplay
                            images={[imports['wireframe']]}
                            forceFullWidth
                        />
                    </div>
                    <div className="column text-column right desktop">
                        <p>
                            This basic wireframe created in Adobe XD demonstrates some of the concepts illustrated in sketches. I tried to maintain a similar visual style to the current Craigslist website in order to make it comparable.
                        </p>
                    </div>
                </div>
            </WidthContainer>

            <div className="ui-style">
                <Section>
                    <div className="wide-column-area">
                        <div className="column text-column narrow">
                            <h2>UI Style</h2>
                            <p>
                                The basis of the new visual language would be to make the site feel more warm and inviting. I employed the use of a more vibrant base color, a rounder typeface, and bouncy interaction animations to do so.
                            </p>
                        </div>
                        <div className="column image-column">
                            <ImageDisplay
                                images={[imports['style-guide']]}
                                forceFullWidth
                                maxWidth={700}
                            />
                            <ImageDisplay
                                images={[imports['button-animations']]}
                                maxWidth={400}
                            />
                        </div>
                    </div>
                </Section>
            </div>

            <div className="result-background">
                <Section>
                    <ImageDisplay
                        images={[imports['home-page-large']]}
                        forceFullWidth
                        style={{ marginTop: 32, marginBottom: 0 }}
                    />
                    <ImageDisplay
                        images={[imports['listing-gallery'], imports['listing-details']]}
                        gap={32}
                        style={{ marginTop: 32, marginBottom: 0 }}
                    />
                    <ImageDisplay
                        images={[imports['listing-map']]}
                        forceFullWidth
                        style={{ marginTop: 32, marginBottom: 0 }}
                    />
                    <ImageDisplay
                        images={[imports['create-landing'], imports['create-details']]}
                        gap={32}
                        style={{ marginTop: 32, marginBottom: 0 }}
                    />
                    <ImageDisplay
                        images={[imports['create-images'], imports['create-draft']]}
                        gap={32}
                        style={{ marginTop: 32, marginBottom: 0 }}
                    />
                </Section>
            </div>
        </div>
    )
}
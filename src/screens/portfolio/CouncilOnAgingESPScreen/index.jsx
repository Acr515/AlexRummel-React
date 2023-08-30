import React from 'react';
import PortfolioHeader from 'components/PortfolioHeader';
import PortfolioEntries from 'config/PortfolioEntries';

import Header from 'projects/CouncilOnAgingESP/header.png';
import imports from 'projects/CouncilOnAgingESP/imports';
import ProjectIntro from 'components/ProjectIntro';
import WidthContainer from 'components/WidthContainer';
import './style.scss';

/**
 * The portfolio page for the Blueberry Festival App.
 */
export default function CouncilOnAgingESPScreen() {
    return (
        <div className="_CouncilOnAgingESPScreen _Screen">
            <PortfolioHeader 
                entry={PortfolioEntries.getProject("council-on-aging-esp")}
                wideImage={Header}
            />
            <ProjectIntro image={imports['coa-logo']} maxWidth={400}>
                <p>
                    Council on Aging (COA) assists older adults in their homes through a range of different programs. Their Elderly Services Program (ESP) provides clients with in-home care through their network of third-party providers, empowering them to live alone in their homes.
                </p>
                <p>
                    ESP&apos;s system for billing clients is over 25 years old and confusing for both case managers and clients. COA approached the Live Well Collaborative to research the problem and overhaul the existing billing system.
                </p>
            </ProjectIntro>

            <section className="research-phase phase">
                <WidthContainer width={1300}>
                    <div>
                        <h2>Research Phase</h2>
                        <h3>Stakeholders</h3>
                    </div>
                    <div className="image" style={{ maxWidth: 1000, marginTop: 64 }}>
                        <img src={imports['stakeholders']} />
                    </div>
                </WidthContainer>
            </section>

            <WidthContainer>
                <h3>Current Billing Process</h3>
                <p>
                    In the current ESP system, a client’s income, assets, and medical expenses are put into a “black box” that calculates an adjusted monthly income. This income is placed onto a sliding scale in order to determine the percentage of their copay that they’ll need to pay monthly. Neither COA staff nor clients fully understand why the black box outputs certain percentages, leading to widespread confusion and an inability to catch mistakes when they arise.
                </p>
                <div className="image" style={{ maxWidth: 800, marginTop: 64 }}>
                    <img src={imports['sliding-scale']} />
                </div>
                <div className="two-columns" style={{ marginTop: 96 }}>
                    <div className="column">
                        <h3>Primary Research</h3>
                        <p>
                            We interviewed 14 stakeholders consisting of clients and program administrators inside and outside of COA.
                        </p>
                    </div>
                    <div className="column">
                        <h3>Secondary Research</h3>
                        <p>
                            A critical focus of secondary research was on alternative payment models (APMs). I led this research and uncovered a series of different components that make up an APM.
                        </p>
                        <div className="image" style={{ maxWidth: 800, marginTop: 64 }}>
                            <img src={imports['apm-components']} />
                        </div>
                    </div>
                </div>
            </WidthContainer>

            <section className="ideation-phase phase">
                <WidthContainer width={1300}>
                    <h2>Ideation Phase</h2>
                    <p>
                        After presenting our research findings to COA leadership, I broke their responses down into what would become the basis of our new payment system: a tiered model where people in different income groups are billed to a different alternative payment model. Soon after, I designed a worksheet activity to administer with the COA team that would help us better understand what each tier of this system might look like.
                    </p>
                    <div className="two-columns">
                        <div className="column image">
                            <img src={imports['tier-worksheet']} />
                        </div>
                        <div className="column image">
                            <img src={imports['coa-team-cocreation']} />
                        </div>
                    </div>
                </WidthContainer>
            </section>

            <WidthContainer>
                <h3>3-Tiered Model</h3>
                <p>
                    The culmination of all of our findings became the first 3-tiered payment model, which also provided us with a foundation for later design and testing efforts. The fixed rate per service model, or capitated copay, was the most popular with the COA team, making it a crucial inclusion to the new model.
                </p>
                <div className="image" style={{ maxWidth: 800, marginTop: 64 }}>
                    <img src={imports['tier-introduction']} />
                </div>
            </WidthContainer>
            <WidthContainer>
                <h3>Graphic Representation</h3>
                <p>
                    In order to compare payment models with each other, I created a graphic that aims to visualize how clients of many different income levels and levels of care will be billed. These graphics would help both our team and the COA team understand our proposal for the duration of the project.
                </p>
                <div className="two-columns sticky-model">
                    <div className="column image">
                        <div className="image">
                            <img src={imports['colormodel-sliding-scale']} />
                        </div>
                        <p className="long-text">
                            After later deliberations, the team realized the importantance of incorporating level of care into our payment model since, as visually described by the graphic, the color for cost does not change from left to right.
                        </p>
                    </div>
                    <div className="column">
                        <div className="image sticky-image">
                            <img src={imports['colormodel-3-tiers']} />
                        </div>
                    </div>
                </div>
            </WidthContainer>

            <section className="refinement-phase phase">
                <WidthContainer width={1300}>
                    <div>
                        <h2>Refinement Phase</h2>
                        <p>
                            Equity problems and reassessment
                        </p>
                    </div>
                </WidthContainer>
            </section>
        </div>
    )
}
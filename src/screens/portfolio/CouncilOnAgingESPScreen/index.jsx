import React, { useEffect, useRef, useState } from 'react';
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

    // Utility to get y-position of a ref
    const getY = (ref) => typeof ref !== 'undefined' && ref.current !== 'undefined' ? ref.current.getBoundingClientRect().y : 10000;
    
    // Refs for images to be turned on/off
    const [colorGraphicVisible, setColorGraphicVisible] = useState(getY(refColorGraphic) < 500);
    const [pointGraphicVisible, setPointGraphicVisible] = useState(0);
    const refColorGraphic = useRef();

    // Checking screen position
    useEffect(() => {
        // Setters
        const checkGraphicVisible = () => {
            // Set states
            setColorGraphicVisible(getY(refColorGraphic) < 500);
        }

        // Clean up code
        window.removeEventListener('scroll', checkGraphicVisible);
        window.removeEventListener('resize', checkGraphicVisible);
        window.addEventListener('scroll', checkGraphicVisible, { passive: true });
        window.addEventListener('resize', checkGraphicVisible, { passive: true });
        return () => { window.removeEventListener('scroll', checkGraphicVisible); window.removeEventListener('resize', checkGraphicVisible); }
    }, []);

    // Run "animation" on graphic for points
    useEffect(() => {
        setTimeout(() => {
            setPointGraphicVisible(!pointGraphicVisible);
        }, 2500);
    }, [pointGraphicVisible]);

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
                    ESP&apos;s system for billing clients is over 25 years old and confusing for both case managers and clients. COA approached the Live Well Collaborative, the company I interned at, to research the problem and overhaul the existing billing system.
                </p>
                <ul className="team">
                    <li style={{ fontFamily: "input-sans", marginBottom: 8, fontWeight: 500 }}>Live Well Collaborative Team</li>
                    <li><span className="bold">Shelby Schaffer</span> - Faculty Lead</li>
                    <li><span className="bold">Rui Pang</span> - Design Research Fellow</li>
                    <li><span className="bold">Grace Kays</span> - Design Research Co-op</li>
                    <li><span className="bold">Alex Rummel</span> - Design Research Co-op</li>
                </ul>
            </ProjectIntro>

            <section className="research-phase phase">
                <WidthContainer width={1300}>
                    <div>
                        <h2>Research Phase</h2>
                        <p>
                            The team first conducted comprehensive research on COA and the ESP program to better understand how it functions, in addition to researching adjacent organizations in similar industries.
                        </p>
                        <h3>Key Stakeholders</h3>
                    </div>
                    <div className="image" style={{ maxWidth: 1000, marginTop: 64 }}>
                        <img src={imports['stakeholders']} />
                    </div>
                </WidthContainer>
            </section>

            <WidthContainer>
                <h3>Current Billing Process</h3>
                <p>
                    In the current ESP system, a client&apos;s income, assets, and medical expenses are put into a “black box” that calculates an adjusted monthly income. This income is placed onto a sliding scale in order to determine the percentage of their copay that they’ll need to pay monthly. Neither COA staff nor clients fully understand why the black box outputs certain percentages, leading to widespread confusion and an inability to catch mistakes when they arise.
                </p>
                <div className="image" style={{ maxWidth: 800, marginTop: 64 }}>
                    <img src={imports['sliding-scale']} />
                </div>
                <div className="two-columns" style={{ marginTop: 96 }}>
                    <div className="column">
                        <h3>Primary Research</h3>
                        <p>
                            We interviewed 14 stakeholders consisting of clients and program administrators inside and outside of COA. We coded and synthesized the responses to generate insights towards our solution.
                        </p>
                    </div>
                    <div className="column">
                        <h3>Secondary Research</h3>
                        <p>
                            A critical focus of secondary research was on alternative payment models (APMs) in other industries. I led this research and uncovered a series of different components that make up APMs.
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
                        After presenting our research findings to COA leadership, I broke their responses down into what would become the basis of our new payment system: <span className="bold">a tiered model</span> where people in different income groups are billed to a different alternative payment model. Soon after, I designed a worksheet activity for the COA team to complete that would help us better understand each tier of this system. We split them into two groups to prevent groupthink and later compared and synthesized their responses.
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
                    The culmination of all of our findings became the first 3-tiered payment model, which also provided us with a foundation for later design and testing efforts. The fixed rate per service model, or capitated copay, was the most popular with the COA team, making it a crucial inclusion to the new model. Clients in tier I have a low enough monthly income to make it unethical to bill them for services.
                </p>
                <div className="image" style={{ maxWidth: 900, marginTop: 64 }}>
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
                        <p className="long-text" ref={refColorGraphic}>
                            After later deliberations, the team realized the importantance of incorporating level of care into our payment model. The only way to adjust price for level of care would be to <span className="bold">standardize level of care</span>, as ESP&apos;s services are each unique in their units and distributions.
                        </p>
                    </div>
                    <div className="column">
                        <div className="image sticky-image">
                            <img src={imports['colormodel-3-tiers']} style={{ opacity: !colorGraphicVisible ? 1 : 0 }}/>
                            <img src={imports['colormodel-3-tiers-problem']} style={{ opacity: colorGraphicVisible ? 1 : 0 }}/>
                        </div>
                    </div>
                </div>
            </WidthContainer>
            <WidthContainer>
                <h3>Standardizing Level of Care</h3>
                <p>
                    Our solution to standardizing level of care was a credit system, or <span className="bold">points</span>, which could be used to measure the true amount of service that a client was using. Clients would receive points based on which services they wanted, then spend those points however they saw fit, allowing them room for variance month-to-month without their bill changing. Once they reached the point limit, they would be charged at higher fixed rates. This limit would later become known as the <span className="bold">premium sub-tier</span>, the former being called the <span className="bold">economy sub-tier</span>.
                </p>
                <div className="image transitioning" style={{ maxWidth: 600, marginTop: 64 }}>
                    <img src={imports['pointmodel-economy']} style={{ opacity: !pointGraphicVisible ? 1 : 0 }}/>
                    <img src={imports['pointmodel-premium']} style={{ opacity: pointGraphicVisible ? 1 : 0 }}/>
                </div>
            </WidthContainer>

            <section className="refinement-phase phase">
                <WidthContainer width={1300}>
                    <h2>Refinement Phase</h2>
                    <p>
                        Equity problems and reassessment
                    </p>
                </WidthContainer>
            </section>

            <WidthContainer>
                <h3>Fixed Rate Formulas</h3>
                <div className="two-columns" style={{ gap: 32 }}>
                    <div className="column">
                        <p>
                            To help us generate real bills and see how the new payment model would work in practice, I created a set of formulas that would both generate point costs for each service and calculate the fixed rate for every ESP service at every tier and sub-tier.
                        </p>
                        <p>
                            The formulas sought to accomplish several different goals:
                        </p>
                        <ul>
                            <li><span className="bold">Transparently calculate fees.</span> The current black box offers no under-the-hood explanation for copay percentages, but these formulas should clarify the path from input to output.</li>
                            <li><span className="bold">Stay flexible to changes.</span> The formulas should be modular and quick to adjust to new information, should we receive any during the final phase of the project.</li>
                            <li><span className="bold">Considerate of many factors.</span> Even though fixed rates will need to accommodate diverse pools of clients, they also must remain reasonable for those earning many different dollar amounts with wide ranging levels of care.</li>
                        </ul>
                    </div>
                    <div className="column image">
                        <img src={imports['fixed-rate-formula']} />
                    </div>
                </div>
            </WidthContainer>

            <WidthContainer>
                <h3>Payment Model Dashboard</h3>
                <p>
                    With formulas for bill calculation complete, I created a bill generator from the ground up in Google Sheets that takes in real client information like adjusted monthly income, family size, and service usage, then outputs what tier they would be in and what their new bill would be. From there, a connected dashboard aggregates the data and returns insights that allowed us to judge the equitability and effectiveness of the system.
                </p>
            </WidthContainer>
            <WidthContainer width={1600}>
                <div className="image">
                    <img src={imports['dashboard-shots']} />
                </div>
            </WidthContainer>
        </div>
    )
}
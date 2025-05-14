import React, { useEffect, useRef, useState } from 'react';
import PortfolioHeader from 'components/PortfolioHeader';
import PortfolioEntries from 'config/PortfolioEntries';

import imports from 'projects/CouncilOnAgingESP/imports';
import WidthContainer from 'components/WidthContainer';
import './style.scss';

/**
 * The portfolio page for the Blueberry Festival App.
 */
export default function CouncilOnAgingESPScreen() {

    // Utility to get y-position of a ref
    const getY = (ref) => typeof ref !== 'undefined' && ref.current !== 'undefined' ? ref.current.getBoundingClientRect().y : 10000;
    
    // Refs for images to be turned on/off
    const [colorGraphic1Visible, setColorGraphic1Visible] = useState(getY(refColorGraphic1) < 500);
    const [colorGraphic2Visible, setColorGraphic2Visible] = useState(getY(refColorGraphic2) < 500);
    const [pointGraphicVisible, setPointGraphicVisible] = useState(0);
    const refColorGraphic1 = useRef();
    const refColorGraphic2 = useRef();

    // Checking screen position
    useEffect(() => {
        // Setters
        const checkGraphicVisible = () => {
            // Set states
            setColorGraphic1Visible(getY(refColorGraphic1) < 500);
            setColorGraphic2Visible(getY(refColorGraphic2) < 500);
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
                wideImage={imports['apm-opportunity-setup']}
            />

            <div className='project-contents'>
                <section className="research-phase phase">
                    <WidthContainer width={1300}>
                        <div>
                            <h2>Research Phase</h2>
                            <p>
                                The team first conducted comprehensive research on COA and the ESP program to better understand how it functions, focusing on their standard operating procedures for billing clients. This information is confidential to COA.
                            </p>
                            <p>
                                The bulk of the secondary research I conducted focused on understanding alternative payment models (APMs) in other industries, as well as understanding how other non-profit groups effectively solicit donations through compelling graphics and narratives. Articles and case studies were compiled and coded into results to inform our intuitions.
                            </p>
                        </div>
                        <div className="image" style={{ marginTop: 64, marginBottom: 16 }}>
                            <img src={imports['research']} />
                        </div>
                    </WidthContainer>
                </section>

                <WidthContainer>
                    <div className="two-columns">
                        <div className="column">
                            <h3>Primary Research</h3>
                            <p>
                                We interviewed 14 stakeholders consisting of clients and program administrators inside and outside of COA. We coded and synthesized the responses to generate insights towards our solution.
                            </p>
                            <div className="image" style={{ maxWidth: 500, marginTop: 64 }}>
                                <img src={imports['primary-research']} />
                            </div>
                        </div>
                        <div className="column">
                            <h3>Secondary Research</h3>
                            <p>
                                My research uncovered a series of different components that make up any APM. The existing ESP payment model related most closely to the <span className="bold">sliding scale</span>.
                            </p>
                            <div className="image" style={{ maxWidth: 500, marginTop: 64 }}>
                                <img src={imports['apm-components']} />
                            </div>
                        </div>
                    </div>
                </WidthContainer>

                <WidthContainer>
                    <h3>APM Co-Creation Activity</h3>
                    <p>
                        To see how we might apply the APM components to a new payment model, I designed APM cards for the COA team to mix-and-match and discover new payment models, giving us information about how APMs could be used as well as which ones the team saw the most value in. The <span className="bold">capitated copay</span>, or fixed rate, was the most popular APM component by far, as the COA team saw great value in billing clients the exact same amounts every month.
                    </p>
                    <div className="image" style={{ maxWidth: 900, marginTop: 64 }}>
                        <img src={imports['apm-activity']} />
                    </div>
                </WidthContainer>

                <section className="ideation-phase phase">
                    <WidthContainer width={1300}>
                        <h2>Ideation Phase</h2>
                        <p>
                            The COA team provided unique responses to the prior activity that made us realize we needed to implement different APM components to those in different income brackets. This prompted us to design a <span className="bold">tiered model</span> that billed people differently based on income brackets. I designed a worksheet activity for the COA team to complete that would help us better understand each tier of this system. We split them into two groups to prevent groupthink and later compared and synthesized their responses.
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
                        The culmination of all of our findings became the first 3-tiered payment model, which also provided us with a foundation for later design and testing efforts. The fixed rate per service model, or capitated copay, was the most popular with the COA team, making it a crucial inclusion to the new model. Clients in tier 1 have a low enough monthly income making it unethical to bill them for services.
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
                    <div className="two-columns sticky-model desktop">
                        <div className="column image">
                            <div className="image">
                                <img src={imports['colormodel-sliding-scale']} />
                            </div>
                            <p className="long-text" ref={refColorGraphic1}>
                                After later deliberations, the team realized the importantance of incorporating level of care into our payment model. The only way to adjust price for level of care would be to <span className="bold">standardize level of care</span>, as ESP&apos;s services are each unique in their units and distributions.
                            </p>
                        </div>
                        <div className="column">
                            <div className="image sticky-image">
                                <img src={imports['colormodel-3-tiers']} style={{ opacity: !colorGraphic1Visible ? 1 : 0 }} className="mobile-visible"/>
                                <img src={imports['colormodel-3-tiers-problem']} style={{ opacity: colorGraphic1Visible ? 1 : 0 }} className="desktop" />
                            </div>
                        </div>
                    </div>
                    <div className="two-columns mobile">
                        <div className="image">
                            <img src={imports['colormodel-sliding-scale']} />
                        </div>
                        <div className="image">
                            <img src={imports['colormodel-3-tiers']} />
                        </div>
                    </div>
                    <p className="mobile">
                        After later deliberations, the team realized the importantance of incorporating level of care into our payment model. The only way to adjust price for level of care would be to <span className="bold">standardize level of care</span>, as ESP&apos;s services are each unique in their units and distributions.
                    </p>
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
                    <p>
                        This new concept necessitated an update to our payment model graphics, as shown below. The new economy and premium sub-tiers create distinct color/cost differences going left-to-right in the tiers with copays.
                    </p>
                    <div className="image" style={{ maxWidth: 700, marginTop: 64 }}>
                        <img src={imports['colormodel-3-tiers-subtiers']} />
                    </div>
                </WidthContainer>

                <section className="refinement-phase phase">
                    <WidthContainer width={1300}>
                        <h2>Refinement Phase</h2>
                        <div className="two-columns sticky-model" style={{ maxWidth: "unset" }}>
                            <div className="column">                  
                                <p>
                                    Shortly into the refinement phase, we identified a critical problem with our payment model as it stood.
                                </p>
                                <ul>
                                    <li>Tier 2 would encompass roughly 40% of all ESP clients. It would be difficult to find fixed rates that would both generate enough revenue from higher earners and not burden lower earners.</li>
                                    <li>Clients with high need and low income in tier 2 (indicated in the graphic) would be in danger of spending too much for services.</li>
                                    <li>We concluded that tier 2 was built to serve too many people.</li>
                                </ul>
                                <div className="long-text">
                                    <p ref={refColorGraphic2}>
                                        The best solution we found was to split the population of tier 2 into yet another tier, pushing the old tier 3 population upward into what would become known as tier 4.
                                    </p>
                                    <p>
                                        Because our changes were becoming increasingly more detailed, the team did not feel comfortable making conjectures about the merits of our models without putting real numbers behind it. During this phase, I spent a lot of time creating formulas and mock bills to assess our model.
                                    </p>
                                </div>
                            </div>
                            <div className="column desktop">
                                <div className="image sticky-image padded-images" style={{ maxWidth: 480, backgroundColor: '#000' }}>
                                    <img src={imports['colormodel-3-tiers-subtiers-problem']} style={{ opacity: !colorGraphic2Visible ? 1 : 0 }} />
                                    <img src={imports['colormodel-4-tiers-subtiers']} style={{ opacity: colorGraphic2Visible ? 1 : 0 }} />
                                </div>
                            </div>
                            <div className="column mobile two-columns" style={{ backgroundColor: '#000', boxSizing: 'border-box', padding: 16 }}>
                                <div className="image">
                                    <img src={imports['colormodel-3-tiers-subtiers-problem']} />
                                </div>
                                <div className="image">
                                    <img src={imports['colormodel-4-tiers-subtiers']} />
                                </div>
                            </div>
                        </div>
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
                <WidthContainer>
                    <h3>Findings</h3>
                    <p>
                        In order to assess the models we had created so far, we put our <span className="bold">3 tier and sub-tier model</span> into the dashboard and tested whether or not our <span className="bold">4 tier and sub-tier model</span> performed more efficiently and equitably. We used 17 real ESP clients&apos; data in the system distributed accurately along the real shares of income groups in ESP currently.
                    </p>
                    <p>
                        The data concluded that having 4 tiers were more capable of generating revenue for ESP without burdening clients any more than before, as evidenced by the percentages we found.
                    </p>
                    <div className="image" style={{ maxWidth: 800, marginTop: 64 }}>
                        <img src={imports['dashboard-findings']} />
                    </div>
                </WidthContainer>
                <WidthContainer>
                    <h3>Conclusion</h3>
                    <p>
                        A new team took this project over at the end of my co-op, where they began refining the specifics of our system and how to implement it. I grew immensely as a designer and a researcher during the course of the project as I built upon many different skills and developed new ones:
                    </p>
                    <ul>
                        <li>I developed a much stronger ability to understand user&apos;s needs and how to balance them with business needs</li>
                        <li>I have an understanding of how to conduct real design research, as this was something I had not done before</li>
                        <li>I learned how to think abductively about a project and shed the need to know how a project&apos;s deliverables will look long before its conclusion</li>
                    </ul>
                </WidthContainer>
            </div>
        </div>
    )
}
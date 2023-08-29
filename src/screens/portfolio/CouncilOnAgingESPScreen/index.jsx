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
            <ProjectIntro image={imports['coa-logo']}>
                <p>
                    Council on Aging (COA) assists older adults in their homes through a range of different programs. Their Elderly Services Program (ESP) provides clients with in-home care through their network of third-party providers, empowering them to live alone in their homes.
                </p>
                <p>
                    ESP&apos;s system for billing clients is over 25 years old and confusing for both case managers and clients. COA approached the Live Well Collaborative to research the problem and overhaul the existing billing system.
                </p>
            </ProjectIntro>

            <section className="research-phase phase">
                <WidthContainer width={1400}>
                    <div>
                        <h2>Research Phase</h2>
                        <h3>Stakeholders</h3>
                        <p>
                            Something about stakeholders
                        </p>
                    </div>
                    <div className="image" style={{ maxWidth: 500 }}>
                        <img src={imports['sliding-scale']} />
                    </div>
                </WidthContainer>
            </section>

            <WidthContainer>
                <h2>Current Billing Process</h2>
                <p>
                    In the current ESP system, a client’s income, assets, and medical expenses are put into a “black box” that calculates an adjusted monthly income. This income is placed onto a sliding scale in order to determine the percentage of their copay that they’ll need to pay monthly. Neither COA staff nor clients fully understand why the black box outputs certain percentages, leading to widespread confusion and an inability to catch mistakes when they arise.
                </p>
                <div className="image" style={{ maxWidth: 800, marginTop: 64 }}>
                    <img src={imports['sliding-scale']} />
                </div>
            </WidthContainer>

            <section className="ideation-phase phase">
                <WidthContainer width={1400}>
                    <div>
                        <h2>Ideation Phase</h2>
                        <p>
                            Co-creation session
                        </p>
                    </div>
                </WidthContainer>
            </section>

            <WidthContainer>
                <h2>3-Tiered Model</h2>
                <p>
                    Tiers
                </p>
                <div className="image" style={{ maxWidth: 800, marginTop: 64 }}>
                    <img src={imports['tier-introduction']} />
                </div>
            </WidthContainer>

            <section className="refinement-phase phase">
                <WidthContainer width={1400}>
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
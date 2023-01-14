import React from 'react';
import Section from 'components/Section';
import SectionDivider from 'components/SectionDivider';
import PortfolioHeader from 'components/PortfolioHeader';
import ImageDisplay from 'components/ImageDisplay';
import PortfolioEntries from 'config/PortfolioEntries';

import imports from 'projects/FRCScouter/imports';

/**
 * The portfolio page for the FRC scouting program.
 */
export default function FRCScouterScreen() {
    return (
        <div className="_FRCScouterScreen _Screen">
            <PortfolioHeader 
                entry={PortfolioEntries.getProject("frc-scouter")}
            />
            <Section>
                <h2>Introduction</h2>
				<p>
                    I built a public web-app to be used to record data on robots at FIRST Robotics Competition events. The app is branded as FortyEight, named after the first digits of my former team&apos;s team number, but it is available for anyone to view and download. The app is also open-source and viewable by anyone through GitHub.
				</p>
                <p>
                    Each FRC match joins 3 schools on an alliance against 3 other schools. Roughly 12 qualification matches are played by each school at a 40+ school event with randomly generated teammates and opponents for each match. Qualification matches are followed by elimination rounds, where the top 8 teams pick 2 robots each from the remaining field to compete with for the remainder of the tournament.
                </p>
                <p>
                    Some of the major constraints and considerations of designing the scouting application were:
                </p>
                <ul>
                    <li>Due to the volume of people at an event using wi-fi or cellular connections, the solution could not require internet to share and compile data.</li>
                    <li>The solution needed to be functional on basic devices such as the Chromebooks that each high schooler is provided.</li>
                    <li>Nearly all students, even those with little to no prior experience in the program, are asked to help with scouting, so the interface needed to be easy to understand.</li>
                    <li>The students operating the robot on the field would need an easy and quick way to parse out and apply findings from the solution in a fast-paced, stressful environment.</li>
                </ul>
            </Section>
            <SectionDivider />
            <Section>
                <h2>Description</h2>
				<p>
					I used React.js to create a web-app that could be built onto a flash drive and launched out of the user&apos;s browser. Scouts fill out a form while watching a robot play a match, documenting the ways they score and how well they play. After they accumulate enough data, they can export it to a .json file and use their flash drive to share the data with a lead scout, who is in charge of organizing the scouting effort.
				</p>
                <ImageDisplay
                    images={[imports['team-list'], imports['create-data']]}
                    caption="The list of teams with data loaded into the system and the form that a scout completes to record data. As the user collects more data, their team list will grow."
                    captionMargin={32}
                    showBorders
                    clickToExpand
                />
                <p>
                    Once the data reaches the lead scout, they have the ability to break down teams on a match-by-match basis and quickly retrieve an overview of their abilities. The program periodically calculates every team&apos;s RPI (Ramageddon Power Index, named after my former team&apos;s name), a calculation of the rough number of points a team contributes per game that can quantify the strength of a robot.
                </p>
                <ImageDisplay
                    images={[imports['team-data-1'], imports['team-data-2']]}
                    caption="The summary of a team. Lead scouts can glean general information at the top of the page, or go match-by-match to analyze their performance."
                    captionMargin={32}
                    showBorders
                    clickToExpand
                />
                <p>
                    The lead scout can also run simulations of any hypothetical or upcoming match-up of 3 versus 3 robots. Using the data loaded into the system, the program simulates the match-up 1,000 times using a biased randomization algorithm to determine each robot&apos;s contribution and how well each alliance performed. It also generates a list of insights when it notices certain trends in the simulations such as, for example, if the underdog alliance wins a higher percentage of matches after reaching certain benchmarks or outscoring their opponent in certain game facets.
                </p>
                <ImageDisplay
                    images={[imports['simulator-config']]}
                    caption="The configuration screen of the simulator. Simulations take no more than five seconds on average hardware."
                    captionMargin={32}
                    showBorders
                    clickToExpand
                />
                <ImageDisplay
                    images={[imports['simulator-results-1'], imports['simulator-results-2']]}
                    caption="The simulation output. In addition to the win-rates of alliances and any insights, the simulator calculates how often each alliance accomplishes certain benchmarks that would earn them Ranking Points (RP) during qualification matches."
                    captionMargin={32}
                    showBorders
                    clickToExpand
                />
            </Section>
        </div>
    )
}
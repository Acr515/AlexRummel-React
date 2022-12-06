import React from 'react';
import Section from 'components/Section';
import SectionDivider from 'components/SectionDivider';
import PortfolioHeader from 'components/PortfolioHeader';
import ImageDisplay from 'components/ImageDisplay';
import PortfolioEntries from 'config/PortfolioEntries';

import WideImage from 'projects/BlueberryFestival/assets/physical-phone.jpeg';
import NarrowImage from 'projects/BlueberryFestival/assets/harbor.jpg';
import imports from 'projects/BlueberryFestival/imports';
import './style.scss';

export default function BlueberryFestivalScreen() {
    return (
        <div className="_BlueberryFestivalScreen _Screen">
            <PortfolioHeader 
                entry={PortfolioEntries.getProject("blueberry-festival")}
                wideImage={WideImage}
                narrowImage={NarrowImage}
            />
            <Section>
                <h2>Introduction</h2>
                <p>
					The National Blueberry Festival takes place in South Haven, MI every August. The festival organizers were seeking an alternative to physical, paper brochures in the form of a custom app. I did all of the design work and a portion of the front-end programming, and my counterpart did the rest of the programming, including the server-side code.
				</p>
                <p>
                    The festival organizers sought a solution that would allow attendees to browse the festival events on a list and a map. They also wanted to be able to make schedule changes in real-time in addition to sending notifications to attendees about important updates. 
                </p>
                <ImageDisplay
                    images={[imports['app-icon']]}
                    maxWidth={150}
                />
            </Section>
            <SectionDivider />
            <Section>
                <h2>Process</h2>
                <p>
                    The app was programmed in an Expo-managed React Native environment, permitting us to write one codebase for Android and iOS platforms. We also created a dashboard using React.js for event organizers to add and update events on the schedule, as well as send push notifications and update the sponsors shown on the banner ads. 
                </p>
				<p>
					I used Adobe Illustrator to create icons and assets for the app alongside Adobe XD to apply those assets in a proper mock-up and iterate over possible design solutions. Each design direction was posted onto a Figma board where discourse could be exchanged.
				</p>
                <ImageDisplay
                    images={[imports['typography-selections']]}
                    caption="Typography selections for the app. We used default system fonts for Android and iOS in order to conform with the UI of the user's operating system."
                    forceFullWidth={true}
                />
                <p>
                    We decided on four main tab screens: a schedule screen, which acts as the landing page that simply shows a list of all events, the map screen, the alerts screen, and the more screen, which links the festival website.
                </p>
                <p>
                    Every event is designed to be displayed using the same graphic module in every location in the app. This includes the schedule, map, and alert interfaces. I had originally designed separate ways to view events between the map and the schedule screen before settling on the concept of a ubiquitous module.
                </p>
                <ImageDisplay
                    images={[imports['schedule-information-design']]}
                    caption="Left: concept sketches for displaying events for the schedule. Right: Digitized versions of the event module and final determinations. The event module is the same everywhere, except in cases where the date of the event is not already implied (i.e. the map screen)."
                    forceFullWidth={true}
                />
                <p>
                    Event modules on the schedule screen scroll vertically and appear at the top of the stack while they are in progress; completed events appear at the bottom of the stack. Modules on the map are grouped by location and appear when you tap a pin.
                </p>
                <ImageDisplay
                    images={[imports['event-organization-design']]}
                    caption="Left two screens: the top of the schedule screen, which shows ongoing events, and the middle of the schedule screen, which lists events by day. Right two screens: the map screen before and after a pin is tapped."
                    forceFullWidth={true}
                />
                <p>
                    Tapping any event module anywhere leads the user to a details screen, which displays the same information on the module along with an event description, a button to opt into event alerts, and a link to get directions.
                </p>
                <ImageDisplay
                    images={[imports['event-details-iterations']]}
                    caption="From left to right: initial sketches for the event screen, digital iterations for the screen, final determination."
                    forceFullWidth={true}
                />
            </Section>
            <SectionDivider />
            <Section>
                <h2>Results</h2>
                <ImageDisplay
                    images={[imports['blueberry-final']]}
                    forceFullWidth={true}
                />
                <p>
                    During the course of the 2021 festival, the app received over one thousand downloads across Android and iOS, achieved an average 5.0 star rating, and broke into the top charts for apps categorized as &quot;Reference&quot; on Apple&apos;s App Store.
                </p>
            </Section>
        </div>
    )
}
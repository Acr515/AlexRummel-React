import React, { useEffect, useRef, useState } from 'react';
import Section from 'components/Section';
import SectionDivider from 'components/SectionDivider';
import PortfolioHeader from 'components/PortfolioHeader';
import ImageDisplay from 'components/ImageDisplay';
import PortfolioEntries from 'config/PortfolioEntries';

import Header from 'projects/BlueberryFestival/header.png';
import imports from 'projects/BlueberryFestival/imports';
import ProjectIntro from 'components/ProjectIntro';
import WidthContainer from 'components/WidthContainer';
import './style.scss';

/**
 * The portfolio page for the Blueberry Festival App.
 */
export default function BlueberryFestivalScreen() {

    // Utility to get y-position of a ref
    const getY = (ref) => typeof ref !== 'undefined' && ref.current !== 'undefined' ? ref.current.getBoundingClientRect().y : 10000;
    
    // Refs for each element to be changed
    const [phoneVisible, setPhoneVisible] = useState(getY(refPhoneAppearance) < 300);
    const [imageVisibility, setImageVisibility] = useState(-1);
    const refPhoneAppearance = useRef();
    const textBoxRefs = [
        useRef(),
        useRef(),
        useRef()
    ]
    
    // Function to determine which image should be visible
    const getVisibleImage = () => {
        let visibleImage = -1;
        textBoxRefs.forEach((ref, ind) => {
            if (getY(ref) < 650) visibleImage = ind;
        })
        setImageVisibility(visibleImage);
    }

    // Read-outs for element
    useEffect(() => {
        // Setters
        const setScreens = () => {
            // Set states
            setPhoneVisible(getY(refPhoneAppearance) < 300);
            getVisibleImage();
        }

        // Clean up code
        window.removeEventListener('scroll', setScreens);
        window.removeEventListener('resize', setScreens);
        window.addEventListener('scroll', setScreens, { passive: true });
        window.addEventListener('resize', setScreens, { passive: true });
        return () => { window.removeEventListener('scroll', setScreens); window.removeEventListener('resize', setScreens); }
    }, []);

    return (
        <div className="_BlueberryFestivalScreen _Screen">
            <PortfolioHeader 
                entry={PortfolioEntries.getProject("blueberry-festival")}
                wideImage={Header}
            />
            <ProjectIntro image={imports['physical-phone']}>
                <p>
                    The National Blueberry Festival takes place every second weekend in August in South Haven, Michigan.
                </p>
                <p>
                    My brother and I were approached by the festival planning committee to create an app to replace paper schedules that would include live updates and the ability to re-use it each year. He would focus on back-end development and I would design the interface and write front-end code in React Native for the app.
                </p>
            </ProjectIntro>

            <section className="planning">
                <WidthContainer width={1400} className="split-column">
                    <div className="text">
                        <h2>Project Planning</h2>
                        <p>
                            We devised an information architecture to organize what information we knew that attendees needed, in addition to a firm hierarchy of information that laid out which pieces of information were the most important on each screen.
                        </p>
                    </div>
                    <div className="image" style={{ maxWidth: 700 }}>
                        <img src={imports['information-architecture']} />
                    </div>
                </WidthContainer>
                <WidthContainer width={1400} className="split-column">
                    <div className="text">
                        <p>
                        The decisions we made in the information hierarchy informed the typographic decisions as we began to envision how event information would look across the app.
                        </p>
                    </div>
                    <div className="image" style={{ maxWidth: 700 }}>
                        <img src={imports['typography-selections']} />
                    </div>
                </WidthContainer>
            </section>

            <section className="sketch-background" style={{ backgroundImage: `url(${imports['sketch-backdrop']})` }}>
                <WidthContainer width={1400} className="split-column" style={{ gap: 28 }}>
                    <div className="image" style={{ maxWidth: 750 }}>
                        <img src={imports['schedule-information-design']} />
                    </div>
                    <div className="text">
                        <h2>UI Design</h2>
                        <p>
                            Because the app would display events in both a list and on a map, two different sets of components were devised to show the info. We later decided that a more appropriate component would be consistent everywhere in order to improve familiarity as it was used across screens, creating the hybrid module that could be used everywhere.
                        </p>
                    </div>
                </WidthContainer>
                <WidthContainer width={1400} className="split-column">
                    <div className="image" style={{ maxWidth: 700 }}>
                        <img src={imports['iconography']} />
                    </div>
                    <div className="text">
                        <p>
                            The base iconography was designed to be approachable and reminiscent of base phone OS icons. The pins needed to stand out against the stock Apple or Google map, as well as change color when tapped. The blueberry design would later be used in the app icon.
                        </p>
                    </div>
                </WidthContainer>
                <WidthContainer width={1400} className="split-column">
                    <div className="image" style={{ maxWidth: 700 }}>
                        <img src={imports['event-details-iterations']} />
                    </div>
                    <div className="text">
                        <p>
                            A focal point of design iteration was the individual event screen, which appears when an event is tapped through screens like the schedule or map.
                        </p>
                    </div>
                </WidthContainer>
            </section>

            <WidthContainer width={1200} className="split-column">
                <div className="text phone-text" style={{ width: "50%" }}>
                    <div id="beginner-marker" ref={refPhoneAppearance}></div>
                    <div className="phone-text-block">
                        <h2>Final App</h2>
                        <p style={{ margin: "64px 0" }}>
                            As the app interface designs were created, they were programmed into the app using an Expo-managed React Native installation. We used GitHub to organize our code into stable and unstable branches in addition to feature branches that integrated with a ticket system as we simultaneously developed new features.
                        </p>
                        <a href="https://apps.apple.com/us/app/south-haven-blueberry-festival/id1572703423"><img src={imports['apple-badge']} className="store-badge"/></a>
                        <a href="https://play.google.com/store/apps/details?id=com.blueberryfestival.blueberryfestival&pli=1"><img src={imports['google-badge']} className="store-badge"/></a>
                    </div>
                    <div className="phone-text-block" ref={textBoxRefs[0]}>
                        <p>
                            Users are greeted by the Schedule screen that immediately informs them what events are currently ongoing.
                        </p>
                    </div>
                    <div className="phone-text-block" ref={textBoxRefs[1]}>
                        <p>
                            Users are greeted by the Schedule screen that immediately informs them what events are currently ongoing.
                        </p>
                    </div>
                    <div className="phone-text-block" ref={textBoxRefs[2]}>
                        <p>
                            Users are greeted by the Schedule screen that immediately informs them what events are currently ongoing.
                        </p>
                    </div>
                </div>
                <div className="image sticky-phone" style={{ maxWidth: 320, opacity: phoneVisible ? 1 : 0 }}>
                    <div className="image-holder phone-screens">
                        <img className="frame" src={imports['phone-outline']} />
                        <img src={imports['screenshot_map-1']} style={{ opacity: imageVisibility == 0 ? 1 : 0 }}/>
                        <img src={imports['screenshot_splash']} style={{ opacity: imageVisibility == -1 ? 1 : 0 }} />
                    </div>
                </div>
            </WidthContainer>
        </div>
    )
}
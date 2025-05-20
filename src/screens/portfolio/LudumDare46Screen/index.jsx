import React from 'react';
import Section from 'components/Section';
import PortfolioHeader from 'components/PortfolioHeader';
import ImageDisplay from 'components/ImageDisplay';
import Blockquote from 'components/Blockquote';
import PortfolioEntries from 'config/PortfolioEntries';
import Header from 'projects/LudumDare46/featured-cover.png';

import imports from 'projects/LudumDare46/imports';
import './style.scss';

/**
 * The portfolio page for Ludum Dare 46.
 */
export default function LudumDare46Screen() {
    return (
        <div className="_LudumDare46Screen _Screen">
            <PortfolioHeader 
                entry={PortfolioEntries.getProject("ludum-dare-46")}
                wideImage={Header}
            />
            <div className='project-contents'>
                <Section>
                    <h2>Introduction</h2>
                                <p>
                                    Ludum Dare is a biannual game development competition where designers and developers from all over the world compete to make the best video game within a 72-hour span based on a theme, which is revealed at the beginning of the time limit. The theme of the 46th Ludum Dare was &quot;Keep it alive.&quot; This edition of the Ludum Dare was characterized by the COVID-19 pandemic, which lead to record-breaking participation that exceeded 4,500 global game submissions.
                                </p>
                </Section>
                <Section>
                    <div className="two-columns">
                        <div className="column">
                            <img src={imports['empty-cone-logo']} />
                        </div>
                        <div className="column">
                            <p>
                                <a href="https://acr515.itch.io/ld46" rel="noreferrer" target="_blank">Play now</a> on itch.io
                            </p>
                            <p>
                                <a href="https://ldjam.com/events/ludum-dare/46/the-empty-cone" rel="noreferrer" target="_blank">View competition page</a> on Ludum Dare website
                            </p>
                        </div>
                    </div>
                </Section>
                <Section>
                    <h2>Description</h2>
                                <p>
                                    We decided to create an ice cream parlor simulator where the player&apos;s goal is to rapidly serve customers in their parlor while earning enough income to hire help and keep their business alive. At the end of each in-game day, however, a horde of monsters attack the parlor, requiring the player to arm themselves and defeat the monsters before they destroy too much equipment or terrorize too many customers.
                                </p>
                    <p>
                        I was tasked with designing all of the graphics, programming each user interface element, and modelling the gameplay.
                    </p>
                    <ImageDisplay
                        images={[imports['gameplay-1'], imports['gameplay-2']]}
                    />
                    <p>
                        Of the 3,576 games in our category, we placed 295th overall, in addition to earning high rankings in other categories such as Fun (125th), Innovation (238th), and Humor (170th).
                    </p>
                    <Blockquote
                        content="You have a wonderful sense of comedy and drama- not only within the plot and mechanics- but through the audio and visuals as well. I mean, the characters are very reminiscent of ice cream cones. Super impressive jam game. And the self-reflexivity! I think every game developer should be required to play this game."
                        by="Ludum Dare reviewer"
                    />
                    <ImageDisplay
                        images={[imports['gameplay-3'], imports['gameplay-4']]}
                    />
                </Section>
            </div>
        </div>
    )
}
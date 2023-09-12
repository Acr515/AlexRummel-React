import React from 'react';
import Section from 'components/Section';
import PortfolioHeader from 'components/PortfolioHeader';
import ImageDisplay from 'components/ImageDisplay';
import PortfolioEntries from 'config/PortfolioEntries';
import Header from 'projects/DigitalAnimation/featured-cover.png';

import imports from 'projects/DigitalAnimation/imports';

/**
 * The portfolio page for the Digital Animation Award.
 */
export default function DigitalAnimationScreen() {
    return (
        <div className="_BlueberryFestivalScreen _Screen">
            <PortfolioHeader 
                entry={PortfolioEntries.getProject("digital-animation")}
                wideImage={Header}
                dim
            />
            <Section>
                <h2>Description</h2>
				<p>
					FIRST Robotics Competition teams are allowed to submit for a variety of different awards, even before the competitions begin. One such award is the Digital Animation Award, where teams must produce a 3D animation based around a theme. The 2018 theme was Power Up.
				</p>
				<p>
					My high school team had never submitted for this award before, and it was suggested to me by my coach. I worked alone in three weeks to learn how to animate using keyframes in Blender, how to render an animation, how to bake 3D physics into a scene, and how to produce and add my own music to the video.
				</p>
                <ImageDisplay
                    images={[imports['scene-1']]}
                    caption="A view of the Blender scene."
                />
                <p>
					While we failed to win the award, the video was selected as one of the judging panel&apos;s favorite animations against nearly 100 other submissions worldwide.
				</p>
                <iframe 
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/iO-3KY-IUtQ"
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    style={{ width: "100%", maxWidth: 560, margin: "40px auto 20px", display: "block" }}
                ></iframe>
            </Section>
        </div>
    )
}
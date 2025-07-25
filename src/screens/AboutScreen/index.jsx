import React from 'react';
import MetaTags from 'components/MetaTags';
import Section from 'components/Section';
import Headshot from 'assets/images/alex-image.jpg';
import './style.scss';

/**
 * The About Me screen.
 */
export default function AboutScreen() {
    return (
        <div className="_AboutMeScreen _Screen">
            <MetaTags
                title="About Me"
                description="More about me!"
            />
            <Section className="two-column">
                <div className="text-column">
                    <h2>About Me</h2>
                    <p>
                        I&apos;m a Communication Design graduate from DAAP at the University of Cincinnati, specializing in UI design. With a minor in Computer Science, I have a strong foundation in software development as well. My experience in both programming and design allows me to approach projects from multiple angles and take on various roles throughout a product lifecycle.
                    </p>
                    <p>
                        During my three semesters at Kinetic Vision, I worked on front-end software design and development, focusing on applications in web, iOS, and extended reality. My work in UX design and research during my co-ops at Live Well Collaborative and Lextant taught me valuable skills about evaluating user experiences and improving services and products while balancing user needs with organization needs.
                    </p>
					<p>
						I grew up in South Haven, Michigan. Starting in middle school, I began teaching myself programming skills, which has proved invaluable to my career. I remain actively involved with the FIRST Robotics program that I joined as a high school freshman, fueling my enthusiasm for innovation and problem-solving.
					</p>
                    <p>
                        I&apos;m always looking for new opportunities! If you think I could be of assistance for your next project, feel free to get in contact with me through my <a href="https://www.linkedin.com/in/alex-rummel/">LinkedIn</a> or my <a href="mailto:rummelac@mail.uc.edu">email</a>.
                    </p>
                </div>
                <div className="headshot-column">
                    <img src={Headshot} />
                </div>
            </Section>
        </div>
    )
}
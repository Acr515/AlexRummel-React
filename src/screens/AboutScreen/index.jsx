import React from 'react';
import MetaTags from 'components/MetaTags';
import Section from 'components/Section';

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
            <Section>
                <h2>About Me</h2>
				<p>
					I grew up in South Haven, Michigan and graduated from South Haven High School. I was involved in band, FIRST Robotics, and tennis for all four of my years in high school. During my free-time, I enjoy playing tennis, developing my various programming projects, helping out FIRST Robotics teams, and spending time with friends and family.
				</p>
				<p>
					I&apos;m always looking for new opportunities! If you think I could be of assistance for your next project, feel free to get in contact with me through my <a href="https://www.linkedin.com/in/alex-rummel/">LinkedIn</a> or my <a href="mailto:rummelac@mail.uc.edu">email</a>.
				</p>
            </Section>
        </div>
    )
}
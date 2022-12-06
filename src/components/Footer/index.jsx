import React from 'react';
import WidthContainer from 'components/WidthContainer';
import GitHubIcon from 'assets/images/icons/github.png';
import LinkedInIcon from 'assets/images/icons/linkedin.png';
import './style.scss';
import SectionDivider from 'components/SectionDivider';

/**
 * Renders a `SectionDivider` component, followed by the footer, which contains links as well as my email.
 */
export default function Footer() {
    return (
        <>
            <SectionDivider />
            <footer className="_Footer">
                <WidthContainer className="container">
                    <div className="icon-row">
                        <a href="https://www.linkedin.com/in/alex-rummel/">
                            <img src={LinkedInIcon} />
                        </a>
                        <a href="https://github.com/Acr515/">
                            <img src={GitHubIcon} />
                        </a>
                    </div>
                    Alex Rummel | <a href="mailto:rummelac@mail.uc.edu">rummelac@mail.uc.edu</a>. All rights reserved.
                </WidthContainer>
            </footer>
        </>
    )
}
import React from 'react';
import WidthContainer from 'components/WidthContainer';
import GitHubIcon from 'assets/images/icons/github.png';
import LinkedinIcon from 'assets/images/icons/linkedin.png';
import Icon from 'components/Icon';
import './style.scss';

/**
 * Renders a `SectionDivider` component, followed by the footer, which contains links as well as my email.
 */
export default function Footer() {
    return (
        <footer className="_Footer">
            <WidthContainer className="container">
                <div className="icon-row">
                    <a href="https://www.linkedin.com/in/alex-rummel/">
                        <Icon image={LinkedinIcon} alt='Linkedin' manageColor />
                    </a>
                    <a href="https://github.com/Acr515/">
                         <Icon image={GitHubIcon} alt='GitHub' manageColor />
                    </a>
                </div>
                Alex Rummel | <a className="email" href="mailto:rummelac@mail.uc.edu">rummelac@mail.uc.edu</a>. All rights reserved.
            </WidthContainer>
        </footer>
    )
}
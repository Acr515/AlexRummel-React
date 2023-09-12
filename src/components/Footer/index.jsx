import React, { useContext } from 'react';
import WidthContainer from 'components/WidthContainer';
import GitHubIcon from 'assets/images/icons/github.png';
import LinkedInIcon from 'assets/images/icons/linkedin.png';
import PageColorContext from 'context/PageColorContext';
import './style.scss';

/**
 * Renders a `SectionDivider` component, followed by the footer, which contains links as well as my email.
 */
export default function Footer() {

    const colors = useContext(PageColorContext);

    return (
        <footer className="_Footer">
            <WidthContainer className="container" style={{ color: colors.darkfont || "" }}>
                <div className="icon-row">
                    <a href="https://www.linkedin.com/in/alex-rummel/" style={{ filter: colors.darktint || "" }}>
                        <img src={LinkedInIcon} />
                    </a>
                    <a href="https://github.com/Acr515/" style={{ filter: colors.darktint || "" }}>
                        <img src={GitHubIcon} />
                    </a>
                </div>
                Alex Rummel | <a className="email" href="mailto:rummelac@mail.uc.edu" style={{ color: colors.darkfont || "" }}>rummelac@mail.uc.edu</a>. All rights reserved.
            </WidthContainer>
        </footer>
    )
}
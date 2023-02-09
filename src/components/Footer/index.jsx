import React from 'react';
import { useLocation } from 'react-router-dom';
import WidthContainer from 'components/WidthContainer';
import SectionDivider from 'components/SectionDivider';
import GitHubIcon from 'assets/images/icons/github.png';
import LinkedInIcon from 'assets/images/icons/linkedin.png';
import './style.scss';

/**
 * Renders a `SectionDivider` component, followed by the footer, which contains links as well as my email.
 */
export default function Footer() {
    
    const location = useLocation();
    const dividerHideRoutes = [
        "/portfolio/craigslist-redesign"
    ];

    return (
        <>
            { !dividerHideRoutes.includes(location.pathname) && <SectionDivider className="footer-divider" /> }
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
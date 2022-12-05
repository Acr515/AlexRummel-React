import WidthContainer from 'components/WidthContainer';
import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss'

export default function NavigationBar() {
    return (
        <nav className="_NavigationBar">
            <WidthContainer className="container">
                <Link className="title" to="/"><span>Alex Rummel</span></Link>
                <ul className="link-list">
                    <li><Link to="/">home</Link></li>
                    <li><Link to="/portfolio/">portfolio</Link></li>
                    <li><Link to="/bin/AlexRummel_Resume.pdf">resume</Link></li>
                </ul>
                <div className="burger-button">
                    <div className="line" id="line-1"></div>
                    <div className="line" id="line-2"></div>
                    <div className="line" id="line-3"></div>
                </div>
            </WidthContainer>
        </nav>
    )
}
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import WidthContainer from 'components/WidthContainer';
import './style.scss'

export default function NavigationBar() {

    const [opened, setOpened] = useState(false);

    return (
        <nav className={`_NavigationBar ${ opened ? "open" : "" }`}>
            <WidthContainer className="container" verticalPadding={false}>
                <Link className="title" to="/"><span>Alex Rummel</span></Link>
                <ul className="link-list">
                    <li><Link to="/">home</Link></li>
                    <li><Link to="/portfolio/">portfolio</Link></li>
                    <li>
                        { process.env.NODE_ENV == 'production' ? 
                            <a href="/bin/AlexRummel_Resume.pdf">resume</a>
                        :
                            <Link to="/bin/AlexRummel_Resume.pdf">resume</Link>
                        }
                    </li>
                </ul>
                <div className="burger-button" onClick={ () => setOpened(!opened) }>
                    <div className="line line-1"></div>
                    <div className="line line-2"></div>
                    <div className="line line-3"></div>
                </div>
            </WidthContainer>
        </nav>
    )
}
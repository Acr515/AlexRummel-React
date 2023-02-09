import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import WidthContainer from 'components/WidthContainer';
import './style.scss'

export default function NavigationBar() {

    const [opened, setOpened] = useState(false);
    
    const linkClicked = () => {
        setOpened(false);
    }

    return (
        <nav className={`_NavigationBar ${ opened ? "open" : "" }`}>
            <WidthContainer className="container" verticalPadding={false}>
                <Link className="title" to="/"><span>Alex Rummel</span></Link>
                <ul className="link-list">
                    <li><Link onClick={linkClicked} to="/">portfolio</Link></li>
                    <li><Link onClick={linkClicked} to="/about">about</Link></li>
                    <li>
                        { process.env.NODE_ENV == 'production' ? 
                            <a onClick={linkClicked} href="/bin/AlexRummel_Resume.pdf">resume</a>
                        :
                            <Link onClick={linkClicked} to="/bin/AlexRummel_Resume.pdf">resume</Link>
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
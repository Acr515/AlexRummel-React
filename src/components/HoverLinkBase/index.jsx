import React from 'react';
import { Link } from 'react-router-dom';
import MagnifyingGlass from 'assets/images/icons/magnifying-glass.png';
import './style.scss';

/**
 * Contains a `Link` component that wraps an image and plays a transition effect when hovered.
 * Defaults to a size of 0, so add your own `className` to add any desired styling.
 * @param {object} image The image import to use as the link
 * @param {string} to The route to lead to when clicked
 */
export default function HoverLinkBase({ className, image, to, style }) {
    return (
        <Link to={to} className={`_HoverLinkBase ${className || ""}`} style={style}>
            <div className="image" style={{ backgroundImage: `url(${image})` }}></div>
            <div className="overlay"></div>
            <div className="magnifying-icon" style={{ backgroundImage: `url(${MagnifyingGlass})` }}></div>
        </Link>
    )
}
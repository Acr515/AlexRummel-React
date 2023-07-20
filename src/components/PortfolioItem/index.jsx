import React from 'react';
import { Link } from 'react-router-dom';
import HoverLinkBase from 'components/HoverLinkBase';
import './style.scss';

/**
 * Shows a small inline square preview of a portfolio entry.
 * @param {PortfolioEntry} entry The specific portfolio entry to display
 */
export default function PortfolioItem({ entry }) {
    return (
        <div className="_PortfolioItem">
            <HoverLinkBase
                className="image-link"
                image={entry.thumbnailImage}
                to={entry.getUrl()}
            />
            <div className="title-area">
                <h3><Link to={entry.getUrl()}>{entry.title}</Link></h3>
                <div className="year">{entry.getYear()}</div>
            </div>
        </div>
    )
}
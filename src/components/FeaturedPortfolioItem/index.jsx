import React from 'react';
import { Link } from 'react-router-dom';
import HoverLinkBase from 'components/HoverLinkBase';
import './style.scss';

/**
 * Shows a wide summary of a portfolio entry that can be clicked on to view the full page for it.
 * @param {PortfolioEntry} entry The specific portfolio entry to display
 * @param {boolean} showTagline Defaults to true. Whether or not to show the one-sentence description of this entry beneath the component or not
 */
export default function FeaturedPortfolioItem({ entry, showTagline = true }) {
    return (
        <div className="_FeaturedPortfolioItem">
            <HoverLinkBase
                className="image-link"
                image={entry.featuredImage}
                to={entry.getUrl()}
            />
            <h3><Link to={entry.getUrl()}>{entry.title}</Link></h3>
            { showTagline && <p>{entry.tagline}</p> }
        </div>
    )
}
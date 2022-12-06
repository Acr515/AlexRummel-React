import React from 'react';
import { Link } from 'react-router-dom';
import MagnifyingGlass from 'assets/images/icons/magnifying-glass.png';
import './style.scss';

/**
 * Shows a wide summary of a portfolio entry that can be clicked on to view the full page for it.
 * @param {object} entry The specific portfolio entry to display
 * @param {boolean} showTagline Defaults to true. Whether or not to show the one-sentence description of this entry beneath the component or not
 */
export default function FeaturedPortfolioItem({ entry, showTagline = true }) {
    return (
        <div className="_FeaturedPortfolioItem">
            <Link className="image-container" to={entry.getUrl()}>
                <div className="featured-image" style={{ backgroundImage: `url(${entry.featuredImage})` }}></div>
                <div className="overlay"></div>
                <div className="magnifying-icon" style={{ backgroundImage: `url(${MagnifyingGlass})` }}></div>
            </Link>
            <h3><Link to={entry.getUrl()}>{entry.title}</Link></h3>
            { showTagline && <p>{entry.tagline}</p> }
        </div>
    )
}
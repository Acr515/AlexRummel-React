import React from 'react';
import { Link } from 'react-router-dom';
import HoverLinkBase from 'components/HoverLinkBase';
import './style.scss';

/**
 * Shows a small inline square preview of a portfolio entry.
 * @param {PortfolioEntry} entry The specific portfolio entry to display
 * @param {number} width The max width of the area
 * @param {number} height The height of the area
 */
export default function PortfolioItem(props) {
	/** @import PortfolioEntry from 'classes/PortfolioEntry' */
    /** @type {PortfolioEntry} */
	const entry = props.entry;
	const width = props.width ?? 460;
	const height = props.height ?? 420;
	
	return (
        <div className="_PortfolioItem" style={{ width }}>
            <HoverLinkBase
                className="image-link"
                image={entry.thumbnailImage}
                to={entry.getUrl()}
                style={{ height }}
            />
            <div className="title-area">
                <h3><Link to={entry.getUrl()}>{entry.title}</Link></h3>
                <div className="year">{entry.getYear()}</div>
            </div>
        </div>
    );
}
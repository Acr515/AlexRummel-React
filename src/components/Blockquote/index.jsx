import React from 'react';
import './style.scss';

/**
 * A basic, consistent implementation of block quotes used in portfolio entries.
 * @param {string} content The contents of the quote
 * @param {string} by The line appearing below that shows who/what the quote is from
 */
export default function Blockquote({ content, by = null }) {
    return (
        <div className="_Blockquote">
            <blockquote className="quote">
                &quot;{content}&quot;
            </blockquote>
            { by != null && <p className="name">- {by}</p> }
        </div>
    )
}
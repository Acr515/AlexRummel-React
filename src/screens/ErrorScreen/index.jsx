import React from 'react';
import { Link, useRouteError } from 'react-router-dom';
import Section from 'components/Section';
import MetaTags from 'components/MetaTags';
import './style.scss';

/**
 * Renders when an error occurs with `react-router`.
 * @param {number} forceErrorCode Inject with 404 if this should be the 404 page 
 */
export default function ErrorScreen({ forceErrorCode = null }) {

    const error = useRouteError();
    const is404 = forceErrorCode == 404;

    return (
        <div className="_ErrorScreen _Screen">
            <MetaTags 
                title="Error"
            />
            { is404 ? <Section className="not-found">
                <h1>404</h1>
                <p>That resource couldn&apos;t be found! <Link to="/">Click here</Link> to return home.</p>
            </Section> : <Section>
                An error has occurred: {error.message}
            </Section> }
        </div>
    )
}
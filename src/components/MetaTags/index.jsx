import React from 'react';
import { Helmet } from 'react-helmet';

/**
 * Outputs meta tags to the `<head>` node of the document.
 * @param {string} title The document title
 * @param {string} description The description of the route to be displayed in search engines
 * @param {boolean} titlePrefix Defaults to true. Whether or not to use a prefix in the title (in this case "Alex Rummel: ")
 */
export default function MetaTags({ title = "Alex Rummel", description, titlePrefix = true }) {

    if (title === "Alex Rummel") titlePrefix = false;

    return (
        <Helmet>
            <title>{`${titlePrefix ? "Alex Rummel: " : ""}${title}`}</title>
            <meta name="description" content={description || "My name is Alex! I'm majoring in Communication Design and minoring in Computer Science at the University of Cincinnati."} />
            <link rel="stylesheet" href="https://use.typekit.net/ytl6msw.css" />
            <meta name="viewport" content="width=device-width, initial-scale=.8" />
        </Helmet>
    )
}
import React from 'react';
import Section from 'components/Section';
import MetaTags from 'components/MetaTags';

/**
 * The index page of the website.
 */
export default function HomeScreen() {
    return (
        <div className="_HomeScreen _Screen">
            <MetaTags />
            <Section>
                Hello world! You&apos;re on the home screen.
            </Section>
        </div>
    )
}
import React from 'react';
import { useRouteError } from 'react-router-dom';

export default function ErrorScreen() {

    const error = useRouteError();

    return (
        <div>
            An error has occurred: {error}
        </div>
    )
}
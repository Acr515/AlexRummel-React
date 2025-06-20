import React from 'react';

/**
 * Renders a banner at `z-index: -10` that clear elements will
 */
export default function PatternBackground({ image = '' }) {
    return (
        <div
            className='_PatternBackground'
            style={{ backgroundImage: `url(${image})` }}
        />
    );
}
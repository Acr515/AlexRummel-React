import React from 'react';
import './style.scss';

function SectionHeader({ label = 'Heading', color = '' }) {
    const name = label.toLowerCase();

    return (
        <h2 id={name} className={`_SectionHeader ${color}`}>{label}</h2>
    );
}

export default SectionHeader;
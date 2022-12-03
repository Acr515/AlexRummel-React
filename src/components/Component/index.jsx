import React from 'react';
import Image from 'assets/images/image.png';
import './style.scss';

export default function Component() {
    return (
        <div className="_Component">
            <p>Test component</p>
            <img src={Image} />
        </div>
    )
}
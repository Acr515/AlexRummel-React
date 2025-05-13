import React, { useEffect, useState } from 'react';
import Icon from 'components/Icon';
import Chevron from 'assets/images/icons/chevron.svg';
import './style.scss';

const FADE_FALLOFF_BEGIN = 0;
const FADE_FALLOFF_END = 0.5;

export default function ScrollIndicator() {
    const [opacity, setOpacity] = useState(1);
    useEffect(() => {
        const onScroll = () => {
            const scrollAmount = window.scrollY;
            const scrollHeight = window.innerHeight;
            const scrollFalloffStart = scrollHeight * FADE_FALLOFF_BEGIN;
            const scrollFalloffEnd = scrollHeight * FADE_FALLOFF_END;
            if (scrollAmount > scrollFalloffEnd) {
                setOpacity(0);
            } else if (scrollAmount < scrollFalloffStart) {
                setOpacity(1);
            } else {
                setOpacity(1 - ((scrollAmount - scrollFalloffStart) / (scrollFalloffEnd - scrollFalloffStart)));
            }
        };

        window.addEventListener('scroll', onScroll);

        return () => {
            window.removeEventListener('scroll', onScroll);
        };
    }, []);

    return (
        <div className='_ScrollIndicator' style={{ '--opacity': `${opacity}` }}>
            <Icon image={Chevron} alt='View Project' manageColor />
        </div>
    );
}
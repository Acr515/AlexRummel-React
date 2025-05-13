import React, { memo } from 'react';
import './style.scss';

/**
 * Renders an icon. In its default state, it will fill the size of its parent.
 * @param {string} image The image to show.
 * @param {string} alt Alt text to use for the icon.
 * @param {string} color The color to use for the icon.
 * @param {string} manageColor Defaults to false. If true, exposes the --color CSS variable so that stylesheets can easily manage the icon's color.
 */
function Icon(props) {
	const color = props.color ?? '#fff';
	const manageColor = props.manageColor ?? false;

	return (
		<div className={`_Icon ${props.className ?? ''}`}>
            <span className={`icon-mask${!manageColor ? ' managed' : ''}`} style={{
                ...(!manageColor ? { backgroundColor: color } : {}),
                maskImage: `url("${props.image}")`,
            }}>
                <img className='icon-image' src={props.image} alt={props.alt ?? ''}/>
            </span>
		</div>
	);
}

export default memo(Icon);
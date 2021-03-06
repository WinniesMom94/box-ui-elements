// @flow
import * as React from 'react';

import AccessibleSVG from '../accessible-svg';

type Props = {
    className?: string,
    color?: string,
    height?: number,
    /** A text-only string describing the icon if it's not purely decorative for accessibility */
    title?: string | React.Element<any>,
    width?: number,
};

const IconRetention = ({ className = '', color = '#FFFFFF', height = 14, title, width = 16 }: Props) => (
    <AccessibleSVG
        className={`icon-retention ${className}`}
        height={height}
        title={title}
        viewBox="0 0 16 14"
        width={width}
    >
        <path
            className="fill-color"
            fill={color}
            d="M1,14h14V7H1V14z M6,8h4c0.5,0,1,0.4,1,1c0,0.6-0.5,1-1,1H6c-0.5,0-1-0.4-1-1C5,8.4,5.5,8,6,8z"
        />
        <rect className="fill-color" fill={color} y="4" width="16" height="2" />
        <polygon className="fill-color" fill={color} points="13,0 3,0 0,3 16,3" />
    </AccessibleSVG>
);

export default IconRetention;

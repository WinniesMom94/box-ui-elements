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

const IconExpirationInverted = ({ className = '', color = '#444444', height = 24, title, width = 24 }: Props) => (
    <AccessibleSVG
        className={`icon-expiration-inverted ${className}`}
        title={title}
        width={width}
        height={height}
        viewBox="0 0 24 24"
    >
        <g className="fill-color" fill={color}>
            <path
                d="M12,2C6.5,2,2,6.5,2,12s4.5,10,10,10c5.5,0,10-4.5,10-10S17.5,2,12,2z M12,20c-4.4,0-8-3.6-8-8s3.6-8,8-8s8,3.6,8,8
            S16.4,20,12,20z"
            />
            <path d="M12.5,7H11v6l5.2,3.1l0.8-1.2l-4.5-2.7V7z" />
        </g>
    </AccessibleSVG>
);

export default IconExpirationInverted;

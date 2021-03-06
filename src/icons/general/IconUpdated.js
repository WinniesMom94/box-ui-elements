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

const IconUpdated = ({ className = '', color = '#15AA61', height = 16, title, width = 16 }: Props) => (
    <AccessibleSVG
        className={`icon-updated ${className}`}
        title={title}
        width={width}
        height={height}
        viewBox="0 0 16 16"
    >
        <g fill="none" fillRule="evenodd">
            <circle
                cx="8"
                cy="8"
                fill="#fff"
                height="16"
                r="7.5"
                stroke={color}
                strokeWidth="1"
                width="16"
                x="0"
                y="0"
            />
            <path
                d="M4 8c0 1.1.45 2.1 1.2 2.8L4 12h3V9l-1.1 1.1C5.35 9.6 5 8.85 5 8c0-1.3.85-2.4 2-2.85v-1c-1.7.45-3 2-3 3.85zm8-4H9v3l1.1-1.1c.55.5.9 1.25.9 2.1 0 1.3-.85 2.4-2 2.85v1.05c1.7-.45 3-2 3-3.85 0-1.1-.45-2.1-1.2-2.8L12 4z"
                fill={color}
            />
        </g>
    </AccessibleSVG>
);

export default IconUpdated;

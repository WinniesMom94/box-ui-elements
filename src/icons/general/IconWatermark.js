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

const IconWatermark = ({ className = '', color = '#444', height = 16, title, width = 16 }: Props) => (
    <AccessibleSVG
        className={`icon-watermark ${className}`}
        title={title}
        width={width}
        height={height}
        viewBox="0 0 16 16"
    >
        <g className="fill-color" fill={color}>
            <path d="M3.5 12.3c-.1.3 0 .5.3.7.3.1.5 0 .7-.3l.5-1.2-1.3.5-.2.3zM12 8.8l-1 .4 1.5 3.3c.1.3.4.4.7.2.3-.1.4-.4.2-.7L12 8.8zM8.5 3.7l1.3 2.8.9-.4L9 2.3c-.2-.4-.8-.4-1 0L5.4 8.1l1.3-.5 1.8-3.9zM14.4 6.3c-.1-.3-.3-.4-.6-.3L2.5 10.3c-.3.1-.4.4-.3.6.1.3.4.4.6.3l11.3-4.3c.3-.1.4-.4.3-.6z" />
        </g>
    </AccessibleSVG>
);

export default IconWatermark;

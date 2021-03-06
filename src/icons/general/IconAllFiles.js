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

const IconAllFiles = ({ className = '', color = '#979797', height = 12, title, width = 14 }: Props) => (
    <AccessibleSVG
        className={`icon-all-files ${className}`}
        title={title}
        width={width}
        height={height}
        viewBox="0 0 14 12"
    >
        <g className="fill-color" fill={color}>
            <path d="M13 1H7.1l-1-1H1C.4 0 0 .5 0 1v10c0 .6.5 1 1 1h12c.6 0 1-.4 1-1V2c0-.6-.4-1-1-1zm0 10H1V4h12v7zm0-8H1V1h4.7l1 1H13v1z" />
            <path d="M11.5 9h-9c-.3 0-.5.2-.5.5s.2.5.5.5h9c.3 0 .5-.2.5-.5s-.2-.5-.5-.5z" />
        </g>
    </AccessibleSVG>
);

export default IconAllFiles;

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

const IconReports = ({ className = '', color = '#888888', height = 14, title, width = 12 }: Props) => (
    <AccessibleSVG
        className={`icon-reports ${className}`}
        title={title}
        width={width}
        height={height}
        viewBox="0 0 12 14"
    >
        <path
            className="fill-color"
            d="M1.5 13H1V2H.5c-.3 0-.5.2-.5.5v11c0 .3.2.5.5.5h9c.3 0 .5-.2.5-.5V13H1.5z"
            fill={color}
        />
        <path
            className="fill-color"
            d="M11.5 12h-9c-.3 0-.5-.2-.5-.5V.5c0-.3.2-.5.5-.5h6.8c.1 0 .3.1.3.1l2.2 2.2c.1.1.2.3.2.4v8.8c0 .3-.2.5-.5.5zM3 11h8V2.9L9.1 1H3v10z"
            fill={color}
        />
        <path
            className="fill-color"
            d="M9.5 7h-3c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h3c.3 0 .5.2.5.5s-.2.5-.5.5z"
            fill={color}
        />
        <path
            className="fill-color"
            d="M9.5 9h-3c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h3c.3 0 .5.2.5.5s-.2.5-.5.5z"
            fill={color}
        />
        <path
            className="fill-color"
            d="M6.5 3h-2c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h2c.3 0 .5.2.5.5s-.2.5-.5.5z"
            fill={color}
        />
        <path
            className="fill-color"
            d="M9.5 5h-3c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h3c.3 0 .5.2.5.5s-.2.5-.5.5z"
            fill={color}
        />
        <circle className="fill-color" cx="4.5" cy="4.5" r=".5" fill={color} />
        <circle className="fill-color" cx="4.5" cy="6.5" r=".5" fill={color} />
        <circle className="fill-color" cx="4.5" cy="8.5" r=".5" fill={color} />
    </AccessibleSVG>
);

export default IconReports;

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

const IconTrackPrevious = ({ className = '', color = '#999', height = 14, title, width = 14 }: Props) => (
    <AccessibleSVG
        className={`icon-track-previous ${className}`}
        title={title}
        width={width}
        height={height}
        viewBox="0 0 14 14"
    >
        <path
            className="fill-color"
            fill={color}
            d="M6.31 7.88l5 4.81a1 1 0 0 0 1.41 0A1 1 0 0 0 13 12V2.35a1 1 0 0 0-1-1 1 1 0 0 0-.69.28l-5 4.81a1 1 0 0 0 0 1.41zM2 1a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1 1 1 0 0 1-1-1V2a1 1 0 0 1 1-1z"
        />
    </AccessibleSVG>
);

export default IconTrackPrevious;

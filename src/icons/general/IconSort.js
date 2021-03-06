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

const IconSort = ({ className = '', color = '#222222', height = 13, title, width = 17 }: Props) => (
    <AccessibleSVG
        className={`icon-sort ${className}`}
        title={title}
        width={width}
        height={height}
        viewBox="0 0 17.49 13.49"
    >
        <path
            className="fill-color"
            fill={color}
            d="M8.48 4.24L4.74.5V.24h-.25L4.24 0 4 .24h-.26V.5L0 4.24l.71.71 3.03-3.04v11.33h1V1.91l3.04 3.04.7-.71m.52 5l3.74 3.74v.26H13l.24.24.24-.24h.26v-.26l3.74-3.74-.7-.7-3.04 3.03V.24h-1v11.33L9.71 8.54l-.71.7"
        />
    </AccessibleSVG>
);

export default IconSort;

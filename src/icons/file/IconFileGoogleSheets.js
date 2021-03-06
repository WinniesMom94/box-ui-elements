// @flow
import * as React from 'react';

import AccessibleSVG from '../accessible-svg';

type Props = {
    className?: string,
    height?: number,
    /** A text-only string describing the icon if it's not purely decorative for accessibility */
    title?: string | React.Element<any>,
    width?: number,
};

const IconFileGoogleSheets = ({ className = '', height = 32, title, width = 32 }: Props) => (
    <AccessibleSVG
        className={`icon-file-google-sheets ${className}`}
        title={title}
        width={width}
        height={height}
        viewBox="0 0 32 32"
    >
        <path d="M25 27H7V5h13l5 5z" fill="#fff" />
        <path
            d="M20 4H7a.94.94 0 0 0-1 1v22a.94.94 0 0 0 1 1h18a.94.94 0 0 0 1-1V9.9zm5 23H7V5h13v4a.94.94 0 0 0 1 1h4z"
            fill="#21a464"
        />
        <path
            d="M20 13h-9a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1zm-5 9h-4v-2h4zm0-3h-4v-2h4zm0-3h-4v-2h4zm5 6h-4v-2h4zm0-3h-4v-2h4zm0-3h-4v-2h4z"
            fill="#21a464"
        />
    </AccessibleSVG>
);

export default IconFileGoogleSheets;

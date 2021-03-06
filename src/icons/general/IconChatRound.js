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

const IconChatRound = ({ className = '', color = '#999', height = 24, title, width = 24 }: Props) => (
    <AccessibleSVG
        className={`icon-chat-round ${className}`}
        title={title}
        width={width}
        height={height}
        viewBox="0 0 24 24"
    >
        <path
            className="fill-color"
            fill={color}
            d="M14 3h-4a8 8 0 0 0-5 14.26V21a1 1 0 0 0 .08.37 1 1 0 0 0 1.31.53L12 19h2a8 8 0 0 0 0-16zm-6 9a1 1 0 1 1 1-1 1 1 0 0 1-1 1zm4 0a1 1 0 1 1 1-1 1 1 0 0 1-1 1zm4 0a1 1 0 1 1 1-1 1 1 0 0 1-1 1z"
        />
    </AccessibleSVG>
);

export default IconChatRound;

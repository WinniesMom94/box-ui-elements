// @flow
import * as React from 'react';

import AccessibleSVG from '../accessible-svg';
import { BOX_BLUE } from '../../common/variables';

type Props = {
    className?: string,
    color?: string,
    height?: number,
    /** A text-only string describing the icon if it's not purely decorative for accessibility */
    title?: string | React.Element<any>,
    width?: number,
};

const CollectionSidebarEmptyState = ({ className = '', color = BOX_BLUE, height = 70, title, width = 90 }: Props) => (
    <AccessibleSVG
        className={`collection-sidebar-empty-state ${className}`}
        title={title}
        height={height}
        viewBox="0 0 90 70"
        width={width}
    >
        <g fill="none" fillRule="evenodd">
            <g className="fill-color" fill={color}>
                <path d="M10.06 40.7v-.4c0-.16-.14-.3-.3-.3-.18 0-.32.13-.32.3v.4c-.1.06-.18.14-.23.24h-.4c-.16 0-.3.14-.3.3 0 .18.13.32.3.32h.4c.06.1.14.18.24.23v.4c0 .16.14.3.3.3.18 0 .32-.14.32-.3v-.4c.1-.06.18-.14.23-.24h.4c.16 0 .3-.14.3-.3 0-.18-.13-.32-.3-.32h-.4c-.06-.1-.14-.18-.24-.23zM86.06 42.7v-.4c0-.16-.14-.3-.3-.3-.18 0-.32.13-.32.3v.4c-.1.06-.18.14-.23.24h-.4c-.16 0-.3.14-.3.3 0 .18.13.32.3.32h.4c.06.1.14.18.24.23v.4c0 .16.14.3.3.3.18 0 .32-.14.32-.3v-.4c.1-.06.18-.14.23-.24h.4c.16 0 .3-.14.3-.3 0-.18-.13-.32-.3-.32h-.4c-.06-.1-.14-.18-.24-.23zM82.06 35.7v-.4c0-.16-.14-.3-.3-.3-.18 0-.32.13-.32.3v.4c-.1.06-.18.14-.23.24h-.4c-.16 0-.3.14-.3.3 0 .18.13.32.3.32h.4c.06.1.14.18.24.23v.4c0 .16.14.3.3.3.18 0 .32-.14.32-.3v-.4c.1-.06.18-.14.23-.24h.4c.16 0 .3-.14.3-.3 0-.18-.13-.32-.3-.32h-.4c-.06-.1-.14-.18-.24-.23zM5.5 48.13v-.64c0-.28-.23-.5-.5-.5-.28 0-.5.22-.5.5v.63c-.15.1-.28.22-.37.37H3.5c-.28 0-.5.23-.5.5 0 .28.22.5.5.5h.63c.1.15.22.28.37.37v.64c0 .28.23.5.5.5.28 0 .5-.23.5-.5v-.63c.15-.1.28-.22.37-.37h.64c.28 0 .5-.23.5-.5 0-.28-.22-.5-.5-.5h-.63c-.1-.15-.22-.28-.37-.37zM82.5 17.13v-.64c0-.28-.23-.5-.5-.5-.28 0-.5.22-.5.5v.63c-.15.1-.28.22-.37.37h-.64c-.28 0-.5.23-.5.5 0 .28.22.5.5.5h.63c.1.15.22.28.37.37v.64c0 .28.23.5.5.5.28 0 .5-.23.5-.5v-.63c.15-.1.28-.22.37-.37h.64c.28 0 .5-.23.5-.5 0-.28-.22-.5-.5-.5h-.63c-.1-.15-.22-.28-.37-.37zM7.5 24.13v-.64c0-.28-.23-.5-.5-.5-.28 0-.5.22-.5.5v.63c-.15.1-.28.22-.37.37H5.5c-.28 0-.5.23-.5.5 0 .28.22.5.5.5h.63c.1.15.22.28.37.37v.64c0 .28.23.5.5.5.28 0 .5-.23.5-.5v-.63c.15-.1.28-.22.37-.37h.64c.28 0 .5-.23.5-.5 0-.28-.22-.5-.5-.5h-.63c-.1-.15-.22-.28-.37-.37zM55.5 4.13V3.5c0-.28-.23-.5-.5-.5-.28 0-.5.22-.5.5v.63c-.15.1-.28.22-.37.37h-.64c-.28 0-.5.23-.5.5 0 .28.22.5.5.5h.63c.1.15.22.28.37.37v.64c0 .28.23.5.5.5.28 0 .5-.23.5-.5v-.63c.15-.1.28-.22.37-.37h.64c.28 0 .5-.23.5-.5 0-.28-.22-.5-.5-.5h-.63c-.1-.15-.22-.28-.37-.37z" />
            </g>
            <g transform="translate(13 12)">
                <path
                    className="stroke-color fill-white"
                    d="M0 1.2C0 .54.55 0 1.2 0h22.62c.66 0 1.43.48 1.7 1.1L28.1 6.6c.27.6-.05 1.08-.7 1.08H1.2C.52 7.7 0 7.18 0 6.5V1.2z"
                    stroke={color}
                    strokeWidth="2"
                    fill="#FFF"
                />
                <path
                    className="fill-color fill-opacity"
                    d="M1.43 2.74c0-.66.53-1.2 1.2-1.2h20.13c.66 0 1.4.5 1.65 1.1l2.3 5.5c.26.6-.07 1.1-.74 1.1H2.64c-.67 0-1.2-.52-1.2-1.2v-5.3z"
                    fillOpacity=".1"
                    fill={color}
                />
                <rect
                    className="stroke-color fill-white"
                    stroke={color}
                    strokeWidth="2"
                    fill="#FFF"
                    y="4.62"
                    width="64"
                    height="42.38"
                    rx="1.2"
                />
                <path
                    className="fill-color fill-opacity"
                    d="M1.6 36.02c0-.66.53-1.07 1.18-.94 0 0 2.9 1 19.1 1 10.05 0 14.52 2.65 20.25 2.65 11.6 0 19.17-3.45 19.17-3.45.6-.25 1.1.1 1.1.74v8.2c0 .65-.54 1.2-1.2 1.2H2.8c-.66 0-1.2-.55-1.2-1.2V36z"
                    fillOpacity=".1"
                    fill={color}
                />
            </g>
            <path
                className="stroke-color fill-white"
                d="M79.44 56.13l4.45 7.7c.27.48.1 1.1-.37 1.37l-2.06 1.2c-.47.26-1.1.1-1.37-.4l-4.44-7.7-4.17 2.42 2-10.5 10.1 3.5-4.16 2.4z"
                stroke={color}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="#FFF"
            />
        </g>
    </AccessibleSVG>
);

export default CollectionSidebarEmptyState;

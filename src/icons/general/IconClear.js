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

const IconClear = ({ className = '', color = '#AEAEAE', height = 12, title, width = 12 }: Props) => (
    <AccessibleSVG
        className={`icon-clear ${className}`}
        title={title}
        height={height}
        viewBox="0 0 12 13"
        width={width}
    >
        <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
            <g className="fill-color" fill={color} transform="translate(-1219.000000, -46.000000)">
                <g transform="translate(855.000000, 35.000000)">
                    <g>
                        <path d="M370,16.1907436 L372.023141,14.1676025 C372.246611,13.9441325 372.608928,13.9441325 372.832398,14.1676025 C373.055867,14.3910725 373.055867,14.7533889 372.832398,14.9768589 L370.809256,17 L372.832398,19.0231411 C373.055867,19.2466111 373.055867,19.6089275 372.832398,19.8323975 C372.608928,20.0558675 372.246611,20.0558675 372.023141,19.8323975 L370,17.8092564 L367.976859,19.8323975 C367.753389,20.0558675 367.391072,20.0558675 367.167602,19.8323975 C366.944133,19.6089275 366.944133,19.2466111 367.167602,19.0231411 L369.190744,17 L367.167602,14.9768589 C366.944133,14.7533889 366.944133,14.3910725 367.167602,14.1676025 C367.391072,13.9441325 367.753389,13.9441325 367.976859,14.1676025 L370,16.1907436 Z M370,23 C373.313708,23 376,20.3137085 376,17 C376,13.6862915 373.313708,11 370,11 C366.686292,11 364,13.6862915 364,17 C364,20.3137085 366.686292,23 370,23 Z" />
                    </g>
                </g>
            </g>
        </g>
    </AccessibleSVG>
);

export default IconClear;

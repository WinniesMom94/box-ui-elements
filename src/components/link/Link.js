// @flow
import * as React from 'react';

import LinkBase from './LinkBase';

type Props = {
    children: React.Node,
    className: string,
};

class Link extends React.Component<Props> {
    static defaultProps = {
        className: '',
    };

    render() {
        const { className, ...rest } = this.props;

        return <LinkBase className={`link ${className}`} {...rest} />;
    }
}

export default Link;

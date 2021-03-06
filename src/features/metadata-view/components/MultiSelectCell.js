/** @flow */
import * as React from 'react';

import type { CellData } from '../../metadata-instance-editor/flowTypes';

import '../styles/MetadataViewCell.scss';

type Props = {
    cellData: CellData,
};

const MultiselectCell = ({ cellData }: Props) => {
    return (
        <div className="cell-container">
            <span>{cellData.cellData}</span>
        </div>
    );
};

export default MultiselectCell;

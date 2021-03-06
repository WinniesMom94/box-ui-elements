/** @flow */
import * as React from 'react';

import IconItem from '../../../icons/item-icon/ItemIcon';
import type { CellData } from '../../metadata-instance-editor/flowTypes';

import '../styles/MetadataViewCell.scss';

type Props = {
    cellData: CellData,
};

const NameCell = ({ cellData }: Props) => {
    const { rowData } = cellData;
    return (
        <React.Fragment>
            <div className="cell-container item-name-cell-container">
                <div className="icon-cell-container">
                    <IconItem height={32} width={32} iconType={rowData.fileType} />
                </div>
                <div className="item-name-cell">
                    <span>{cellData.cellData}</span>
                </div>
            </div>
        </React.Fragment>
    );
};

export default NameCell;

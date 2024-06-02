import React from 'react';
import { ITableShimmer } from './ITableShimmer';
import style from './TableShimmer.module.scss';
import Shimmer from 'components/Shimmer/Shimmer';

const TableShimmer: React.FC<ITableShimmer> = ({ rowCount = 4, columnCount = 4 }) => {
  const rows = Array.from({ length: rowCount }, () => ({
    columns: Array.from({ length: columnCount }, () => ({})),
  }));

  return (
    <table className={style.tableContainer}>
      <tbody>
        {rows.map((row, rowIndex) => (
          <tr key={`shimmer-row-${rowIndex}`}>
            {row.columns.map((_, colIndex) => (
              <td key={`shimmer-cell${colIndex}`}>
                <Shimmer width="100%" height="10px"></Shimmer>
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableShimmer;

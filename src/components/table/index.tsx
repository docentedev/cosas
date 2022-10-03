import { useState } from "react";
import Loading from "./components/Loading";
import THead from "./components/THead";
import styles from './index.module.css';

export type ColumnProps = {
    key?: string;
    label?: string;
    renderRow?: (row: any) => any;
    renderVoid?: (row: any) => any | any;
    sort?: {
        ascText: string;
        descText: string;
    };
}

export type ColumnStrictProps = {
    key: string;
    label: string;
    internalKey: string;
    renderRow?: (row: any) => any;
    renderVoid?: (row: any) => any | any;
    isSort: boolean,
    sort?: {
        ascText: string;
        descText: string;
    };
}

type TableProps = {
    data: any[];
    loading?: boolean;
    columns: ColumnProps[];
    onClickRow?: (row: any, key: string, value: any) => void;
    onSort?: (sort: 'asc' | 'desc', column: ColumnStrictProps) => void;
}

const getDotValue = (row: any, key: string) => {
    try {
        return key.split('.').reduce((prev, curr) => {
            return prev[curr]
        }, row)
    } catch (error) {
        return undefined;
    }
}

const getValue = (row: any, column: ColumnStrictProps) => {
    const value = getDotValue(row, column.key);
    if (column.renderRow) return column.renderRow(row);
    if (value) return value;
    if (typeof column.renderVoid === 'function') return column.renderVoid(row);
    if (typeof column.renderVoid !== 'function' && column.renderVoid) return column.renderVoid
    return '-'
}

const propsTransform = (columns: ColumnProps[]): ColumnStrictProps[] => {
    return columns.map((column: ColumnProps, index: number) => ({
        ...column,
        isSort: !!column.sort,
        sort: column.sort,
        label: column.label || '',
        key: column.key || `__${index}__`,
        internalKey: `__${index}__${column.key || `${index}__`}`,
    }));
}

export type OrderState = {
    column: ColumnStrictProps;
    sort: 'asc' | 'desc';
}

/**
 * 
 * @example ```tsx
 * <Table
            columns={[{ key: 'user.name' }]}
            data={[{ user: { name: 'Claudio' } }]}
            loading={false}
            onClickRow={console.log}
        />
        ``` 
 * @returns 
 */
const Table = ({
    data,
    loading = false,
    columns,
    onClickRow = (_row: any, _key: string, _value: any) => { },
    onSort,
}: TableProps) => {
    const [orderState, setOrderState] = useState<OrderState | undefined>();
    const handleSort = (sort: 'asc' | 'desc', column: ColumnStrictProps) => {
        setOrderState({ sort, column })
        onSort && onSort(sort, column);
    }
    const columnsStrict: ColumnStrictProps[] = propsTransform(columns);
    return <div className={styles.container}>
        <table className={styles.table}>
            <THead
                columns={columnsStrict}
                onSort={handleSort}
                orderState={orderState}
            />
            <tbody>
                <Loading loading={loading}>
                    <>
                        {data.map((row: any, i: number) => (
                            <tr key={i}>
                                {columnsStrict.map((column: ColumnStrictProps, j: number) => {
                                    const value = getValue(row, column);
                                    return (
                                        <td
                                            key={j}
                                            onClick={() => onClickRow(row, column.key, value)}
                                        >{value}</td>
                                    )
                                })}
                            </tr>
                        ))}
                    </>
                </Loading>
            </tbody>
        </table>
    </div>
};

export default Table;
import { ColumnStrictProps, OrderState } from "..";
import TH from "./Th";

type THeadProps = {
    columns: ColumnStrictProps[];
    onSort?: (sort: 'asc' | 'desc', column: ColumnStrictProps) => void;
    orderState: OrderState | undefined;
}

const THead = ({
    columns,
    onSort,
    orderState,
}: THeadProps) => {
    const handlerSortClick = (sort: 'asc' | 'desc', column: ColumnStrictProps) => {
        onSort && onSort(sort, column);
    }
    return (
        <thead>
            <tr>
                {columns.map((column: ColumnStrictProps) => (
                    <TH
                        key={column.internalKey}
                        column={column}
                        onSortClick={(sort: 'asc' | 'desc') => handlerSortClick(sort, column)}
                        orderState={orderState}
                    />
                ))}
            </tr>
        </thead>
    )
};

export default THead;
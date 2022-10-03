import { ColumnStrictProps, OrderState } from "..";
import Sort from "./Sort";

type THProps = {
    column: ColumnStrictProps;
    onSortClick: (sort: 'asc' | 'desc') => void;
    orderState: OrderState | undefined;
}

const TH = ({
    column,
    onSortClick,
    orderState,
}: THProps) => {
    return (
        <th key={column.internalKey} data-order={!!column.isSort}>
            <div>{column.label}
                {column.sort && (<Sort
                    column={column}
                    onSortClick={onSortClick}
                    ascText={column.sort.ascText}
                    descText={column.sort.descText}
                    orderState={orderState}
                />)}
            </div>
        </th>
    );
};

export default TH;

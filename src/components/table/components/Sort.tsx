import { useRef, useState } from "react";
import styles from "../index.module.css";
import useClickOutside from "../../../hooks/useClickOutside";
import Icon from "../../icons";
import { ColumnStrictProps, OrderState } from "..";

type SortProps = {
    ascText: string;
    descText: string;
    onSortClick: (sort: 'asc' | 'desc') => void;
    orderState: OrderState | undefined;
    column: ColumnStrictProps;
}

const Sort = ({
    ascText,
    descText,
    onSortClick,
    orderState,
    column,
}: SortProps) => {
    const [open, setOpen] = useState(false);
    const ref = useRef<any>();
    useClickOutside(ref, () => setOpen(false));
    return (<span ref={ref}>
        <button onClick={() => setOpen(!open)}
            data-order={column.internalKey === orderState?.column.internalKey ? 'true' : 'false'}
        >
            <Icon
                name="Sort"
            />
        </button>
        {open && (
            <div className={styles.sort}>
                <button onClick={() => {
                    setOpen(false);
                    onSortClick('asc')
                }}
                    data-order={column.internalKey === orderState?.column.internalKey && orderState?.sort === 'asc' ? 'true' : 'false'}
                >{ascText}</button>
                <button onClick={() => {
                    setOpen(false);
                    onSortClick('desc')
                }}
                    data-order={column.internalKey === orderState?.column.internalKey && orderState?.sort === 'desc' ? 'true' : 'false'}
                >{descText}</button>
            </div>
        )
        }
    </span>)
};

export default Sort;

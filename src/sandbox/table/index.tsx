import { useEffect, useState } from "react";
import Button from "../../components/button";
import Icon from "../../components/icons";
import Table, { ColumnProps } from "../../components/table";

const TableSandbox = () => {
    const [data, setData] = useState<any[]>([])

    const columns: ColumnProps[] = [{
        key: 'id',
        label: 'Id',
        renderVoid: (row: any) => `-- VOID --`
    }, {
        key: 'id',
        renderRow: (row: any) => `-- ${row.id || 'Otra cosa'} --`,
        sort: {
            ascText: 'Arriba',
            descText: 'Abajo',
        },
    }, {
        label: '#Id',
        key: 'id',
        sort: {
            ascText: 'Ascendente',
            descText: 'Descendente',
        },
    }, {
        label: 'Nombre',
        key: 'user.name',
    }, {
        renderRow: (row: any) => (
        <Button
            iconLeft={<Icon />}
            size="xs"
            onClick={() => console.log(row)}
        >Click</Button>)
    }]

    useEffect(() => {
        setTimeout(() => {
            setData([
                { _id: Date.now() },
                { id: Date.now(), user: { name: 'Claudio'} },
                { id: Date.now() },
                { id: Date.now() },
            ])
        }, 500)
    }, [setData])
    return <div>
        <Table
            columns={columns}
            data={data}
            loading={data.length === 0}
            onSort={console.log}
            onClickRow={console.log}
        />
    </div>
};

export default TableSandbox;
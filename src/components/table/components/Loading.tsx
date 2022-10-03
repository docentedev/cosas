type LoadingProps = {
    loading: boolean;
    children: React.ReactElement;
}

const Loading = ({
    loading = false,
    children,
}: LoadingProps) => {
    return loading ? (
                    <tr>
                        <td>Loading...</td>
                    </tr>
                ) : children
};

export default Loading;
import React, { Suspense } from 'react';

const Icon = ({ color = 'inherit', size = 24, pointerEvents = 'none', name = 'Car' }: {
    pointerEvents?: 'auto' | 'none' | 'visiblePainted' | 'visibleFill' | 'visibleStroke' | 'visible' | 'painted' | 'fill' | 'stroke' | 'all' | 'inherit',
    color?: string,
    size?: number,
    name?: string,
}) => {
    const IconSvg = React.lazy(() => import(`./svg/${name}`));
    return (
        <i style={{
            width: `${size}px`,
            height: `${size}px`,
            fill: color,
            pointerEvents: pointerEvents,
            display: 'block',
        }}>
            <Suspense fallback={<i>...</i>}>
                <IconSvg />
            </Suspense>
        </i>
    )
}
export default Icon;
/*
const Icon = ({
    size = 200,
}: {
    size?: number,
}) => {
    return (
        <img
            src={Car}
            className={styles.icon}
            height={size}
            width={size}
            alt="website logo"
        />
    )
};

export default Icon;
*/

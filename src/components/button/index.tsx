import React from 'react';
import useWave from '../../hooks/useWave';
import styles from './index.module.css'

const Button = ({
    onClick,
    children,
    size = 's',
    disabled,
    iconLeft,
    iconRight,
    type,
    variant = 'primary',
    block,
    loading = false,
}: {
    onClick: (event: any) => void,
    children: any,
    size?: 's' | 'xs' | 'm' | 'l',
    disabled?: boolean,
    iconLeft?: any,
    iconRight?: any,
    type?: 'submit' | 'button',
    variant?: 'primary' | 'secondary' | 'ternary' | 'dashed',
    block?: boolean,
    loading?: boolean,
}) => {
    const ref = useWave();
    const getIconSize = () => {
        if (size === 'xs') return 16;
        if (size === 'm') return 24;
        if (size === 'l') return 27;
        return 20;
    }
    return (
        <button
            disabled={disabled}
            ref={ref}
            onClick={onClick}
            data-icon-left={iconLeft ? 'true' : 'false'}
            data-icon-right={iconRight ? 'true' : 'false'}
            data-loading={loading ? 'true' : 'false'}
            className={`${styles.button} ${styles[size]} ${styles[variant]} ${block ? styles.block : ''}`}
            type={type}
        >
            {iconLeft && (
                <span className={styles.iconLeft}>{React.cloneElement(iconLeft, {
                    size: getIconSize(),
                })}</span>
            )}
            {children}
            {iconRight && (
                <span className={styles.iconRight}>{React.cloneElement(iconRight, {
                    size: getIconSize(),
                })}</span>
            )}
        </button>
    )
}

export default Button;
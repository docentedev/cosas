import styles from './index.module.css';

type PeriodProps = {
    start: string
    end: string
}

const Period = ({ start, end }: PeriodProps) => {
    return (
        <div className={styles.jobPeriod}>
            <div className={styles.jobPeriodStart}>
                {start}
            </div>
            <div>-</div>
            <div className={styles.jobPeriodEnd}>
                {end}
            </div>
        </div>
    )
}

export default Period

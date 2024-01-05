import { FC } from "react";
import styles from "./analyticsCard.module.scss";

interface AnalyticsProps {
    icon: string;
    title: string;
    stats: string;
    theme: string;
}

const AnalyticsCard: FC<AnalyticsProps> = ({ theme, icon, title, stats }: AnalyticsProps) => {
    return (
        <div className={styles.Cards}>
            <div style={{ backgroundColor: theme }} className={styles.IconContainer}>
                <img src={icon} alt="" />
            </div>
            <h3 className={styles.Text}>{title}</h3>
            <h2 className={styles.staNumber}>{stats}</h2>
        </div>
    )
}

export default AnalyticsCard;
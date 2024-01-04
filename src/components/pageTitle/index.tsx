import styles from "./title.module.scss";

export const PageTitle = ({ title }: { title: string }) => {
    return (
        <h3 className={styles.pageTitle}>{title}</h3>
    )
}
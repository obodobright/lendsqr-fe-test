import styles from "./loader.module.scss";

export const PageLoader = () => {
    return (
        <section className={styles.loaderContainer}>
            <div className="lds-ripple">
                <div></div>
                <div></div>
            </div>
        </section>
    );
};

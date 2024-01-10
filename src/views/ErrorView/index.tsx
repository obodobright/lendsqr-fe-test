import styles from "./style.module.scss";
import { useRouter } from "next/router";
const RedirectView = () => {
    const router = useRouter();

    return (
        <section className={styles.errorContainer}>
            <h3>This page is not to be viewed</h3>
            <button onClick={() => router.push("/users")}>Go Back</button>
        </section>
    )
}

export default RedirectView;
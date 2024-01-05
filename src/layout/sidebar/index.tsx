import { navItems } from "@/helper/data";
import styles from "./sidebar.module.scss";
import Link from "next/link";

export const Sidebar = () => {

    return (
        <aside className={styles.sidebarContainer}>
            <div className={styles.navItemTop}>
                <img src="/asset/svg/swith.svg" alt="" />
                <h3>Switch Organization</h3>
                <img src="/asset/svg/arrow.svg" alt="arrow-icon" />

            </div>
            <ul className={styles.navItem}>
                <section className={styles.navLink}>
                    <img src="/asset/svg/dashboard.svg" alt="" />
                    <Link href="/dashboard">Dashboard</Link>
                </section>
                {navItems.map((nav, navIndex) => (
                    <li key={navIndex}>
                        <section className={styles.navHeader}>
                            <span>{nav.navTitle}</span>
                        </section>
                        <section>{nav.children?.map((navChild, navChildIndex) => (
                            <section className={styles.navLink} key={navChildIndex}>
                                <img src={navChild.icon} alt="" />
                                <Link href={navChild.link}>{navChild.navTitle}</Link>
                            </section>
                        ))}</section>
                    </li>
                ))}
            </ul>

        </aside>
    )
}
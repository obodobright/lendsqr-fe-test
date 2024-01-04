import { ReactNode } from "react";
import { Navbar } from "./navbar"
import { Sidebar } from "./sidebar";
import styles from "./layout.module.scss";

interface LayoutProps {
    children: ReactNode;
}
export const Layout = ({ children }: LayoutProps) => {
    return (
        <section className={styles.layoutContainer}>
            <Navbar />
            <div className={styles.layoutFlex}>
                <aside className={styles.sidebarWrapper}>
                    <Sidebar />
                </aside>
                <div className={styles.outsetWrapper}>{children}</div>
            </div>
        </section>
    )
}
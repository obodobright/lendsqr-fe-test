import { FC, useEffect, useRef, useState } from "react";
import styles from "./profile.module.scss";
import { MobileDropdown } from "../mobileNav/mobileDropdown";


export const ProfileTab: FC = () => {
    const [show, setShow] = useState(false)
    const menuRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        let handler = (e: MouseEvent) => {
            if (!menuRef.current?.contains(e.target as Node)) {
                setShow(false);
            }
        };
        document.addEventListener("mousedown", handler, true);

        return () => {
            document.removeEventListener("mousedown", handler);
        };
    }, []);

    return (
        <>
            <section ref={menuRef} className={styles.profileContainer}>
                <div className={styles.imgContainer}>
                    <img className={styles.mobile} onClick={() => setShow(!show)} src="/asset/png/profile.png" alt="" />
                    <img className={styles.webImg} src="/asset/png/profile.png" alt="" />
                </div>
                <span className={styles.profileName}>Adedeji</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.39229 12.0516C9.72823 12.425 10.2751 12.4219 10.6079 12.0516L13.4829 8.857C13.8188 8.48434 13.6852 8.182 13.1845 8.182H6.81567C6.31489 8.182 6.18363 8.48746 6.51723 8.857L9.39229 12.0516Z" fill="#213F7D" />
                </svg>

            </section>
            {show && <MobileDropdown />}
        </>
    )
}
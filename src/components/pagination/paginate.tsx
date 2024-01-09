import { useState } from "react";
import styles from "./style.module.scss";

export const Pagination = () => {
    return (
        <section className={styles.paginateContainer}>
            <div className={styles.leftWrapper}>
                <p>Showing</p>
                <div className={styles.select}>
                    <span>100</span>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g opacity="0.6">
                            <path d="M11.0573 3.99378C11.8984 3.15269 13.1595 4.45644 12.3184 5.25487L7.56759 10.0056C7.23127 10.3841 6.64282 10.3841 6.3065 10.0056L1.64002 5.38129C0.841037 4.5402 2.10267 3.27906 2.94322 4.1202L6.937 8.11398L11.0573 3.99378Z" fill="#213F7D" />
                        </g>
                    </svg>

                </div>
                <p>out of 100</p>
            </div>
            <div className={styles.rightWrapper}>
                <div className={styles.Icon}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <g opacity="0.6">
                            <path d="M10.0061 11.0573C10.8472 11.8984 9.54344 13.1595 8.745 12.3184L3.99424 7.56759C3.61581 7.23127 3.61581 6.64282 3.99424 6.3065L8.61858 1.64002C9.45967 0.841037 10.7208 2.10267 9.87967 2.94322L5.8859 6.937L10.0061 11.0573Z" fill="#213F7D" />
                        </g>
                    </svg>
                </div>
                <ul>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                </ul>
                <div className={styles.Icon}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M3.99391 2.94274C3.15281 2.10165 4.45656 0.840502 5.255 1.68165L10.0058 6.43241C10.3842 6.76873 10.3842 7.35718 10.0058 7.6935L5.38142 12.36C4.54033 13.159 3.27918 11.8973 4.12033 11.0568L8.1141 7.063L3.99391 2.94274Z" fill="#213F7D" />
                    </svg>
                </div>
            </div>
        </section>
    )
}
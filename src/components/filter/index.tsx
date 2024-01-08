import { useState, useRef, useEffect } from "react";
import styles from "./filter.module.scss";

const Filters = () => {

    const [inputType, setInputType] = useState('text');
    const handleFocus = () => {
        setInputType('date');
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        if (!e.target.value) {
            setInputType('text');
        }
    };

    return (
        <section>
            <section className={styles.filterContainer}>
                <section className={styles.inputHolder}>
                    <label htmlFor="">Organization</label>
                    <select>
                        <option value="">Select</option>
                    </select>
                </section>
                <section className={styles.inputHolder}>
                    <label htmlFor="">Username</label>
                    <input placeholder="User" type="text" />
                </section>
                <section className={styles.inputHolder}>
                    <label htmlFor="">Email</label>
                    <input placeholder="Email" type="text" />
                </section>
                <section className={styles.inputHolder}>
                    <label htmlFor="">Date</label>
                    <input name="date"
                        type={inputType}
                        onFocus={handleFocus}
                        onBlur={handleBlur} placeholder="Date" />
                </section>
                <section className={styles.inputHolder}>
                    <label htmlFor="">Phone Number</label>
                    <input placeholder="Phone Number" type="text" />
                </section>
                <section className={styles.inputHolder}>
                    <label htmlFor="">Status</label>
                    <select>
                        <option value="">Select</option>
                    </select>
                </section>
                <section className={styles.buttonHolder}>
                    <button className={styles.resetBtn}>Reset</button>
                    <button className={styles.filterBtn}>Filter</button>
                </section>
            </section>
        </section>

    )
}

export default Filters;
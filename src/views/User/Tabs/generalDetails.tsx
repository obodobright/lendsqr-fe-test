import TextH4 from "@/components/pageTitle/TextH4";
import styles from "../user.module.scss";

const GeneralDetails = () => {
    return (
        <section>
            <div>
                <TextH4 title="Personal Information" />
                <div className={styles.detailWrapper}>
                    <div className={styles.detailInfo}>
                        <h4>Full Name</h4>
                        <p>Grace Effiom</p>
                    </div>
                    <div className={styles.detailInfo}>
                        <h4>Phone Number</h4>
                        <p>07060780922</p>
                    </div>
                    <div className={styles.detailInfo}>
                        <h4>Email Address</h4>
                        <p>grace@gmail.com</p>
                    </div>
                    <div className={styles.detailInfo}>
                        <h4>Bvn</h4>
                        <p>07060780922</p>
                    </div>
                    <div className={styles.detailInfo}>
                        <h4>Gender</h4>
                        <p>Female</p>
                    </div>
                    <div className={styles.detailInfo}>
                        <h4>Marital status</h4>
                        <p>Single</p>
                    </div>
                    <div className={styles.detailInfo}>
                        <h4>Children</h4>
                        <p>None</p>
                    </div>
                    <div className={styles.detailInfo}>
                        <h4>Type of residence</h4>
                        <p>Parent’s Apartment</p>
                    </div>
                </div>
            </div>
            <div>
                <TextH4 title="Education and Employment" />
                <div className={styles.detailWrapper}>
                    <div className={styles.detailInfo}>
                        <h4>level of education</h4>
                        <p>B.Sc</p>
                    </div>
                    <div className={styles.detailInfo}>
                        <h4>employment status</h4>
                        <p>Employed</p>
                    </div>
                    <div className={styles.detailInfo}>
                        <h4>sector of employment</h4>
                        <p>FinTech</p>
                    </div>
                    <div className={styles.detailInfo}>
                        <h4>Duration of employment</h4>
                        <p>2 years</p>
                    </div>
                    <div className={styles.detailInfo}>
                        <h4>office email</h4>
                        <p>grace@lendsqr.com</p>
                    </div>
                    <div className={styles.detailInfo}>
                        <h4>Monthly income</h4>
                        <p>₦200,000.00- ₦400,000.00</p>
                    </div>
                    <div className={styles.detailInfo}>
                        <h4>loan repayment</h4>
                        <p>40,000</p>
                    </div>

                </div>
            </div>
            <div>
                <TextH4 title="Socials" />
                <div className={styles.detailWrapper}>
                    <div className={styles.detailInfo}>
                        <h4>Twitter</h4>
                        <p>@grace_effiom</p>
                    </div>
                    <div className={styles.detailInfo}>
                        <h4>Facebook</h4>
                        <p>Grace Effiom</p>
                    </div>
                    <div className={styles.detailInfo}>
                        <h4>Instagram</h4>
                        <p>@grace_effiom</p>
                    </div>
                </div>
            </div>
            <div>
                <TextH4 title="Guarantor" />
                <div className={styles.detailWrapper}>
                    <div className={styles.detailInfo}>
                        <h4>full Name</h4>
                        <p>Debby Ogana</p>
                    </div>
                    <div className={styles.detailInfo}>
                        <h4>Phone Number</h4>
                        <p>07060780922</p>
                    </div>
                    <div className={styles.detailInfo}>
                        <h4>Email Address</h4>
                        <p>debby@gmail.com</p>
                    </div>
                    <div className={styles.detailInfo}>
                        <h4>Relationship</h4>
                        <p>Sister</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default GeneralDetails;
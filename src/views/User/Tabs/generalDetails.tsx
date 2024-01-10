import TextH4 from "@/components/pageTitle/TextH4";
import styles from "../user.module.scss";
import { IUserProp } from "@/types";
import { WithCommas } from "@/helper/utils";

interface IDetails {
    userDetails: IUserProp | undefined
}

const GeneralDetails = ({ userDetails }: IDetails) => {
    return (
        <section>
            <div>
                <TextH4 title="Personal Information" />
                <div className={styles.detailWrapper}>
                    <div className={styles.detailInfo}>
                        <h4>Full Name</h4>
                        <p>{`${userDetails?.profile?.firstName} ${userDetails?.profile?.lastName}`}</p>
                    </div>
                    <div className={styles.detailInfo}>
                        <h4>Phone Number</h4>
                        <p>{userDetails?.phoneNumber}</p>
                    </div>
                    <div className={styles.detailInfo}>
                        <h4>Email Address</h4>
                        <p>{userDetails?.email?.substring(0, 20)}..</p>
                    </div>
                    <div className={styles.detailInfo}>
                        <h4>Bvn</h4>
                        <p>{userDetails?.profile?.bvn}</p>
                    </div>
                    <div className={styles.detailInfo}>
                        <h4>Gender</h4>
                        <p>{userDetails?.profile?.gender}</p>
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
                        <p>{userDetails?.education?.level}</p>
                    </div>
                    <div className={styles.detailInfo}>
                        <h4>employment status</h4>
                        <p>{userDetails?.education?.employmentStatus}</p>
                    </div>
                    <div className={styles.detailInfo}>
                        <h4>sector of employment</h4>
                        <p>{userDetails?.education?.sector}</p>
                    </div>
                    <div className={styles.detailInfo}>
                        <h4>Duration of employment</h4>
                        <p>{userDetails?.education?.duration}</p>
                    </div>
                    <div className={styles.detailInfo}>
                        <h4>office email</h4>
                        <p>{userDetails?.education?.officeEmail}</p>
                    </div>
                    <div className={styles.detailInfo}>
                        <h4>Monthly income</h4>
                        <p>{`₦${WithCommas(userDetails?.education?.monthlyIncome[0]!)} - ₦${WithCommas(userDetails?.education?.monthlyIncome[1]!)}`}</p>
                    </div>
                    <div className={styles.detailInfo}>
                        <h4>loan repayment</h4>
                        <p>₦{WithCommas(userDetails?.education?.loanRepayment!)}</p>
                    </div>

                </div>
            </div>
            <div>
                <TextH4 title="Socials" />
                <div className={styles.detailWrapper}>
                    <div className={styles.detailInfo}>
                        <h4>Twitter</h4>
                        <p>{userDetails?.socials?.twitter}</p>
                    </div>
                    <div className={styles.detailInfo}>
                        <h4>Facebook</h4>
                        <p>{userDetails?.socials?.facebook}</p>
                    </div>
                    <div className={styles.detailInfo}>
                        <h4>Instagram</h4>
                        <p>{userDetails?.socials?.instagram}</p>
                    </div>
                </div>
            </div>
            <div>
                <TextH4 title="Guarantor" />
                <div className={styles.detailWrapper}>
                    <div className={styles.detailInfo}>
                        <h4>full Name</h4>
                        <p>{`${userDetails?.guarantor?.firstName} ${userDetails?.guarantor?.lastName}`}</p>
                    </div>
                    <div className={styles.detailInfo}>
                        <h4>Phone Number</h4>
                        <p>{userDetails?.guarantor?.phoneNumber}</p>
                    </div>
                    <div className={styles.detailInfo}>
                        <h4>Email Address</h4>
                        <p>{userDetails?.guarantor?.address}</p>
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
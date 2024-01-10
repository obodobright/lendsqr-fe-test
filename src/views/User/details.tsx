import { useEffect, useState } from "react";
import PageTitle from "@/components/pageTitle";
import styles from "./user.module.scss";
import GeneralDetails from "./Tabs/generalDetails";
import TextH4 from "@/components/pageTitle/TextH4";
import { useRouter } from "next/router";
import { useGetUserDetails } from "@/hooks/useGetUser";
import { PageLoader } from "@/components/Loader";
const UserDetails = () => {
    const router = useRouter();
    const query = router.query.id;
    const { details, loading, getUsersDetails } = useGetUserDetails();
    const [currIndex, setCurrIndex] = useState(0)
    const tabs = ["General Details", "Documents", "Bank Details", "Loans", "Savings", "App and System"]
    console.log(query, "some query")
    // render different component based on different conditions
    const renderContent = () => {
        switch (currIndex) {
            case 0:
                return <GeneralDetails userDetails={details} />
                break;
            case 1:
                return <> <TextH4 title="Document" /></>
                break;
            case 2:
                return <> <TextH4 title="Bank Details" /></>
                break;
            case 3:
                return <> <TextH4 title="Savings" /></>
                break;
            case 4:
                return <> <TextH4 title="Loans" /></>
                break
            case 5:
                return <> <TextH4 title="App and Settings" /></>
                break;
            default:
                return <></>
        }
    }

    // API TO FETCH ALL USERS
    useEffect(() => {
        if (router.isReady) {
            getUsersDetails(query)
        }

    }, [query])

    return <section className={styles.detailsContainer}>
        <div onClick={() => router.back()} role="button" className={styles.topFlex}>
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.94997 15.3564C1.9945 15.4712 2.0613 15.5767 2.14684 15.6658L5.89684 19.4157C6.07263 19.5927 6.31285 19.6935 6.56248 19.6935C6.81211 19.6935 7.05232 19.5927 7.22812 19.4157C7.40508 19.24 7.50586 18.9997 7.50586 18.7501C7.50586 18.5005 7.40508 18.2603 7.22812 18.0845L5.07187 15.9376H27.6562C28.1742 15.9376 28.5937 15.5181 28.5937 15.0001C28.5937 14.4821 28.1742 14.0626 27.6562 14.0626H5.07187L7.22812 11.9158C7.5961 11.5478 7.5961 10.9525 7.22812 10.5845C6.86014 10.2165 6.26485 10.2165 5.89687 10.5845L2.14687 14.3345C2.06133 14.4236 1.99453 14.529 1.95 14.6439C1.90195 14.7564 1.87617 14.8771 1.875 15.0001C1.87617 15.1232 1.90195 15.2439 1.95 15.3564L1.94997 15.3564Z" fill="#545F7D" />
            </svg>

            <span>Back to Users</span>
        </div>
        {
            loading ? <PageLoader /> : <>

                <div className={styles.pageHeaderContainer}>
                    <PageTitle title="User Details" />
                    <div className={styles.btnHolder}>
                        <button className={styles.btnBlacklst}>Blacklist User </button>
                        <button className={styles.btnActivate}>Activate User </button>
                    </div>
                </div>
                <div className={styles.userProfile}>
                    <div className={styles.profileContainer}>
                        <div className={styles.userContainer}>
                            <div className={styles.iconHolder}>
                                {details?.profile?.avatar ? <img src={details?.profile?.avatar} alt="" /> : <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                    <path d="M6.04053 35.1796C6.47961 32.2202 7.79365 29.6264 9.97961 27.4C12.7405 24.6 16.0732 23.2 19.9796 23.2C23.886 23.2 27.2204 24.6 29.9796 27.4C32.1796 29.6266 33.5062 32.2204 33.9593 35.1796M28.1405 14.0204C28.1405 16.247 27.3468 18.1532 25.7593 19.7408C24.1734 21.3408 22.253 22.1408 20.0001 22.1408C17.7594 22.1408 15.8409 21.3408 14.2409 19.7408C12.6534 18.1533 11.8596 16.247 11.8596 14.0204C11.8596 11.7673 12.6534 9.84679 14.2409 8.25959C15.8409 6.67367 17.7596 5.87991 20.0001 5.87991C22.2532 5.87991 24.1737 6.67367 25.7593 8.25959C27.3468 9.84711 28.1405 11.7674 28.1405 14.0204Z" stroke="#213F7D" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>}

                            </div>
                            <div className={styles.userName}>
                                <h3>{`${details?.profile?.firstName} ${details?.profile?.lastName}`}</h3>
                                <p>{details?.accountNumber}</p>
                            </div>
                        </div>
                        <div className={styles.userRating}>
                            <h3>User’s Tier</h3>
                            <div><img src="/asset/svg/np_star_solid.svg" alt="" />
                                <img src="/asset/svg/np_star.svg" alt="" />
                                <img src="/asset/svg/np_star.svg" alt="" />
                            </div>
                        </div>
                        <div className={styles.userBank}>
                            <h3>₦{details?.accountBalance}</h3>
                            <p>{`${details?.profile?.bvn}/Providus Bank`}</p>
                        </div>
                    </div>
                    <div className={styles.tabsContainer}>
                        {tabs.map((el, elIndex) => (
                            <div onClick={() => setCurrIndex(elIndex)} style={currIndex === elIndex ? {
                                borderBottom: "2px solid #39cdcc", color: "#39cdcc"
                            } : { color: " rgba(0, 0, 0, 0.8)" }} className={styles.tabsItems} key={elIndex}>{el}</div>
                        ))}

                    </div>
                </div>
                <div className={styles.userDetailContainer}>
                    {renderContent()}
                </div>
            </>
        }
    </section>
}

export default UserDetails;
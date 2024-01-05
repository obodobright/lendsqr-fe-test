import AnalyticsCard from "@/components/cards/AnalyticsCard";
import PageTitle from "@/components/pageTitle";
import { FC } from "react";
import styles from "./user.module.scss";
import { AnalyticsData } from "@/helper/data";
import Table from "@/components/table";
import { userData } from "@/helper/data";
const UserViews: FC = () => {
    const header = ["Organization", "Username", "Email", "Phone Number", "Date Joined", "Status"]
    return (
        <section className={styles.userContainer}>
            <PageTitle title="Users" />
            <section className={styles.cardContainer}>
                {AnalyticsData.map((el, elIndex) => (
                    <AnalyticsCard theme={el.theme} title={el.title} stats={el.stats} icon={el.icon} key={elIndex} />
                ))}
            </section>
            <section>
                <Table header={header} userData={userData} />
            </section>
        </section>
    )
}
export default UserViews;
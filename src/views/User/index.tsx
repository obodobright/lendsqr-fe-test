import AnalyticsCard from "@/components/cards/AnalyticsCard";
import PageTitle from "@/components/pageTitle";
import { FC, useEffect, useMemo, useState } from "react";
import styles from "./user.module.scss";
import { AnalyticsData } from "@/helper/data";
import Table from "@/components/table";
import { userData } from "@/helper/data";
import { Pagination } from "@/components/pagination/paginate";
import { useGetUsers } from "@/hooks/useGetUser";
// import Pagination from "@/components/pagination";
const UserViews: FC = () => {
    const { user, getUsers, loading } = useGetUsers()
    const [currPage, setCurrPage] = useState(1);
    const [perPage, setPerPage] = useState(10);

    const lastPageIndex = currPage * perPage;
    const firstPageIndex = lastPageIndex - perPage;
    const currentUserData = user.slice(firstPageIndex, lastPageIndex);

    console.log(currentUserData, "CURRENT DATA")

    const header = ["Organization", "Username", "Email", "Phone Number", "Date Joined", "Status"]


    useEffect(() => {
        getUsers();
    }, [])

    return (
        <section className={styles.userContainer}>
            <PageTitle title="Users" />
            <section className={styles.cardContainer}>
                {AnalyticsData.map((el, elIndex) => (
                    <AnalyticsCard theme={el.theme} title={el.title} stats={el.stats} icon={el.icon} key={elIndex} />
                ))}
            </section>
            <section>
                <Table header={header} userData={currentUserData} />
            </section>
            <Pagination />
        </section>
    )
}
export default UserViews;
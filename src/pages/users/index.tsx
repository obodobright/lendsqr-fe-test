import PageTitle from "@/components/pageTitle";
import { Layout } from "@/layout";
import UserViews from "@/views/User";

export default function UserRoute() {
    return (
        <Layout>
            <UserViews />
        </Layout>
    )
}
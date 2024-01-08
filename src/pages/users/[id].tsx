import PageTitle from "@/components/pageTitle";
import { Layout } from "@/layout";
import UserDetails from "@/views/User/details";

export default function UserRoute() {
  return (
    <Layout>
      <UserDetails />
    </Layout>
  );
}

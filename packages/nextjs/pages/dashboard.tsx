import type { NextPage } from "next";
import { MetaHeader } from "~~/components/MetaHeader";
import Layout from "~~/components/Layout";
import ProfileHero from "~~/components/dashboard/ProfileHero";
import ProfileContent from "~~/components/dashboard/ProfileContent";


const Dashboard: NextPage = () => {
  return (
    <Layout>
      <MetaHeader/>
        <div className="">
            <ProfileHero/>
            <ProfileContent/>
        </div>
    </Layout>
  );
};

export default Dashboard;

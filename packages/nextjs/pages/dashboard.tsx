import type { NextPage } from "next";
import Layout from "~~/components/Layout";
import { MetaHeader } from "~~/components/MetaHeader";
import ProfileContent from "~~/components/dashboard/ProfileContent";
import ProfileHero from "~~/components/dashboard/ProfileHero";

const Dashboard: NextPage = () => {
  return (
    <Layout>
      <MetaHeader />
      <div className="">
        <ProfileHero />
        <ProfileContent />
      </div>
    </Layout>
  );
};

export default Dashboard;

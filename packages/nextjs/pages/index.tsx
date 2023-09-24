import type { NextPage } from "next";
import Layout from "~~/components/Layout";
import { MetaHeader } from "~~/components/MetaHeader";
import HomeSection from "~~/components/landing/Home";

const Home: NextPage = () => {
  return (
    <Layout>
      <MetaHeader />
      <HomeSection />
    </Layout>
  );
};

export default Home;

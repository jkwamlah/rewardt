import type { NextPage } from "next";
import Layout from "~~/components/Layout";
import { MetaHeader } from "~~/components/MetaHeader";
import Features from "~~/components/landing/Features";
import HomeSection from "~~/components/landing/Home";
import HowItWorks from "~~/components/landing/HowItWorks";
import Statistics from "~~/components/landing/Statistics";

const Home: NextPage = () => {
  return (
    <Layout>
      <MetaHeader />
      <HomeSection />
      <div id="features" className="">
        <Features />
        <Statistics />
      </div>
      <div id="how-it-works" className="">
        <HowItWorks />
      </div>
    </Layout>
  );
};

export default Home;

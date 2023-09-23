import type {NextPage} from "next";
import {MetaHeader} from "~~/components/MetaHeader";
import HomeSection from "~~/components/landing/Home";
import Layout from "~~/components/Layout";

const Home: NextPage = () => {
    return (
        <Layout>
            <MetaHeader/>
            <HomeSection/>
        </Layout>
    );
};

export default Home;

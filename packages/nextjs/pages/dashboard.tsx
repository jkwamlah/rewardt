import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import type { NextPage } from "next";
import { useAccount } from "wagmi";
import Layout from "~~/components/Layout";
import { MetaHeader } from "~~/components/MetaHeader";
import ProfileContent from "~~/components/dashboard/ProfileContent";
import ProfileHero from "~~/components/dashboard/ProfileHero";

const Dashboard: NextPage = () => {
  const router = useRouter();

  const account = useAccount();
  const [isConnected, setIsConnected] = useState(account.isConnected);

  useEffect(() => {
    setIsConnected(account.isConnected);
    if (!isConnected) {
      router.push("/login");
    }
  }, [account.isConnected, router]);

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

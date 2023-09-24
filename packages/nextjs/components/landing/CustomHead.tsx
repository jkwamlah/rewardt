import React from "react";
import Head from "next/head";

const CustomHead: React.FC = () => {
  return (
    <Head>
      <meta charSet="utf-8" />
      <title>Rewardt</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta content="Student Reward Sytem" name="description" />
      <meta content="Rewardt" name="author" />
      <link rel="shortcut icon" href="/assets/images/favicon.ico" />
    </Head>
  );
};

export default CustomHead;

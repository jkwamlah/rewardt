import React from "react";
import Head from "next/head";

const CustomHead: React.FC = () => {
    return (
        <Head>
            <meta charSet="utf-8"/>
            <title>Rewardt</title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <meta content="Student Reward Sytem" name="description"/>
            <meta content="Rewardt" name="author"/>
            <link rel="shortcut icon" href="assets/images/favicon.ico"/>

            <link href="assets/libs/tiny-slider/tiny-slider.css" rel="stylesheet"/>
            <link href="assets/libs/tobii/css/tobii.min.css" rel="stylesheet"/>
            <link href="assets/css/bootstrap-yellow.min.css" id="bootstrap-style" className="theme-opt"
                  rel="stylesheet" type="text/css"/>
            <link href="assets/libs/%40mdi/font/css/materialdesignicons.min.css" rel="stylesheet"
                  type="text/css"/>
            <link href="assets/libs/%40iconscout/unicons/css/line.css" type="text/css" rel="stylesheet"/>
            <link href="assets/css/style-yellow.min.css" id="color-opt" className="theme-opt"
                  rel="stylesheet" type="text/css"/>
        </Head>
    );
};

export default CustomHead;

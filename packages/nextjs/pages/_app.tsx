import { useEffect, useState } from "react";
import type { AppProps } from "next/app";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { RainbowKitProvider, darkTheme, lightTheme } from "@rainbow-me/rainbowkit";
import "@rainbow-me/rainbowkit/styles.css";
import NextNProgress from "nextjs-progressbar";
import { useDarkMode } from "usehooks-ts";
import { WagmiConfig } from "wagmi";
import { BlockieAvatar } from "~~/components/scaffold-eth";
import { useNativeCurrencyPrice } from "~~/hooks/scaffold-eth";
import "~~/public/assets/css/bootstrap.min.css";
import "~~/public/assets/css/style.min.css";
import { useGlobalState } from "~~/services/store/store";
import { wagmiClient } from "~~/services/web3/wagmiClient";
import { appChains } from "~~/services/web3/wagmiConnectors";

const ScaffoldEthApp = ({ Component, pageProps }: AppProps) => {
  const price = useNativeCurrencyPrice();
  const setNativeCurrencyPrice = useGlobalState(state => state.setNativeCurrencyPrice);
  // This variable is required for initial client side rendering of correct theme for RainbowKit
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const { isDarkMode } = useDarkMode();

  const subgraphUri = "http://localhost:8000/subgraphs/name/scaffold-eth/your-contract";
  const apolloClient = new ApolloClient({
    uri: subgraphUri,
    cache: new InMemoryCache(),
  });

  useEffect(() => {
    if (price > 0) {
      setNativeCurrencyPrice(price);
    }
  }, [setNativeCurrencyPrice, price]);

  useEffect(() => {
    setIsDarkTheme(isDarkMode);
  }, [isDarkMode]);

  return (
    <ApolloProvider client={apolloClient}>
      <WagmiConfig client={wagmiClient}>
        <NextNProgress />
        <RainbowKitProvider
          chains={appChains.chains}
          avatar={BlockieAvatar}
          theme={isDarkTheme ? darkTheme() : lightTheme()}
          coolMode={true}
          appInfo={{
            appName: "Rewardt Dapp",
            learnMoreUrl: "https://learnaboutcryptowallets.example",
          }}
          showRecentTransactions={true}
        >
          <div className="flex flex-col min-h-screen">
            <main className="relative flex flex-col flex-1">
              <Component {...pageProps} />
            </main>
          </div>
        </RainbowKitProvider>
      </WagmiConfig>
    </ApolloProvider>
  );
};

export default ScaffoldEthApp;

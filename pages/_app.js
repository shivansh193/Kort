import "../styles/globals.css";
import "@rainbow-me/rainbowkit/styles.css";

import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { chain, configureChains, createClient, WagmiConfig } from "wagmi";
import { publicProvider } from "wagmi/providers/public";

const { chains, provider } = configureChains(
  [chain.polygonMumbai],
  [
    jsonRpcProvider({
      rpc: (chain) => ({
        http: `${process.env.NEXT_PUBLIC_QUICKNODE_HTTP}`,
        webSocket: `${process.env.NEXT_PUBLIC_QUICKNODE_WS}`,
      }),
    }),
  ]
);

/* const { chains, provider } = configureChains(
  [chain.polygonMumbai],
  [
    jsonRpcProvider({
      rpc: (chain) => ({
        http: `${process.env.NEXT_PUBLIC_INFURA_HTTP}`,
        webSocket: `${process.env.NEXT_PUBLIC_INFURA_WS}`,
      }),
    }),
  ]
); */

const { connectors } = getDefaultWallets({
  appName: "Kort",
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

function MyApp({ Component, pageProps }) {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains}>
        <Component {...pageProps} />
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default MyApp;

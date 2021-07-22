import "../styles/index.css";

import { AppProps } from "next/app";
import { SaleorProvider, createSaleorClient } from "@saleor/sdk";
import dynamic from "next/dynamic";

const sdkConfig = {
  apiUrl: process.env.NEXT_PUBLIC_API_URI,
  channel: process.env.NEXT_PUBLIC_DEFAULT_CHANNEL
};

export const saleorClient = createSaleorClient(sdkConfig);

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <SaleorProvider client={saleorClient}>
      <Component {...pageProps} />
    </SaleorProvider>
  );
};

export default dynamic(() => Promise.resolve(App), {
  ssr: false
});

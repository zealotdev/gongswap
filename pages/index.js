import Head from 'next/head';
import tw, { css } from 'twin.macro';
import {
  Campaign,
  Features,
  Main,
  Navbar,
  Roadmap,
  Showcase,
  Tokenomics,
  Footer,
} from '../components';

export default function Home() {
  return (
    <div>
      <Head key={'index'}>
        <title>One Stop BSC Swap | Top Token Rates and Fees | gongSwap</title>
        <meta
          name="description"
          content="gongSwap a One Stop BSC Swap Destination"
        />
        <meta
          name="description"
          content="One Stop BSC Swap | Top Token Rates and Fees | Exchange gongToken with other crypto assets instantaneously."
        />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="One Stop BSC Swap | Top Token Rates and Fees | gongSwap"
        />
        <meta property="og:site_name" content="gongSwap" />
        <meta property="og:url" content="https://gongswap.finance" />
        <meta
          property="og:description"
          content="One Stop BSC Swap | Top Token Rates and Fees | Exchange gongToken with other crypto assets instantaneously"
        />
        <link rel="canonical" href="https://gongswap.finance" />

        <link rel="icon" href="/images/logo.png" />
      </Head>

      <main css={tw`mx-auto w-5/6 lg:w-4/6`}>
        {/* Header Section */}
        <Navbar />
        {/* Main Section */}
        <Main />
        {/* Features */}
        <Showcase />
        {/* Campaign */}
        <Campaign />
        {/* Features */}
        <Features />
        {/* Tokenomics */}
        <Tokenomics />
        {/* Roadmap */}
        <Roadmap />
        {/* Footer Section */}
        <Footer />
      </main>
    </div>
  );
}

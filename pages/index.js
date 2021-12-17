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
      <Head>
        <title>One Stop BSC Swap | Top Token Rates and Fees | gongSwap</title>
        <meta
          name="description"
          content="gongSwap a One Stop BSC Swap Destination"
        />
        <link rel="icon" href="/favicon.ico" />
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

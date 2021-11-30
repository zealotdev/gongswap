import Head from 'next/head';
import { Navbar } from '../components';

export default function Home() {
  return (
    <div>
      <Head>
        <title>On Stop BSC Swap | Top Token Rates and Fees | gongSwap</title>
        <meta
          name="description"
          content="gongSwap a One Stop BSC Swap Destination"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {/* Header Section */}
        <Navbar />

        {/* Body Section */}
        {/* Details Section */}
        {/* Footer Section */}
      </main>
    </div>
  );
}

import Head from 'next/head';
import { Main, Navbar } from '../components';

export default function Swap() {
  return (
    <div>
      <Head>
        <title>gongSwap | Happy Swapping!</title>
        <meta
          name="description"
          content="gongSwap a One Stop BSC Swap Destination"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {/* Header Section */}
        <Navbar />
        {/* Main Section */}
        <Main />
        {/* Details Section */}
        {/* Footer Section */}
      </main>
    </div>
  );
}

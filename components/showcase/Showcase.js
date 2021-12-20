import Link from 'next/link';
import tw, { css } from 'twin.macro';

export default function Showcase() {
  return (
    <div
      css={tw`mt-20 md:mt-32 flex-col space-y-6 md:space-y-0 md:flex md:flex-row md:justify-between`}
      id="showcase"
    >
      <div
        className="feature-box"
        css={tw`text-right border-2 justify-end rounded flex-col p-2 py-1 text-gray-200 shadow-xl`}
      >
        <h3 css={tw` text-xl`}>SWAP</h3>
        <ul css={tw`list-none text-right font-light`}>
          <li>Lorem ipsum dolor sit.</li>
          <li>Lorem ipsum dolor sit.</li>
          <li>Lorem ipsum dolor sit.</li>
        </ul>
        <Link href="/">
          <a css={tw`text-yellow-600 cursor-pointer`}>Learn more {`>`} </a>
        </Link>
      </div>
      <div
        className="feature-box"
        css={tw`text-right border-2 justify-end rounded flex-col p-2 text-gray-200 shadow-xl`}
      >
        <h3 css={tw` text-xl`}>NFT</h3>
        <ul css={tw`list-none text-right font-light`}>
          <li>Lorem ipsum dolor sit.</li>
          <li>Lorem ipsum dolor sit.</li>
          <li>Lorem ipsum dolor sit.</li>
        </ul>
        <Link href="/">
          <a css={tw`text-yellow-600 cursor-pointer`}>Learn more {`>`} </a>
        </Link>
      </div>
      <div
        className="feature-box"
        css={tw`text-right border-2 justify-end rounded flex-col p-2 text-gray-200 shadow-xl`}
      >
        <h3 css={tw` text-xl`}>IDO</h3>
        <ul css={tw`list-none text-right font-light`}>
          <li>Lorem ipsum dolor sit.</li>
          <li>Lorem ipsum dolor sit.</li>
          <li>Lorem ipsum dolor sit.</li>
        </ul>
        <Link href={'/'}>
          <a css={tw`text-yellow-600 cursor-pointer cursor-pointer`}>
            Learn more {`>`}{' '}
          </a>
        </Link>
      </div>
    </div>
  );
}

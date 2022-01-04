import tw, { css } from 'twin.macro';
import Link from 'next/link';
import Image from 'next/image';

export default function LargeNav() {
  return (
    <div css={tw`hidden md:flex justify-between z-50`}>
      <Link href={'/'}>
        <a css={tw`flex items-center text-yellow-600 cursor-pointer`}>
          <Image
            src="/images/logo.png"
            alt="gongSwap logo"
            width={40}
            height={40}
          />
          <span css={tw`font-bold`}>GONGSWAP</span>
        </a>
      </Link>
      <ul css={tw`flex list-none space-x-8 text-yellow-600`}>
        <li css={tw`cursor-pointer`}>
          <Link href={'/'}>
            <a css={tw`cursor-pointer`}>Home</a>
          </Link>
        </li>
        <li>
          <Link href={'/#tokenomics'}>
            <a>Tokenomics</a>
          </Link>
        </li>
        <li>
          <Link href={'/#roadmap'}>
            <a>Roadmap</a>
          </Link>
        </li>
        <li>
          <Link href={'/'}>
            <a>Swap</a>
          </Link>
        </li>
        <li>
          <Link href={'/'}>
            <a>NFTs</a>
          </Link>
        </li>
        <li>
          <Link href={'/'}>
            <a>IDO</a>
          </Link>
        </li>
        <li>
          <Link href={'/'}>
            <a>
              <button
                css={tw`text-white bg-yellow-600 py-2 px-3 rounded cursor-pointer hover:bg-yellow-500 border-0`}
              >
                Join Airdrop
              </button>
            </a>
          </Link>
        </li>
      </ul>
    </div>
  );
}

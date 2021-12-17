import tw, { css } from 'twin.macro';
import Link from 'next/link';
import Image from 'next/Image';
import { useState } from 'react';

export default function MobileNav() {
  const [openedMenu, setOpenedMenu] = useState(false);

  return (
    <div css={tw`flex justify-between md:hidden`}>
      <Link href="/">
        <a css={tw`flex items-center text-yellow-600 cursor-pointer`}>
          <Image
            src="/images/logo.png"
            alt="gongSwap logo"
            width={30}
            height={30}
          />
          <span css={tw`font-bold text-sm`}>GONGSWAP</span>
        </a>
      </Link>
      {!openedMenu && (
        <Image
          src={'/images/open-menu.svg'}
          width={30}
          height={22}
          alt="open menu icon"
          onClick={() => setOpenedMenu(true)}
        />
      )}
      {openedMenu && (
        <Image
          src={'/images/close-menu.svg'}
          width={30}
          height={22}
          alt="open menu icon"
          onClick={() => setOpenedMenu(false)}
        />
      )}
      {openedMenu && (
        <ul
          css={
            (css`
              background-color: #223843;
            `,
            tw`absolute top-36 left-0 flex-col list-none space-y-8 text-yellow-600 w-full h-screen py-20`)
          }
        >
          <li>
            <Link href="/">
              <a css={tw`cursor-pointer`}>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>Tokenomics</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>Roadmap</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>Swap</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>NFTs</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>IDO</a>
            </Link>
          </li>
          <li>
            <Link href="">
              <a
                css={tw`text-white bg-yellow-600 py-2 px-3 rounded cursor-pointer hover:bg-yellow-500`}
              >
                Join Airdrop
              </a>
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
}

import tw, { css } from 'twin.macro';
import {
  FaTelegramPlane,
  FaFacebook,
  FaInstagram,
  FaMedium,
  FaReddit,
  FaTwitter,
} from 'react-icons/fa';

import { MdAlternateEmail } from 'react-icons/md';

export default function Socials() {
  return (
    <div css={tw`mt-20 md:mt-32 flex flex-col w-full space-y-6 md:space-y-0`}>
      <h3 css={tw`text-center font-mono text-gray-500`}>Follow GongSwap</h3>
      <div css={tw`mx-auto space-x-16`}>
        <a
          href="https://t.me/gongswap_chat"
          css={tw`text-gray-300 hover:text-yellow-600`}
        >
          <FaTelegramPlane size={25} />
        </a>
        <a href="" css={tw`text-gray-300 hover:text-yellow-600`}>
          <FaFacebook size={25} />
        </a>
        <a href="" css={tw`text-gray-300 hover:text-yellow-600`}>
          <FaInstagram size={25} />
        </a>
        <a
          href="https://twitter.com/gongswap"
          css={tw`text-gray-300 hover:text-yellow-600`}
        >
          <FaTwitter />
        </a>
        <a
          href="https://www.reddit.com/user/gongswap"
          css={tw`text-gray-300 hover:text-yellow-600`}
        >
          <FaReddit size={25} />
        </a>
        <a
          href="https://gongswap.medium.com/"
          css={tw`text-gray-300 hover:text-yellow-600`}
        >
          <FaMedium size={25} />
        </a>
        <a href="" css={tw`text-gray-300 hover:text-yellow-600`}>
          <MdAlternateEmail size={25} />
        </a>
      </div>
    </div>
  );
}

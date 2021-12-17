import tw, { css } from 'twin.macro';
import Image from 'next/image';
import Link from 'next/link';

export default function Campaign() {
  return (
    <div css={tw`mt-20 md:mt-32`}>
      {/* Airdrop Campaign */}

      <Link href={'/'}>
        <a>
          <Image
            src="/images/airdrop.svg"
            width={895}
            height={73}
            alt="gongswap airdrop"
          />
        </a>
      </Link>
    </div>
  );
}

import tw, { css } from 'twin.macro';
import Link from 'next/link';

import { Tab } from '..';
import { MainComponent, Hero, Button } from './Main.styled.components';

export default function Main() {
  return (
    <>
      <MainComponent variant="large">
        <Hero variant="large">
          <h1 css={tw`text-white underline w-5/6 mb-4`}>
            The One Stop Swap Service
          </h1>
          <h3
            css={css`
              color: #365a67;
              font-size: 1.2rem;
              font-weight: 600;
              margin-bottom: 4rem;
            `}
          >
            No Extra Fees, No BS, just Swap
          </h3>
          <Link href={'/'}>
            <a>
              <Button variant="large" className="red">
                Learn More 👇
              </Button>
            </a>
          </Link>
        </Hero>
        <Tab />
      </MainComponent>
      <MainComponent>
        <Hero>
          <h1 css={tw`text-white underline w-5/6 mb-4 text-xl`}>
            The One Stop Swap Service
          </h1>
          <h3
            css={css`
              color: #365a67;
              font-size: 0.8rem;
              font-weight: 600;
              margin-bottom: 2rem;
            `}
          >
            No Extra Fees, No BS, just Swap
          </h3>
          <Link href={'/'}>
            <a>
              <Button>Learn More 👇</Button>
            </a>
          </Link>
        </Hero>
        <Tab />
      </MainComponent>
    </>
  );
}

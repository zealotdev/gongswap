import tw, { css } from 'twin.macro';
import Link from 'next/link';
import { useState } from 'react';

export default function Main() {
  const [swapTab, setSwapTab] = useState(true);
  return (
    <div css={tw`w-4/6 mx-auto pt-40 flex justify-between`}>
      <div
        css={css`
          width: 100%;
          height: 40vh;
        `}
      >
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
          <a className="button">Learn More 👇</a>
        </Link>
      </div>
      <div className="tab">
        <div className="tab-header">
          <div
            className={swapTab ? 'tab-header--left active' : 'tab-header--left'}
            onClick={() => setSwapTab(true)}
          >
            Swap
          </div>
          <div
            className={
              !swapTab ? 'tab-header--right active' : 'tab-header--right'
            }
            onClick={() => setSwapTab(false)}
          >
            Buy
          </div>
        </div>
        {swapTab && (
          <div className="swap-body">
            <form>
              <div className="input-field">
                <input type="number" name="baseCoin" placeholder="0.0" />
                <select name="baseCoins" id="baseCoins">
                  <option value="eth">ETH</option>
                </select>
              </div>
              <div className="input-field">
                <input type="number" name="baseCoin" placeholder="0.0" />
                <select name="baseCoins" id="baseCoins">
                  <option value="eth">Select a Token</option>
                </select>
              </div>
              <button>connect to wallet</button>
            </form>
          </div>
        )}
        {!swapTab && (
          <div className="swap-body">
            <form>
              <div className="input-field">
                <input
                  type="number"
                  name="amount"
                  id="amount"
                  placeholder="0.0"
                />
                <label htmlFor="amount">GONG</label>
              </div>
              <div className="input-field">
                <input type="number" name="baseCoin" placeholder="0.0" />
                <select name="baseCoins" id="baseCoins">
                  <option value="eth">Select a Token</option>
                </select>
              </div>
              <button>Buy</button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

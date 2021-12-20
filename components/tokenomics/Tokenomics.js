import tw, { css } from 'twin.macro';
import 'chart.js/auto';
import { Pie } from 'react-chartjs-2';

export default function Tokenomics() {
  return (
    <div css={tw`mt-20 md:mt-32`} id="tokenomics">
      <h3 css={tw`text-gray-500 font-mono text-2xl`}>Tokenomics.</h3>
      <div>
        <div
          className="roadmap-content"
          css={tw`mt-12 w-full mx-auto py-12 px-10 rounded text-gray-300`}
        >
          {/* For large Screen */}
          <div css={tw`hidden md:flex justify-between align-middle`}>
            <div css={tw`w-3/6`}>
              <Pie
                data={data}
                options={{
                  title: {
                    display: false,
                    text: 'Average Rainfall per month',
                    fontSize: 20,
                  },
                  plugins: {
                    legend: {
                      display: false,
                    },
                  },
                }}
              />
            </div>
            <ul css={tw`text-yellow-600 list-disc p-0 my-auto space-y-4`}>
              <li>Development : 30%</li>
              <li>Airdrop : 2%</li>
              <li>Charity : 20%</li>
              <li>Pre Sale : 3%</li>
              <li>Burning : 20%</li>
              <li>Rewards : 5%</li>
              <li>Marketing : 20%</li>
            </ul>
          </div>
          {/* For Small Screen */}
          <div css={tw`flex flex-col md:hidden space-y-10`}>
            <div css={tw`w-5/6 mx-auto`}>
              <Pie
                data={data}
                options={{
                  title: {
                    display: false,
                    text: 'Average Rainfall per month',
                    fontSize: 20,
                  },
                  plugins: {
                    legend: {
                      display: false,
                    },
                  },
                }}
              />
            </div>
            <ul css={tw`text-yellow-600 list-disc p-0 mx-auto space-y-4`}>
              <li>Development : 30%</li>
              <li>Airdrop : 2%</li>
              <li>Charity : 20%</li>
              <li>Pre Sale : 3%</li>
              <li>Burning : 20%</li>
              <li>Rewards : 5%</li>
              <li>Marketing : 20%</li>
            </ul>
          </div>
        </div>
        {/* For Small Screen */}
      </div>
    </div>
  );
}

const data = {
  labels: [
    'Development',
    'Airdrop',
    'Charity',
    'Pre Sale',
    'Burning',
    'Rewards',
    'Marketing',
  ],
  datasets: [
    {
      label: 'Tokenomics',
      data: [30, 2, 20, 3, 20, 5, 20],
      backgroundColor: ['rgb(54, 90, 104)'],
      hoverOffset: 4,
    },
  ],
};

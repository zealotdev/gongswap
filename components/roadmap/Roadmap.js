import tw, { css } from 'twin.macro';
import { useState } from 'react';

export default function Roadmap() {
  const [activePhase, setActivePhase] = useState(0);

  return (
    <div css={tw`mt-20 md:mt-32`} id="roadmap">
      <h4 css={tw`text-gray-500 font-mono text-2xl`}>Roadmap.</h4>
      {/* For large Screen */}
      <div css={tw`hidden md:block`}>
        {/* Headers */}
        <ul css={tw`flex list-none justify-between text-gray-200`}>
          {ContentList.map((phase) => {
            return (
              <li
                className={
                  activePhase == phase.id ? 'beacon beacon__active' : 'beacon'
                }
                key={phase.id}
                onClick={() => setActivePhase(phase.id)}
              >
                {phase.name}
              </li>
            );
          })}
        </ul>
        {/* Content */}
        <div
          className="roadmap-content"
          css={tw`mt-12 w-full mx-auto py-12 px-10 rounded text-gray-300`}
        >
          <div>
            {ContentList.filter((el) => el.id == activePhase)[0].content}
          </div>
        </div>
      </div>
      {/* For Mobile Screen */}
      <div css={tw`md:hidden flex`}>
        {/* Headers */}
        <ul
          css={tw`flex flex-col list-none justify-between text-gray-200 text-xs p-0 w-3/6`}
        >
          {ContentList.map((phase) => {
            return (
              <li
                className={
                  activePhase == phase.id
                    ? 'beacon-mobile beacon-mobile__active'
                    : 'beacon-mobile'
                }
                key={phase.id}
                onClick={() => setActivePhase(phase.id)}
              >
                {phase.name}
              </li>
            );
          })}
        </ul>
        {/* Content */}
        <div
          className="roadmap-content"
          css={tw` w-full py-12 px-10 rounded text-gray-300`}
        >
          <div>
            {ContentList.filter((el) => el.id == activePhase)[0].content}
          </div>
        </div>
      </div>
    </div>
  );
}

const ContentList = [
  {
    id: 0,
    name: 'Phase One',
    content:
      'Phase One: Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus nemo vel, laboriosam porro maxime non.',
  },
  {
    id: 1,
    name: 'Phase Two',
    content:
      'Phase Two: Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus nemo vel, laboriosam porro maxime non.',
  },
  {
    id: 2,
    name: 'Phase Three',
    content:
      'Phase Three: Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus nemo vel, laboriosam porro maxime non.',
  },
  {
    id: 3,
    name: 'Phase Four',
    content:
      'Phase Four: Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus nemo vel, laboriosam porro maxime non.',
  },
];

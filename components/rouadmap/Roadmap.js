import tw, { css } from 'twin.macro';
import { useState } from 'react';

export default function Roadmap() {
  const [activePhase, setActivePhase] = useState(1);

  return (
    <div css={tw`mt-20 md:mt-32`}>
      <h4 css={tw`text-gray-600 font-mono`}>Roadmap.</h4>
      {/* For large Screen */}
      <div>
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
          <div>{ContentList.filter((el) => el.id === 3)[0].content}</div>
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
      'Phase One: Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus nemo vel, laboriosam porro maxime non.',
  },
  {
    id: 2,
    name: 'Phase Three',
    content:
      'Phase One: Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus nemo vel, laboriosam porro maxime non.',
  },
  {
    id: 3,
    name: 'Phase Four',
    content:
      'Phase One: Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus nemo vel, laboriosam porro maxime non.',
  },
];

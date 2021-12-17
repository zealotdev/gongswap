export default function Tokenomics() {
  return (
    <div css={tw`mt-20 md:mt-32`}>
      <h4 css={tw`text-gray-500 font-mono text-2xl`}>Roadmap.</h4>
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
          <div>
            {ContentList.filter((el) => el.id == activePhase)[0].content}
          </div>
        </div>
      </div>
    </div>
  );
}

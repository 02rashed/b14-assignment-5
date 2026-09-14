import type { ITechnology } from "../../types/technologyType";

interface TechnologyProps {
  technologies: ITechnology[];
  handleAddToStack: (technology: ITechnology) => void;
  added: Set<string>;
}

const Technology = ({ technologies, handleAddToStack, added }: TechnologyProps) => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {technologies.map((technology) => (
        <div
          key={technology.name}
          className="rounded-[20px] border border-[#e8edf3] bg-white p-[14px]"
        >
          <div className="flex items-start justify-between">
            <img
              src={technology.icon}
              alt={technology.name}
              className="h-[55px] w-[55px] object-contain"
            />
            <div className="rounded-full border border-[#dceeff] bg-[#f2f9ff] px-3 py-1 text-sm text-[#0798e6]">
              {technology.badge}
            </div>
          </div>

          <div>
            <h3 className="mt-5 text-2xl font-semibold text-[#090d18]">
              {technology.name}
            </h3>
            <p className="mt-2 min-h-[72px] text-base leading-[26px] text-[#60708b]">
              {technology.description}
            </p>
          </div>

          <div className="mt-5 flex items-center border-y border-[#edf0f4] py-2">
            <p className="rounded bg-[#f6f8fa] px-2 py-1 text-sm text-[#34445d]">
              {technology.category}
            </p>
            <p className="ml-auto text-sm text-[#4d5e79]">
              {technology.difficulty}
            </p>
            <p className="ml-auto text-sm text-[#34445d]">
              <span className="text-[#ffb414]">★</span> {technology.rating}
            </p>
          </div>

          <button
            onClick={() => handleAddToStack(technology)}
            disabled={added.has(technology.name)}
            className={`mt-5 h-12 w-full rounded-[10px] text-base font-semibold ${
              added.has(technology.name)
                ? "bg-white text-black"
                : "bg-[#080d1b] text-white"
            }`}
          >
            {added.has(technology.name) ? "Added to Stack" : "Add to Stack"}
          </button>
        </div>
      ))}
    </div>
  );
};

export default Technology;
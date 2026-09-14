import { use, useState } from "react";
import type { ITechnology } from "../../types/technologyType";
import Technology from "./Technology";
import { toast } from "react-toastify";

export interface TechnologiesProps {
  technologiesPromise: Promise<ITechnology[]>;
}

const Technologies = ({ technologiesPromise }: TechnologiesProps) => {
  const [addToStacks, setAddToStacks] = useState<ITechnology[]>([]);
  const technologies = use(technologiesPromise);
  const added = new Set(addToStacks.map((stack) => stack.name));

  const handleAddToStack = (technology: ITechnology) => {
    if (added.has(technology.name)) return
    setAddToStacks((tech) => [...tech, technology]);
    toast.success(`${technology.name} added to stack!`);
  };

  const handleRemove = (technology: ITechnology) => {setAddToStacks((tech) => 
    tech.filter((stack) => stack.name !== technology.name));
    toast.info(`${technology.name} removed`);
  };

  const handleRemoveAll = () => {
    setAddToStacks([]);
    toast.warning("All technologies removed");
  };

  return (
    <div className="container mx-auto p-4 px-25">
      <div>
        <h2 className="text-4xl font-bold">
          Explore The <span className="bg-linear-to-r from-red-500 to-blue-500 bg-clip-text text-transparent">
            Technologies
          </span>
        </h2>
        <p>Pick one Technology per Category to build your ideal Stack.</p>
      </div>

      <div className="mt-8 flex gap-8">
        <div className="flex-1">
          <Technology
            technologies={technologies}
            handleAddToStack={handleAddToStack}
            added={added}
          />
        </div>
        <div className="w-[320px] shrink-0 rounded-[20px] border border-[#e8edf3] bg-white p-5">
          <h2 className="text-lg font-semibold text-[#090d18]">Your Stack</h2>
          <p className="mt-1 text-sm text-[#60708b]">
            {addToStacks.length} Technology Selected
          </p>
          <div className="mt-5 flex flex-col gap-3">
            {addToStacks.map((stack) => (
              <div
                key={stack.name}
                className="flex items-center gap-3 rounded-xl border border-[#e8edf3] bg-[#f8fafc] px-3 py-2.5"
              >
                <img
                  src={stack.icon}
                  alt={stack.name}
                  className="h-9 w-9 object-contain"
                />
                <div className="flex-1">
                  <p className="text-sm font-semibold text-[#090d18]">
                    {stack.name}
                  </p>
                  <p className="text-xs text-[#60708b]">{stack.category}</p>
                </div>
                <button
                  onClick={() => handleRemove(stack)}
                  className="flex h-7 w-7 items-center justify-center rounded-full text-[#60708b] hover:bg-[#e8edf3]"
                >
                  ✕
                </button>
              </div>
            ))}
          </div>
          {addToStacks.length > 0 && (
            <button onClick={handleRemoveAll} className="mt-5 h-11 w-full rounded-xl border
             border-[#ff4d4f] bg-white text-sm font-medium text-[#ff4d4f] transition hover:bg-[#fff1f0]">
            Remove All
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Technologies;
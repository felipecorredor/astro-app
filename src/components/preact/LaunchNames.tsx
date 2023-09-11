import type React from "preact/compat";

interface LaunchNamesProps {
  launch: string;
}

const LaunchNames: React.FC<LaunchNamesProps> = ({ launch }) => {
  return (
    <div className="border py-6 px-2 rounded-md hover:bg-gray-700 hover:scale-105 ease-in duration-300 shadow-xl">
      <p className="text-white">{launch}</p>
    </div>
  );
};

export default LaunchNames;

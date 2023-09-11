import { useState } from "preact/compat";

import LaunchNames from "./LaunchNames.tsx";

interface SearchLaunchesProps {
  launches: string[];
}

const SearchLaunches: React.FC<SearchLaunchesProps> = ({ launches }) => {
  const [lists, setLists] = useState(launches);

  const handleSearch = (event: any) => {
    const getValue = event.target.value;
    const filteredLists = launches.filter((launch) =>
      launch.toLowerCase().includes(getValue.toLowerCase())
    );

    setLists(filteredLists);
  };

  return (
    <div>
      <div class="w-full">
        <input
          onChange={handleSearch}
          class="w-full py-4 px-2 rounded-md mt-4"
          type="search"
          placeholder="Search launch"
        />
      </div>

      <div class="grid gap-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 mt-4">
        {lists.map((launch: string) => (
          <LaunchNames key={launch} launch={launch} />
        ))}
      </div>
    </div>
  );
};

export default SearchLaunches;

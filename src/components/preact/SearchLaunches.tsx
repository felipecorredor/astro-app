import { useMemo, useState } from "preact/compat";

import LaunchNames from "./LaunchNames.tsx";

interface SearchLaunchesProps {
  launches: string[];
}

const SearchLaunches: React.FC<SearchLaunchesProps> = ({ launches }) => {
  const [search, setSearch] = useState("");

  const handleSearch = (event: any) => {
    const value = event.target.value;

    setSearch(value);
  };

  const filteredLists = useMemo(
    () =>
      launches.filter((launch) =>
        launch.toLowerCase().includes(search.toLowerCase())
      ),
    [search]
  );

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
        {filteredLists.map((launch: string) => (
          <LaunchNames key={launch} launch={launch} />
        ))}
      </div>
    </div>
  );
};

export default SearchLaunches;

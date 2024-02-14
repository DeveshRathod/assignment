import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { searchState } from "../store/searchState";
import { useRecoilState } from "recoil";

const SearchInput = () => {
  const [search, setSearch] = useRecoilState(searchState);

  const handleChange = (e) => {
    setSearch(e.target.value);
    console.log(search);
  };

  const handleSubmit = () => {
    console.log(search);
    return search;
  };

  return (
    <div
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          handleSubmit();
        }
      }}
      className="bg-gray-100 p-2 rounded-md"
      tabIndex={0}
    >
      <input
        type="text"
        className="bg-gray-200 px-3 py-1 mr-2 rounded-md outline-none"
        placeholder="Search..."
        onChange={handleChange}
        value={search}
      />
      <SearchIcon className="text-gray-700" onClick={handleSubmit} />
    </div>
  );
};

export default SearchInput;

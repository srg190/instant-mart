import React, { useState } from "react";
import { Input } from "./index.style";
import { useDebounce } from "Hooks/useDebounce";
let cnt = 0;
const SearchBar = () => {
  const [keywords, setKeywords] = useState<string>("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeywords(e.target.value);
  };
  const debounceVal = useDebounce(keywords, 300);
  // will throttle here
  console.log(debounceVal, cnt++);
  return (
    <>
      <Input
        type="text"
        onChange={(e) => handleChange(e)}
        placeholder="search..."
        value={keywords}
      />
    </>
  );
};

export default SearchBar;

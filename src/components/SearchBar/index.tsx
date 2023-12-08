import React, { useState } from "react";
import { Input } from "./index.style";
let cnt = 0;
const SearchBar = () => {
  const [keywords, setKeywords] = useState<string>("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeywords(e.target.value);
  };
  // will throttle here
  return (
    <>
      <Input
        type="text"
        onChange={(e) => handleChange(e)}
        placeholder="search..."
      />
    </>
  );
};

export default SearchBar;

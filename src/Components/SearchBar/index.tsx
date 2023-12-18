import React, { useState } from "react";
import { Input } from "./index.style";
import { useDebounce } from "Hooks/useDebounce";
import { useAppDispatch } from "store";
import { productActions } from "Slices/Product";
let cnt = 0;
const SearchBar = () => {
  const [keywords, setKeywords] = useState<string>("");
  const dispatch = useAppDispatch();
  const { filterData } = productActions;
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeywords(e.target.value);
  };
  const debounceVal = useDebounce(keywords, 300);
  dispatch(filterData({ keywords: debounceVal }));

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

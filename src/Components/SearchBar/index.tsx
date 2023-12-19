import React, { useState } from "react";
import { Input } from "./index.style";
import { useDebounce } from "Hooks/useDebounce";
import { useAppDispatch } from "store";
import { productActions } from "Slices/Product";
import { H1 } from "Components/Typography";
import { searchBarConstant } from "Constants/testConstants";
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
      <H1 data-testid={searchBarConstant.DATA_TEST_ID_HEAD}>{debounceVal}</H1>
      <Input
        data-testid={searchBarConstant.DATA_TEST_ID}
        type="text"
        onChange={(e) => handleChange(e)}
        placeholder="search..."
        value={keywords}
      />
    </>
  );
};

export default SearchBar;

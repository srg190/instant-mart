import React, { useCallback, useEffect, useState } from "react";
import { Input } from "./index.style";
import { useDebounce } from "Hooks/useDebounce";
import { useAppDispatch, useAppSelector } from "store";
import { productActions } from "Slices/Product";
import { searchBarConstant } from "Constants/testConstants";

const SearchBar = () => {
  const [keywords, setKeywords] = useState<string>("");
  const dispatch = useAppDispatch();
  // const { filteredProducts } = useAppSelector((state) => state.product);
  const { filterData } = productActions;
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeywords(e.target.value);
  };
  const debounceVal = useDebounce(keywords, 300);
  dispatch(filterData({ keywords: debounceVal }));
  useCallback(() => {}, []);
  return (
    <>
      {/* <p data-testid={searchBarConstant.DATA_TEST_ID_HEAD}>{debounceVal}</p> */}
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

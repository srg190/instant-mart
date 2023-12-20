import Box from "Components/Box";
import Button from "Components/Button";
import { useEffect, useState } from "react";
import { Select } from "./index.style";
import { fetchProducts } from "Slices/Product";
import { useAppDispatch } from "store";

const Pagination = () => {
  const dispatch = useAppDispatch();
  const [currPage, setCurrPage] = useState(1);
  const [defaultVal, setDefaultVal] = useState(10);

  const handleNextPage = () => {
    setCurrPage(currPage + 1);
    dispatch(fetchProducts({ page: currPage }));
  };
  const handlePrevPage = () => {
    currPage === 1 ? setCurrPage(1) : setCurrPage(currPage - 1);
    dispatch(fetchProducts({ page: currPage }));
  };
  const handleSelect = (
    event: React.SyntheticEvent<HTMLSelectElement, Event>
  ) => {
    setDefaultVal((event.target as any).value);
    dispatch(fetchProducts({ perPage: defaultVal }));
  };

  return (
    <>
      <Box width="100%" display="flex" justifyContent="space-between">
        <Box>
          {/* <H6>Product Per Page</H6> */}
          <Select defaultValue={defaultVal} onChange={(e) => handleSelect(e)}>
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={15}>15</option>
            <option value={20}>20</option>
          </Select>
        </Box>
        <Box>
          <Button onClick={handlePrevPage}>{"<"}</Button>
        </Box>
        <Box>{currPage}</Box>
        <Box>
          <Button onClick={handleNextPage}>{">"}</Button>
        </Box>
      </Box>
    </>
  );
};

export default Pagination;

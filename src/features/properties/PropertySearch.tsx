/** @jsxImportSource @emotion/react */

import { useEffect, useState } from "react";
import { useAppDispatch, useDebounce } from "../../app/hooks";
import { fetchPropertiesAsync } from "./propertiesSlice";

export default function PropertySearch() {
  const [searchQuery, setSearchQuery] = useState("");
  const dispatch = useAppDispatch();

  const debouncedSearchQuery = useDebounce(searchQuery, 500);

  useEffect(() => {
    dispatch(fetchPropertiesAsync(debouncedSearchQuery));
  }, [debouncedSearchQuery]);

  return (
    <input
      css={{
        border: "3px solid #222",
        borderRadius: 8,
        padding: 4.5,
        width: "100%",
      }}
      type="search"
      placeholder="Search"
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
    />
  );
}

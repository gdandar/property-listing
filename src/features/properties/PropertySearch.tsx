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
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
    />
  );
}

import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  changeSortOptionAge,
  changeSortOptionStatus,
  selectSortOptionAge,
  selectSortOptionStatus,
  SortOptionAge,
  SortOptionStatus,
} from "./propertiesSlice";

export default function PropertySortOptions() {
  const searchOptionAge = useAppSelector(selectSortOptionAge);
  const searchOptionStatus = useAppSelector(selectSortOptionStatus);

  const dispatch = useAppDispatch();

  return (
    <div>
      <select
        defaultValue={searchOptionAge}
        onChange={(e) =>
          dispatch(changeSortOptionAge(e.target.value as SortOptionAge))
        }
      >
        <option value="newest">Newest</option>
        <option value="oldest">Oldest</option>
      </select>
      <select
        defaultValue={searchOptionStatus}
        onChange={(e) =>
          dispatch(changeSortOptionStatus(e.target.value as SortOptionStatus))
        }
      >
        <option value="active">Active</option>
        <option value="sold">Sold</option>
      </select>
    </div>
  );
}

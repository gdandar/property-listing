/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import Select from "../../components/Select";
import {
  changeSortOptionAge,
  changeSortOptionStatus,
  selectSortOptionAge,
  selectSortOptionStatus,
  SortOptionAge,
  SortOptionStatus,
} from "./propertiesSlice";

const select = {
  wrapper: css({
    display: "flex",
  }),
};

export default function PropertySortOptions() {
  const searchOptionAge = useAppSelector(selectSortOptionAge);
  const searchOptionStatus = useAppSelector(selectSortOptionStatus);

  const dispatch = useAppDispatch();

  return (
    <div css={select.wrapper}>
      <Select
        options={[
          { label: "Newest", value: "newest" },
          { label: "Oldest", value: "oldest" },
        ]}
        defaultValue={searchOptionAge}
        onChange={(v) =>
          dispatch(changeSortOptionAge(v.value as SortOptionAge))
        }
      />
      <Select
        options={[
          { label: "Active", value: "active" },
          { label: "Sold", value: "sold" },
        ]}
        defaultValue={searchOptionStatus}
        onChange={(v) =>
          dispatch(changeSortOptionStatus(v.value as SortOptionStatus))
        }
      />
    </div>
  );
}

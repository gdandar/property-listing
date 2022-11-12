import facepaint from "facepaint";
import * as R from "remeda";
import {
  SortOptionAge,
  SortOptionStatus,
} from "../features/properties/propertiesSlice";
import { Property } from "../features/properties/types";

export const sortProperties = (
  properties: Array<Property>,
  sortOptionAge: SortOptionAge,
  sortOptionStatus: SortOptionStatus
) =>
  R.sortBy(
    properties,
    [
      (property) => property.status,
      sortOptionStatus === "active" ? "asc" : "desc",
    ],
    [
      (property) => property.createdAt,
      sortOptionAge === "newest" ? "desc" : "asc",
    ]
  );

const breakpoints = [600, 816, 992, 1200];
export const mq = facepaint(
  breakpoints.map((bp) => `@media (min-width: ${bp}px)`)
);

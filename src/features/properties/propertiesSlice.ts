import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

import { RootState } from "../../app/store";
import { sortProperties } from "../../app/utils";
import { fetchProperties } from "./propertiesAPI";
import { Property } from "./types";

export type SortOptionAge = "newest" | "oldest";
export type SortOptionStatus = "sold" | "active";

export type PropertiesState = {
  properties: Array<any>;
  status: "initial" | "loading" | "succeeded" | "failed";
  sortOptionAge: SortOptionAge;
  sortOptionStatus: SortOptionStatus;
};

const initialState: PropertiesState = {
  properties: [],
  status: "initial",
  sortOptionAge: "newest",
  sortOptionStatus: "active",
};

export const fetchPropertiesAsync = createAsyncThunk(
  "properties/getProperties",
  async (query: string, { getState }): Promise<Array<Property>> => {
    const response = await fetchProperties(query);
    const state = getState() as RootState;

    const properties = (
      response.results as Array<Property & { createdAt: string }>
    ).map((property) => ({
      ...property,
      createdAt: Date.parse(property.createdAt),
    }));

    return sortProperties(
      properties,
      state.properties.sortOptionAge,
      state.properties.sortOptionStatus
    );
  }
);

export const propertiesSlice = createSlice({
  name: "properties",
  initialState,
  reducers: {
    changeSortOptionAge: (state, action: PayloadAction<SortOptionAge>) => {
      state.sortOptionAge = action.payload;
      state.properties = sortProperties(
        state.properties,
        state.sortOptionAge,
        state.sortOptionStatus
      );
    },
    changeSortOptionStatus: (
      state,
      action: PayloadAction<SortOptionStatus>
    ) => {
      state.sortOptionStatus = action.payload;
      state.properties = sortProperties(
        state.properties,
        state.sortOptionAge,
        state.sortOptionStatus
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPropertiesAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchPropertiesAsync.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.properties = action.payload;
      })
      .addCase(fetchPropertiesAsync.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const { changeSortOptionAge, changeSortOptionStatus } =
  propertiesSlice.actions;

export const selectProperties = (state: RootState) =>
  state.properties.properties;

export const selectSortOptionAge = (state: RootState) =>
  state.properties.sortOptionAge;

export const selectSortOptionStatus = (state: RootState) =>
  state.properties.sortOptionStatus;

export default propertiesSlice.reducer;

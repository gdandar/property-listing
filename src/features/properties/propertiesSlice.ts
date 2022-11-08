import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { fetchProperties } from "./propertiesAPI";
import { Property } from "./types";

type SortOptionAge = "newest" | "oldest";
type SortOptionStatus = "sold" | "active";

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
  async (query: string): Promise<Array<Property>> => {
    const response = await fetchProperties(query);
    return response.results;
  }
);

export const propertiesSlice = createSlice({
  name: "properties",
  initialState,
  reducers: {
    changeSortOptionAge: (state, action: PayloadAction<SortOptionAge>) => {
      state.sortOptionAge = action.payload;
    },
    changeSortOptionStatus: (
      state,
      action: PayloadAction<SortOptionStatus>
    ) => {
      state.sortOptionStatus = action.payload;
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

export default propertiesSlice.reducer;

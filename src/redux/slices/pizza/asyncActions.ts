import { createAsyncThunk } from "@reduxjs/toolkit";
import { PizzaBlockProps } from "../../../components/PizzaBlock";
import { SearchPizzaParams } from "./types";
import axios from "axios";

export const fetchPizzas = createAsyncThunk<
  PizzaBlockProps[],
  SearchPizzaParams
>("pizza/fetchPizzas", async (params) => {
  const { category, order, sortProperty } = params;
  const { data } = await axios.get<PizzaBlockProps[]>(
    `https://63d42d420e7ae91a00993468.mockapi.io/items?category=${category}&sortBy=${sortProperty}&order=${order}`
  );

  return data;
});

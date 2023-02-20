import { PizzaBlockProps } from "../../../components/PizzaBlock";

export enum Status {
  LOADING = "loading",
  COMPLETED = "success",
  ERROR = "error",
}

export interface PizzaSliceState {
  pizzas: PizzaBlockProps[];
  status: Status;
}
export type SearchPizzaParams = {
  order: string;
  sortProperty: string;
  category: number | string;
};

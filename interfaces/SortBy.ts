import { Dispatch, SetStateAction } from "react";

export interface SortBy {
  sortBy: string
  setSortBy: Dispatch<SetStateAction<string>>
}
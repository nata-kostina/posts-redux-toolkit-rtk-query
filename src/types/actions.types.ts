import { IPost } from "./entities.types"

export enum SortActions {
  ByDefault = "ByDefault",
  ByTitleAsc = "ByTitleAsc",
  ByTitleDesc = "ByTitleDesc",
}

export interface SortValue {
  key: keyof IPost
  order: "asc" | "desc"
  action: SortActions
}

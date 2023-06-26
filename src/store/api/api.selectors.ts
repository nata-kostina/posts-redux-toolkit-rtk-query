import { createSelector } from "@reduxjs/toolkit"
import { SortActions } from "../../types/actions.types"
import { GetPostsArgs } from "../../types/api.types"
import { RootState } from "../store"
import { api } from "./api"

const getPostsSelector = api.endpoints.getPosts.select

// export const selectPosts = ({ page, pageLimit }: GetPostsArgs) =>
//   api.endpoints.getPosts.select({ page, pageLimit })

// type SelectPosts = ReturnType<typeof selectPosts>

// export const selectSortedPosts = createSelector(
//   selectPosts,
//   (state: RootState, sort: SortActions) => sort,
//   (postsSelector: SelectPosts, sort) => {
//     //const response = postsSelector(state)
//   },
//)

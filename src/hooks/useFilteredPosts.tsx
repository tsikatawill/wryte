import { filterByT, filterValueT, postCategoryT, postT } from "../types";
import { POSTS } from "../lib/posts";
import { useState } from "react";

export const useFilteredPosts = () => {
  const [filteredPosts, setFilteredPosts] = useState<postT[]>(POSTS);

  const filterPosts = (filterBy: filterByT, filterValue: filterValueT) => {
    if (filterBy === "category") {
      if (filterValue === "All") {
        setFilteredPosts(POSTS);
      } else {
        setFilteredPosts(() =>
          POSTS.filter(
            (post) => post.category === (filterValue as postCategoryT)
          )
        );
      }
    } else if (filterBy === "author" || filterBy === "title") {
      setFilteredPosts(() =>
        POSTS.filter((post) =>
          post[filterBy]
            .toLowerCase()
            .includes(String(filterValue).toLowerCase())
        )
      );
    }
  };

  return { filteredPosts, filterPosts };
};

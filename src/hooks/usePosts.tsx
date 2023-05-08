import { addPost, deletePost, getPosts } from "../utils/postActions";
import { filterFncT, postCategoryT, postT } from "../types";
import { useCallback, useEffect, useState } from "react";
import { toast } from "react-toastify";

export const usePosts = () => {
  const [posts, setPosts] = useState<postT[]>([]);

  const handleDeletePost: (id: string) => void = useCallback((id) => {
    if (window.confirm("Sure to delete post?")) {
      const deletedPost = deletePost(id);

      if (deletedPost.id) {
        toast.success("Post deleted successfully");
      } else {
        toast.error("Error deleting post");
      }
    }
  }, []);

  const handleAddPost = useCallback(
    (post: postT) => {
      if (window.confirm("Sure to save post?")) {
        addPost(post);
        toast.success("Post saved successfully");
      }
    },

    []
  );

  const handleEditPost = useCallback(
    (post: postT) => {
      if (window.confirm("Sure to save post?")) {
        addPost(post);
        toast.success("Post saved successfully");
      }
    },

    []
  );

  const handleFilterPosts: filterFncT = useCallback((filterBy, filterValue) => {
    if (filterBy === "category") {
      if (filterValue === "All") {
        setPosts(getPosts());
      } else {
        setPosts(() =>
          getPosts().filter(
            (post) => post.category === (filterValue as postCategoryT)
          )
        );
      }
    } else if (filterBy === "author" || filterBy === "title") {
      setPosts(() =>
        getPosts().filter((post) =>
          post[filterBy]
            .toLowerCase()
            .includes(String(filterValue).toLowerCase())
        )
      );
    } else {
      setPosts(getPosts());
    }
  }, []);

  useEffect(() => {
    setPosts(getPosts());
  }, [handleAddPost, handleDeletePost, handleFilterPosts]);

  return {
    posts,
    deletePost: handleDeletePost,
    addPost: handleAddPost,
    editPost: handleEditPost,
    filterPosts: handleFilterPosts,
  };
};

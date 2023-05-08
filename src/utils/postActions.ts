import { POSTS } from "../lib/posts";
import { postT } from "../types";

const LOCALPOSTS = JSON.parse(
  localStorage.getItem("posts") as string
) as postT[];

export const addPost = (post: postT) => {
  const posts = getPosts();
  localStorage.setItem("posts", JSON.stringify([post, ...posts]));
};

export const editPost = (post: postT) => {
  const posts = getPosts();
  const purgedArray = posts.filter((item) => item.id !== post.id);
  const newArray = [post, ...purgedArray];

  localStorage.setItem("posts", JSON.stringify(newArray));
};

export const deletePost: (id: string) => postT = (id) => {
  const newPosts = LOCALPOSTS.filter((item) => item.id !== id);

  localStorage.setItem("posts", JSON.stringify(newPosts));

  return LOCALPOSTS.filter((item) => item.id === id)[0];
};

export const getPosts: () => postT[] = () => {
  if (!LOCALPOSTS) {
    localStorage.setItem("posts", JSON.stringify(POSTS));
    return POSTS;
  }
  return LOCALPOSTS;
};

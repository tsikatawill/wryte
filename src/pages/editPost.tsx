import { Editor, Layout, SectionHeader } from "../components";
import { useEffect, useState } from "react";
import { postT } from "../types";
import { useLocation } from "react-router-dom";
import { usePosts } from "../hooks/usePosts";

export const EditPost = () => {
  const location = useLocation();
  const { posts } = usePosts();
  const [showErrorState, setShowErrorState] = useState(false);
  const [post, setPost] = useState<postT>();

  useEffect(() => {
    const postId = decodeURI(location.pathname.split("/").splice(-1)[0]);

    const getPost = () => {
      return posts.filter((item) => item.id === postId)[0];
    };

    if (getPost()) {
      setShowErrorState(false);
      setPost(getPost());
    } else {
      setShowErrorState(true);
    }
  }, [location, posts]);

  const { addPost } = usePosts();

  const handleSave: (post: postT) => void = (post) => {
    addPost(post);
  };

  return (
    <Layout>
      {showErrorState ? (
        <p className="text-center text-red-500 mt-20">
          Sorry, post may have been deleted
        </p>
      ) : (
        <>
          <SectionHeader title="Edit Post" />

          <Editor handleSave={handleSave} post={post} />
        </>
      )}
    </Layout>
  );
};

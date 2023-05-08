import { Container, Layout, PostPreview } from "../components";
import { FaPen, FaTrash } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { POSTS } from "../lib/posts";
import { motion } from "framer-motion";
import { postT } from "../types";
import { usePosts } from "../hooks/usePosts";
import { useUser } from "../hooks/useUser";

export const Post = () => {
  const location = useLocation();
  const [post, setPost] = useState<postT | null>(null);
  const [showErrorState, setShowErrorState] = useState(false);
  const { posts, deletePost } = usePosts();
  const { user } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    const postTitle = decodeURI(location.pathname.split("/")[2]);

    const getPost = () => {
      return posts.filter((item) => item.title === postTitle)[0];
    };

    if (getPost()) {
      setShowErrorState(false);
      setPost(getPost());
    } else {
      setShowErrorState(true);
    }
  }, [location, posts]);

  return (
    <Layout>
      {showErrorState ? (
        <p className="text-center text-red-500 mt-20">
          Sorry, post may have been deleted
        </p>
      ) : (
        <Container>
          <div className="max-w-3xl mx-auto">
            {post && <PostPreview text={post.fullText} />}

            {user?.displayName === post?.author && (
              <div className="flex gap-2 mt-10 justify-center">
                <Link
                  to={`/posts/edit-post/${post?.id}`}
                  className="flex items-center gap-2 justify-center w-fit bg-blue-500 p-2 px-3"
                >
                  <FaPen /> Edit
                </Link>
                <button
                  onClick={() => {
                    deletePost(String(post?.id));
                    navigate("/posts");
                  }}
                  className="flex items-center gap-2 justify-center w-fit bg-red-500 p-2 px-3"
                >
                  <FaTrash /> Delete
                </button>
              </div>
            )}

            <div className="simmilar my-20">
              <h2 className="font-bold text-2xl">Similar Articles</h2>
              <div className="flex gap-5 mt-5 overflow-x-scroll scrollbar-hidden py-1">
                {POSTS.filter((item) => item.category === post?.category)
                  .slice(0, 5)
                  .map((item) => (
                    <Link
                      to={`/posts/${item.title}`}
                      className="flex-shrink-0 w-52 bg-white shadow-md shadow-[rgba(0,0,0,0.25)] dark:bg-slate-950"
                      key={item.title}
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-52 h-52"
                      />

                      <div className="text p-2">
                        <p className="font-semibold text-sm line-clamp-3">
                          {item.title}
                        </p>
                      </div>
                    </Link>
                  ))}
              </div>

              <motion.div
                animate={{
                  x: [0, 30],
                  transition: {
                    repeat: Infinity,
                    duration: 1,
                    repeatType: "reverse",
                  },
                }}
                className="w-1/3 rounded-full dark:bg-white bg-black h-1 mx-auto mt-5"
              ></motion.div>
            </div>
          </div>
        </Container>
      )}
    </Layout>
  );
};

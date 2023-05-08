import { FaPen, FaTrash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { MotionProps, motion } from "framer-motion";
import { FC } from "react";
import { PostCategoryIcon } from ".";
import { postT } from "../types";
import { usePosts } from "../hooks/usePosts";
import { useUser } from "../hooks/useUser";

type Props = postT & MotionProps;

export const PostCard: FC<Props> = ({
  title,
  author,
  id,
  category,
  image,
  dateCreated,
  ...rest
}) => {
  const { user } = useUser();
  const { deletePost } = usePosts();
  const navigate = useNavigate();

  return (
    <motion.div
      exit={{ y: 200 }}
      animate={{
        opacity: [0, 1],
        transition: { duration: 0.5, ease: "easeOut" },
      }}
      className="post-card bg-white shadow-md shadow-[rgba(0,0,0,0.25)] dark:bg-slate-700 dark:text-white w-full md:w-[21rem] lg:w-[23rem] max-w-sm"
      {...rest}
    >
      <div className="image-wrapper max-w-sm dark:bg-slate-950 bg-slate-200 w-full md:w-[21rem] lg:w-[23rem] sm:h-[21rem] lg:h-[23rem] overflow-hidden">
        <motion.img
          whileHover={{
            scale: 1.2,
            transition: { duration: 1, ease: "easeOut" },
          }}
          className="w-full h-full object-cover"
          src={image ? image : "https://picsum.photos/400"}
          alt={title}
        />
      </div>

      <div className="text-content grid place-content-center relative py-5 sm:py-8 p-2 sm:p-5">
        <div className="absolute -top-5 left-1/2 -translate-x-1/2">
          <PostCategoryIcon category={category} />
        </div>

        <div className="gap-2 flex flex-col items-center">
          <p className="text-slate-600 dark:text-slate-200">{author}</p>

          <h3 className="font-bold text-center capitalize text-xl sm:text-2xl text-black dark:text-slate-100 line-clamp-3">
            <Link to={`/posts/${title}`}>{title}</Link>
          </h3>

          <p className="text-slate-600 dark:text-slate-200">{dateCreated}</p>

          {user?.displayName === author && (
            <div className="flex gap-2">
              <Link
                to={`/posts/edit-post/${id}`}
                className="flex items-center gap-2 justify-center w-fit bg-blue-500 p-2"
              >
                <FaPen /> Edit
              </Link>
              <button
                onClick={() => {
                  deletePost(id);
                  navigate(0);
                }}
                className="flex items-center gap-2 justify-center w-fit bg-red-500 p-2"
              >
                <FaTrash /> Delete
              </button>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

import { MotionProps, motion } from "framer-motion";
import { FC } from "react";
import { Link } from "react-router-dom";
import { PostCategoryIcon } from ".";
import { postT } from "../types";

export const PostCard: FC<postT & MotionProps> = ({
  title,
  author,
  category,
  image,
  dateCreated,
  ...rest
}) => {
  return (
    <motion.div
      exit={{ y: 200 }}
      animate={{
        opacity: [0, 1],
        transition: { duration: 0.5, ease: "easeOut" },
      }}
      className="post-card bg-white shadow-md shadow-[rgba(0,0,0,0.25)] dark:bg-slate-700 dark:text-white w-[23rem]"
      {...rest}
    >
      <div className="image-wrapper w-[23rem] h-80 overflow-hidden">
        <img className="w-full h-full object-cover" src={image} alt="title" />
      </div>

      <div className="text-content grid place-content-center h-60 relative px-5">
        <div className="absolute -top-5 left-1/2 -translate-x-1/2">
          <PostCategoryIcon category={category} />
        </div>

        <div className="space-y-5 text-center">
          <p className="text-slate-600 dark:text-slate-200">{author}</p>

          <h3 className="font-bold capitalize text-3xl text-black dark:text-slate-100 line-clamp-3">
            <Link to={`/posts/${title}`}>{title}</Link>
          </h3>

          <p className="text-slate-600 dark:text-slate-200">{dateCreated}</p>
        </div>
      </div>
    </motion.div>
  );
};

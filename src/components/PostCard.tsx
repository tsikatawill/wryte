import { MotionProps, motion } from "framer-motion";
import { FC } from "react";
import { Link } from "react-router-dom";
import { PostCategoryIcon } from ".";
import { postT } from "../types";

type Props = postT & MotionProps;

export const PostCard: FC<Props> = ({
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
      className="post-card bg-white shadow-md shadow-[rgba(0,0,0,0.25)] dark:bg-slate-700 dark:text-white w-full md:w-[21rem] lg:w-[23rem] max-w-sm"
      {...rest}
    >
      <div className="image-wrapper max-w-sm w-full md:w-[21rem] lg:w-[23rem] sm:h-[21rem] lg:h-[23rem] overflow-hidden">
        <motion.img
          whileHover={{
            scale: 1.2,
            transition: { duration: 1, ease: "easeOut" },
          }}
          className="w-full h-full object-cover"
          src={image}
          alt={title}
        />
      </div>

      <div className="text-content grid place-content-center h-60 relative px-2 sm:px-5">
        <div className="absolute -top-5 left-1/2 -translate-x-1/2">
          <PostCategoryIcon category={category} />
        </div>

        <div className="space-y-2 sm:space-y-5 text-center">
          <p className="text-slate-600 dark:text-slate-200">{author}</p>

          <h3 className="font-bold capitalize text-2xl sm:text-3xl text-black dark:text-slate-100 line-clamp-3">
            <Link to={`/posts/${title}`}>{title}</Link>
          </h3>

          <p className="text-slate-600 dark:text-slate-200">{dateCreated}</p>
        </div>
      </div>
    </motion.div>
  );
};

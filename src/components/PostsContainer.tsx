import { Container, PostCard } from ".";
import { FilterRow } from "./FilterRow";
import { motion } from "framer-motion";
import { useFilteredPosts } from "../hooks/useFilteredPosts";

export const PostsContainer = () => {
  const { filterPosts, filteredPosts } = useFilteredPosts();

  return (
    <section className="py-10 md:py-16">
      <Container>
        <FilterRow handleFilter={filterPosts} />
        <motion.div
          transition={{ when: "afterChildren" }}
          layout
          className="flex flex-wrap gap-10 justify-center"
        >
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post) => (
              <PostCard layoutId={post.id} {...post} key={post.id} />
            ))
          ) : (
            <div className="my-10">
              <p className="text-red-500 font-semibold">
                No posts match your filter results
              </p>
            </div>
          )}
        </motion.div>
      </Container>
    </section>
  );
};

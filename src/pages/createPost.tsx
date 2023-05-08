import { Editor, Layout, SectionHeader } from "../components";
import { postT } from "../types";
import { usePosts } from "../hooks/usePosts";

export const CreatePost = () => {
  const { addPost } = usePosts();

  const handleSave: (post: postT) => void = (post) => {
    addPost(post);
  };

  return (
    <Layout>
      <SectionHeader title="Create Blog Post" />

      <Editor handleSave={handleSave} />
    </Layout>
  );
};

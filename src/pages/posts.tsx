import { Container, Layout, PostsContainer } from "../components";

export const Posts = () => {
  return (
    <Layout>
      <Container>
        <h1 className="mt-10 text-center text-3xl font-bold">Blog Posts</h1>
      </Container>

      <PostsContainer />
    </Layout>
  );
};

export default Posts;

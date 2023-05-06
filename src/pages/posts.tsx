import {
  Container,
  Layout,
  PostsContainer,
  SectionHeader,
} from "../components";

export const Posts = () => {
  return (
    <Layout>
      <Container>
        <SectionHeader title="Blog Posts" />
      </Container>

      <PostsContainer />
    </Layout>
  );
};

export default Posts;

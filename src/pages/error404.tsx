import { Container, Layout } from "../components";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

export const Error404 = () => {
  return (
    <Layout>
      <Container>
        <div className="py-10 flex justify-center text-center gap-5 flex-col">
          <img
            src="/images/404 error.png"
            alt="404 error.png"
            className="sm:max-w-[18rem] max-w-[15rem] w-full mx-auto mb-10"
          />

          <p className="text-2xl font-bold">You seem a bit lost</p>
          <Link to="/" className="submit w-fit mx-auto flex items-center gap-2">
            <FaHome /> Go home
          </Link>
        </div>
      </Container>
    </Layout>
  );
};

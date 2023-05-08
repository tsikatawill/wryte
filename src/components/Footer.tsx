import { Container } from ".";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="py-5 sm:py-10 text-white bg-black">
      <Container>
        <p className="text-center">
          Developed with ❤️‍🔥 by{" "}
          <Link
            to="https://twitter.com/dev_willman"
            target="_blank"
            className="text-blue-500"
          >
            William M. Tsikata
          </Link>
        </p>
      </Container>
    </footer>
  );
};

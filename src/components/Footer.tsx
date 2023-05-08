import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="py-10 md:py-20 bg-black">
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
    </footer>
  );
};

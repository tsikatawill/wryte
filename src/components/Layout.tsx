import { FC, ReactNode } from "react";
import { Footer, Navbar } from ".";

type Props = {
  children: ReactNode;
};

export const Layout: FC<Props> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <div className="mb-auto">{children}</div>
      <Footer />
    </div>
  );
};

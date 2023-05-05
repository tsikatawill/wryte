import { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const Container: FC<Props> = ({ children }) => {
  return (
    <div className="max-w-screen-xl px-4 md:px-10 mx-auto">{children}</div>
  );
};

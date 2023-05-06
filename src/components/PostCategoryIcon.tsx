import { CATEGORYICONS } from "../lib/categoryIcons";
import { FC } from "react";
import { postCategoryT } from "../types";

export const PostCategoryIcon: FC<{ category: postCategoryT }> = ({
  category,
}) => {
  const { color, icon } = CATEGORYICONS.filter(
    (cat) => cat.category === category
  )[0];

  return (
    <div
      className={`w-10 h-10 grid text-white place-content-center rounded-full ${color}`}
    >
      {icon}
    </div>
  );
};

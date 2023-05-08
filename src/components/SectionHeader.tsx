import { FC } from "react";

type Props = { title: string; description?: string };

export const SectionHeader: FC<Props> = ({ title, description }) => {
  const titleArray = title.split(" ");
  const sliced = titleArray.slice(0, titleArray.length - 1);

  return (
    <div className="mt-5 md:mt-10">
      <h2 className="text-center text-3xl font-bold">
        <span>{sliced.join(" ")}</span>
        <span className="text-blue-500"> {title.split(" ").slice(-1)}</span>
      </h2>

      {description && (
        <p className="max-w-xl mx-auto text-center mt-2">{description}</p>
      )}
    </div>
  );
};

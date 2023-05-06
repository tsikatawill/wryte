import { FC } from "react";

type Props = { title: string; description?: string };

export const SectionHeader: FC<Props> = ({ title, description }) => {
  return (
    <div className="mt-5">
      <h1 className="mt-10 text-center text-3xl font-bold">{title}</h1>

      {description && <p>{description}</p>}
    </div>
  );
};

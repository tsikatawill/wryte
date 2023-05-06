import { ChangeEvent, FC, useEffect, useState } from "react";
import {
  filterByT,
  filterFormDataT,
  filterValueT,
  postCategoryT,
} from "../types";
import { POSTS } from "../lib/posts";

type Props = {
  handleFilter(filterBy: filterByT, filterValue: filterValueT): void;
};

export const FilterRow: FC<Props> = ({ handleFilter }) => {
  const emptyFormData: filterFormDataT = {
    category: "All",
    author: "",
    title: "",
  };
  const [formData, setFormData] = useState<filterFormDataT>(emptyFormData);

  const AUTHORS = POSTS.map((item) => item.author);

  const [showAuthors, setShowAuthors] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  useEffect(() => {
    console.log({ AUTHORS });
  }, [AUTHORS]);

  return (
    <div className="mb-10">
      <form className="grid grid-cols-3 gap-5" onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="category" className="font-semibold mb-2 block">
            Category
          </label>

          <select
            id="category"
            value={formData.category}
            onChange={(e: ChangeEvent<HTMLSelectElement>) => {
              setFormData({
                ...formData,
                category: e.target.value as "All" | postCategoryT,
              });
              handleFilter("category", e.target.value);
            }}
            className="block outline-blue-500 focus:outline border-none w-full dark:bg-slate-950 bg-slate-200 px-2 h-10"
          >
            {["All", "Backend", "Frontend", "Product Management", "UI/UX"].map(
              (cat) => (
                <option value={cat}>{cat}</option>
              )
            )}
          </select>
        </div>

        <div className="input-group">
          <label htmlFor="author" className="font-semibold mb-2 block">
            Author
          </label>
          <input
            id="author"
            list="author-list"
            value={formData.author}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setFormData({ ...formData, author: e.target.value });
              handleFilter("author", e.target.value);
            }}
            className="block outline-blue-500 focus:outline border-none w-full dark:bg-slate-950 bg-slate-200 px-2 h-10"
            placeholder="Search by author"
          />
          <datalist id="author-list">
            {AUTHORS.map((author) => (
              <option value={author}>{author}</option>
            ))}
          </datalist>
        </div>

        <div className="input-group">
          <label htmlFor="category" className="font-semibold mb-2 block">
            Title
          </label>

          <input
            id="title"
            value={formData.title}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setFormData({
                ...formData,
                title: e.target.value,
              });
              handleFilter("title", e.target.value);
            }}
            placeholder="Search by title"
            className="block outline-blue-500 focus:outline border-none w-full dark:bg-slate-950 bg-slate-200 px-2 h-10"
          />
        </div>
      </form>
    </div>
  );
};

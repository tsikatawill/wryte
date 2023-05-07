import { ChangeEvent, FC, useState } from "react";
import {
  filterByT,
  filterFormDataT,
  filterValueT,
  postCategoryT,
} from "../types";
import { POSTCATEGORIES } from "../lib/postCategories";
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
  const [showAuthors, setShowAuthors] = useState<boolean>(false);

  const AUTHORS = POSTS.map((item) => item.author);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className="mb-10">
      <form
        className="grid md:grid-cols-3 gap-2 md:gap-5 max-w-sm md:max-w-full mx-auto"
        onSubmit={handleSubmit}
      >
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
            className="input"
          >
            {["All", ...POSTCATEGORIES].map((cat) => (
              <option value={cat} key={cat}>
                {cat}
              </option>
            ))}
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
              if (e.target.value.trim().length > 2) {
                setShowAuthors(true);
                handleFilter("author", e.target.value);
              } else {
                handleFilter("author", "");
                setShowAuthors(false);
              }
            }}
            className="input"
            placeholder="Search by author"
          />
          <datalist id="author-list">
            {showAuthors &&
              AUTHORS.map((author, idx) => (
                <option key={idx} value={author}>
                  {author}
                </option>
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
              if (e.target.value.trim().length > 2) {
                handleFilter("title", e.target.value);
              }
            }}
            placeholder="Search by title"
            className="input"
          />
        </div>
      </form>
    </div>
  );
};

import { ReactNode } from "react";

export type themeT = "dark" | "light";

export type routeT = {
  name: string;
  href: string;
  protectedRoute: boolean;
  icon?: ReactNode;
};

export type postCategoryT =
  | "Frontend"
  | "Backend"
  | "Product Management"
  | "UI/UX";

export type postT = {
  id: string;
  title: string;
  author: string;
  image?: string;
  fullText: string;
  category: postCategoryT;
  dateCreated: string;
};

export type filterFormDataT = {
  category: "All" | postCategoryT;
  author: string;
  title: string;
};

export type filterByT = "author" | "category" | "title";
export type filterValueT = string | postCategoryT;

export type filterFncT = (
  filterBy: filterByT,
  filterValue: filterValueT
) => void;

export type userT = {
  id: string;
  displayName: string;
  email: string;
  photoURL?: string;
};

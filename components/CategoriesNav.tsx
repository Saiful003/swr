import React from "react";
import CategoryList from "./CategoryList";

function CategoriesNav() {
  return (
    <div className=" border-b sticky top-[61px] mb-[1.25em] ">
      <ul className="flex gap-5">
        <CategoryList slug="Recent" />
        <CategoryList slug="React" />
        <CategoryList slug="Node" />
        <CategoryList slug="Express" />
        <CategoryList slug="Next" />
        <CategoryList slug="MongoDB" />
      </ul>
    </div>
  );
}

export default CategoriesNav;

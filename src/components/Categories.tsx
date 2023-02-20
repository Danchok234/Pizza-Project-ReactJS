import React from "react";

type CategoriesProps = {
  value: number | string;
  onClickCategory: (i: number) => void;
};
const listOfCategories = [
  "Все",
  "Мясные",
  "Вегетарианская",
  "Гриль",
  "Острые",
  "Закрытые",
];
const Categories: React.FC<CategoriesProps> = React.memo(
  ({ value, onClickCategory }) => {
    return (
      <div className="categories">
        <ul>
          {listOfCategories.map((x, index) => {
            return (
              <li
                key={index}
                onClick={() => onClickCategory(index)}
                className={value === index ? "active" : ""}
              >
                {x}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
);

export default Categories;

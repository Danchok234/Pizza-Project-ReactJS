import React, { useCallback, useEffect, useMemo, useRef } from "react";
import Categories from "../components/Categories";
import Sort from "../components/Sort";
import Skeleton from "../components/PizzaBlock/Skeleton";
import PizzaBlock from "../components/PizzaBlock";
import { selectFilter } from "../redux/slices/filter/selector";
import { setCategoryId, setFilters } from "../redux/slices/filter/slice";
import { useSelector, useDispatch } from "react-redux";
import { selectPizzaData } from "../redux/slices/pizza/selector";
import { fetchPizzas } from "../redux/slices/pizza/asyncActions";
import qs from "qs";
import { useNavigate } from "react-router-dom";
import { listOfOptions } from "../components/Sort";
import { useAppDispatch } from "../redux/store";
import { SearchPizzaParams } from "../redux/slices/pizza/types";

const Home: React.FC = () => {
  const { pizzas, status } = useSelector(selectPizzaData);
  const { categoryId, sort, searchValue } = useSelector(selectFilter);
  const sortType = sort.sortProperty;
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const isSearch = useRef(false);
  const isMounted = useRef(false);

  const onClickCategory = useCallback((id: number) => {
    dispatch(setCategoryId(id));
  }, []);

  useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(
        window.location.search.substring(1)
      ) as unknown as SearchPizzaParams;

      console.log(params);

      const sortObj = listOfOptions.find(
        (obj) => obj.sortProperty === params.sortProperty
      );

      console.log(sortObj);
      dispatch(
        setFilters({
          categoryId: params.category,
          sort: sortObj || listOfOptions[0],
          searchValue: params.order,
        })
      );

      isSearch.current = true;
    }
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);

    if (!isSearch.current) {
      const category = categoryId > 0 ? categoryId : "";
      const order = sortType.includes("-") ? "asc" : "desc";
      const sortProperty = sortType.replace("-", "");
      dispatch(fetchPizzas({ category, order, sortProperty }));
    }

    isSearch.current = false;
  }, [categoryId, sortType, searchValue]);

  useEffect(() => {
    if (isMounted.current) {
      const queryString = qs.stringify({
        sortProperty: sortType,
        categoryId,
      });
      navigate(`?${queryString}`);
    }
    isMounted.current = true;
  }, [categoryId, sortType, searchValue]);

  return (
    <>
      <div className="content__top">
        <Categories value={categoryId} onClickCategory={onClickCategory} />
        <Sort sort={sort} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      {status === "error" ? (
        <div className={"content__error-info"}>
          <h2>Error have happened! We are sorry!😔</h2>
          <p>Try to refresh the page!</p>
        </div>
      ) : (
        <div className="content__items">
          {status === "loading"
            ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
            : pizzas
                .filter((pizza: any) =>
                  pizza.title.toLowerCase().includes(searchValue.toLowerCase())
                )
                .map((pizza: any) => {
                  return <PizzaBlock key={pizza.id} {...pizza} />;
                })}
        </div>
      )}
    </>
  );
};

export default Home;

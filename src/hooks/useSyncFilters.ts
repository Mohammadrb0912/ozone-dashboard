import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import { useFilterStore } from "../store/filterStore";

export function useSyncFilters() {
  const { search, sort, category, setSearch, setSort, setCategory } =
    useFilterStore();
  const [params, setParams] = useSearchParams();

  useEffect(() => {
    const searchParam = params.get("search") || "";
    const sortParam = params.get("sort") || "asc";
    const categoryParam = params.get("category") || "all";


    if (search !== searchParam) setSearch(searchParam);
    if (sort !== sortParam) setSort(sortParam);
    if (category !== categoryParam) setCategory(categoryParam);

    // eslint-disable-next-line
  }, []); 


  useEffect(() => {
    setParams({
      search,
      sort,
      category,
    });
  }, [search, sort, category, setParams]);
}

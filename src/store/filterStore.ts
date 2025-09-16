import { create } from "zustand";

interface FilterState {
  search: string;
  sort: string;
  category: string;
  setSearch: (s: string) => void;
  setSort: (s: string) => void;
  setCategory: (c: string) => void;
  resetFilters: () => void;
}

export const useFilterStore = create<FilterState>((set) => ({
  search: "",
  sort: "default",
  category: "all",
  setSearch: (s) => set({ search: s }),
  setSort: (s) => set({ sort: s }),
  setCategory: (c) => set({ category: c }),
  resetFilters: () => set({ search: "", sort: "default", category: "all" }),
}));

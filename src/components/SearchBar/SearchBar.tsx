import css from "./SearchBar.module.css"
import { ImSearch } from "react-icons/im";

import toast, { Toaster } from "react-hot-toast";
import { useRef } from "react";

type Props ={
  onSearch: (query: string) => void;
}


const SearchBar = ({ onSearch }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const query =inputRef?.current?.value.trim()|| "";
    query === ""
      ? toast.error("Oops! It looks like you forgot to enter a search term.")
      : onSearch(query);
    e.currentTarget.reset();
  };
  return (
    <header className={css.search}>
      <form className={css.searchForm } onSubmit={handleSubmit}>
        <input ref={inputRef}
          className={css.inputSearch}
          name="searchimage"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button type="submit">
          <ImSearch /> Search
        </button>
      </form>
      <Toaster position="top-center" reverseOrder={false} />
    </header>
  );
};

export default SearchBar;

// const message = () => toast("Here is your toast.");

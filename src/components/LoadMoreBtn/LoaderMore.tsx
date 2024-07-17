import css from "./LoaderMore.module.css"



interface LoaderMoreBtn{
  onClick: () => void;
}
const LoaderMore = ({ onClick }: LoaderMoreBtn) => {
  return (
    <button className={css.loadMoreBtn} onClick={onClick}>
      Load More
    </button>
  );
};

export default LoaderMore


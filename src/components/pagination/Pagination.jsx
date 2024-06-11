import styles from "./styles.module.css";
export default function Pagination({
  handlePage,
  handlePrevPage,
  handleNextPage,
  currenPage,
  totalPage,
}) {
  return (
    <div className={styles.paginationBox}>
      <button
        onClick={handlePrevPage}
        className={styles.arrow_left}
        disabled={currenPage === 1}
      >
        {"<"}
      </button>
      <div className={styles.list}>
        {[...Array(totalPage)].map((_, index) => {
          return (
            <button
              key={index}
              className={styles.number}
              onClick={() => {
                handlePage(index + 1);
              }}
              disabled={currenPage === index + 1}
            >
              {index + 1}
            </button>
          );
        })}
      </div>
      <button
        className={styles.arrow_right}
        onClick={handleNextPage}
        disabled={currenPage === totalPage}
      >
        {">"}
      </button>
    </div>
  );
}

import styled from "styled-components";

const PaginationContainer = ({ className, page, lastPage, setPage }) => {
  return (
    <div className={className}>
      <button disabled={page === 1} onClick={() => setPage(1)}>
        В начало
      </button>
      <button disabled={page === 1} onClick={() => setPage(page - 1)}>
        Предыдущая
      </button>
      <div className="current-page">{page}</div>
      <button disabled={page === lastPage} onClick={() => setPage(page + 1)}>
        Следущая
      </button>
      <button disabled={page === lastPage} onClick={() => setPage(lastPage)}>
        В конец
      </button>
    </div>
  );
};

export const Pagination = styled(PaginationContainer)`
  display: flex;
  justify-content: center;
  margin: 20px 0;

  & button {
    margin: 0 10px;
    padding: 5px 10px;
    border: none;
    cursor: pointer;
    color: #fff;
    background-color: #19c880;
    border-radius: 4px;
  }

  & button:disabled {
    background-color: grey;
  }

  & .current-page {
    font-size: 1.2rem;
  }
`;

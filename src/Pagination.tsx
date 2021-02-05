import React, { useEffect, useState } from 'react';

export interface PaginationProps {
  numPages: number;
  onClick: (page: number) => void;
}

const Pagination = (props: PaginationProps): JSX.Element => {
  const [page, setPage] = useState(1);
  const [pageList, setPageList] = useState<Array<number>>([]);
  const { numPages, onClick } = props;

  useEffect(() => {
    const pages = [];
    for (let i = 1; i < numPages + 1; i += 1) {
      pages.push(i);
    }
    setPageList(pages);
  }, [numPages]);

  useEffect(() => {
    onClick(page);
  }, [page, onClick]);

  const previousButton = () => {
    return (
      <button
        className="pagination-previous"
        disabled={page <= 1}
        onClick={() => {
          setPage(page - 1);
        }}
        type="button"
      >
        Previous
      </button>
    );
  };

  const nextButton = () => {
    return (
      <button
        className="pagination-next"
        disabled={page >= numPages}
        onClick={() => {
          setPage(page + 1);
        }}
        type="button"
      >
        Next
      </button>
    );
  };

  const pageButton = (index: number) => {
    const currentPage = 'pagination-link is-current';
    const otherPage = 'pagination-link';
    return (
      <button
        className={page === index ? currentPage : otherPage}
        key={index}
        onClick={() => setPage(index)}
        aria-label={`Goto page ${index}`}
        type="button"
      >
        {index}
      </button>
    );
  };

  const paginationList = () => {
    return (
      <ul className="pagination-list">
        <li>{pageList.map((pageIndex: number) => pageButton(pageIndex))}</li>
      </ul>
    );
  };

  return (
    <nav className="pagination is-centered" role="navigation" aria-label="pagination">
      {previousButton()}
      {nextButton()}
      {paginationList()}
    </nav>
  );
};

export default Pagination;

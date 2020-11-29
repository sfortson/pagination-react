// @flow
import * as React from 'react';
import { useEffect, useState } from 'react';

type Props = {
  numPages: number,
  onClick: (page: number) => mixed,
};

const Pagination = (props: Props): React.Element<'nav'> => {
  const [page, setPage] = useState(1);
  const [pageList, setPageList] = useState([]);
  const { numPages, onClick } = props;

  useEffect(() => {
    const pages = [];
    for (let i: number = 1; i < numPages + 1; i++) {
      pages.push(i);
    }
    setPageList(pages);
  }, [numPages]);

  useEffect(() => {
    onClick(page);
  }, [page]);

  const previousButton = () => {
    return (
      <a
        className="pagination-previous"
        disabled={page <= 1}
        onClick={() => {
          setPage(page - 1);
        }}
      >
        Previous
      </a>
    );
  };

  const nextButton = () => {
    return (
      <a
        className="pagination-next"
        disabled={page >= numPages}
        onClick={() => {
          setPage(page + 1);
        }}
      >
        Next
      </a>
    );
  };

  const pageButton = (index: number) => {
    const currentPage = 'pagination-link is-current';
    const otherPage = 'pagination-link';
    return (
      <a
        className={page === index ? currentPage : otherPage}
        key={index}
        onClick={() => setPage(index)}
        aria-label={`Goto page ${index}`}
      >
        {index}
      </a>
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

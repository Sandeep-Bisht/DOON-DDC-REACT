import React, { useEffect } from 'react';
import { useQuery } from 'react-query';
import { useTable, usePagination } from 'react-table';

const fetchPeople = async (pageIndex, pageSize) => {
  const response = await fetch(`API_ENDPOINT?page=${pageIndex + 1}&pageSize=${pageSize}`);
  const data = await response.json();
  return data;
};

const People = () => {
  const {
    data: peopleData,
    isLoading,
    isError,
    error,
    isFetching,
    fetchMore,
    canFetchMore,
  } = useQuery('people', ({ pageParam = 0 }) => fetchPeople(pageParam, 20), {
    getNextPageParam: lastPage => lastPage.nextPage, // Assuming your API response contains a nextPage property
  });

  const columns = [
    { Header: 'ID', accessor: 'id' },
    { Header: 'Name', accessor: 'name' },
    { Header: 'Age', accessor: 'age' },
    // Add more columns as needed
  ];

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data: peopleData?.pages.flatMap(page => page.data) || [],
      initialState: { pageIndex: 0, pageSize: 20 },
    },
    usePagination
  );

  useEffect(() => {
    // Fetch initial data on page load
    fetchMore();
  }, [fetchMore]);

  useEffect(() => {
    const handleScroll = () => {
      // Check if user has scrolled to the bottom of the page
      if (
        window.innerHeight + document.documentElement.scrollTop ===
        document.documentElement.offsetHeight
      ) {
        // Fetch next page of data when scrolling to the bottom
        if (canFetchMore && !isFetching) {
          fetchMore();
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [canFetchMore, isFetching, fetchMore]);

  return (
    <section className="all-booking-area">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1 className="common-heading d-flex align-items-center justify-content-center mb-4">
              <span className="bar one"></span>All Patient
              <span className="bar two"></span>
            </h1>
          </div>
        </div>

        {isLoading ? (
          <div>Loading...</div>
        ) : isError ? (
          <div>Error: {error.message}</div>
        ) : (
          <>
            <table {...getTableProps()} className="table">
              <thead>
                {headerGroups.map(headerGroup => (
                  <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map(column => (
                      <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                    ))}
                  </tr>
                ))}
              </thead>
              <tbody {...getTableBodyProps()}>
                {page.map(row => {
                  prepareRow(row);
                  return (
                    <tr {...row.getRowProps()}>
                      {row.cells.map(cell => (
                        <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                      ))}
                    </tr>
                  );
                })}
              </tbody>
            </table>

            {isFetching && <div>Loading more...</div>}

            <div className="pagination">
              <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
                {'<<'}
              </button>
              <button onClick={() => previousPage()} disabled={!canPreviousPage}>
                {'<'}
              </button>
              <button onClick={() => nextPage()} disabled={!canNextPage}>
                {'>'}
              </button>
              <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
                {'>>'}
              </button>
              <span>
                Page{' '}
                <strong>
                  {pageIndex + 1} of {pageOptions.length}
                </strong>{' '}
              </span>
              <span>
                | Go to page:{' '}
                <input
                  type="number"
                  defaultValue={pageIndex + 1}
                  onChange={e => {
                    const page = e.target.value ? Number(e.target.value) - 1 : 0;
                    gotoPage(page);
                  }}
                  style={{ width: '50px' }}
                />
              </span>
              <select
                value={pageSize}
                onChange={e => {
                  setPageSize(Number(e.target.value));
                }}
              >
                {[10, 20, 30, 40, 50].map(pageSize => (
                  <option key={pageSize} value={pageSize}>
                    Show {pageSize}
                  </option>
                ))}
              </select>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default People;

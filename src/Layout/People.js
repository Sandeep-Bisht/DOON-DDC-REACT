import React, { useEffect } from 'react';
import { useQuery } from 'react-query';

const People = () => {
  const PAGE_SIZE = 10;
  
  const fetchData = async (page = 1) => {
    const response = await fetch(`http://localhost:4000/api/patient/get_patient${page}&limit=${PAGE_SIZE}`);
    const data = await response.json();
    return data;
  };
  
  const { data, isLoading, isError, isFetching, fetchMore } = useQuery('tableData', fetchData);
  
  useEffect(() => {
    if (data && !isFetching) {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, [data, isFetching]);
  
  const handleScroll = () => {
    if (
      window.innerHeight + window.scrollY >= document.body.offsetHeight &&
      !isFetching &&
      data &&
      data.length % PAGE_SIZE === 0
    ) {
      fetchMore();
    }
  };
  
  if (isLoading) {
    return <div>Loading...</div>;
  }
  
  if (isError) {
    return <div>Error loading data</div>;
  }
  
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          {/* Add more table headers */}
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.email}</td>
            {/* Render more table cells based on your data structure */}
          </tr>
        ))}
        {isFetching && (
          <tr>
            <td colSpan="3">Loading more...</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default People;

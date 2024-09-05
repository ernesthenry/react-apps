import  { useState } from 'react';

const Pagination = ({ itemsPerPage, data }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = data.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div>
      <ul>
        {currentItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <div>
        <button onClick={() => handlePageChange(currentPage - 1)}>Previous</button>
        <span> Page {currentPage} of {totalPages} </span>
        <button onClick={() => handlePageChange(currentPage + 1)}>Next</button>
      </div>
    </div>
  );
};

const Parent = () => {
  const data = Array.from({ length: 50 }, (_, i) => `Item ${i + 1}`);

  return <Pagination itemsPerPage={10} data={data} />;
};

export default Parent;

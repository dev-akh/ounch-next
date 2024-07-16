import React from 'react';

const Pagination = ({ page, pageSize, totalItems, onPageChange }) => {
  const totalPages = Math.ceil(totalItems / pageSize);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      onPageChange(newPage);
    }
  };
  const getPaginationButtons = () => {
    let buttons = [];
    if (totalPages <= 11) {
      for (let i = 1; i <= totalPages; i++) {
        buttons.push(i);
      }
    } else {
      buttons.push(1);
      if (page > 3) {
        buttons.push('...');
      }
      for (let i = Math.max(2, page - 2); i <= Math.min(totalPages - 1, page + 2); i++) {
        buttons.push(i);
      }
      if (page < totalPages - 2) {
        buttons.push('...');
      }
      buttons.push(totalPages);
    }
    return buttons;
  };

  const paginationButtons = getPaginationButtons();

  return (
    <section className='container mx-auto flex justify-center items-center my-8'>
      <button
        className='mr-2 px-2 py-1 border border-gray-300 rounded'
        disabled={page === 1}
        onClick={() => handlePageChange(page - 1)}
      >
        Previous
      </button>

      {paginationButtons.map((button, index) =>
        button === '...' ? (
          <span key={index} className='mx-1'>...</span>
        ) : (
          <button
            key={index}
            className={`mx-1 px-2 py-1 border border-gray-300 rounded ${button === page ? 'bg-blue-500 text-white' : ''}`}
            onClick={() => handlePageChange(button)}
          >
            {button}
          </button>
        )
      )}
      <button
        className='ml-2 px-2 py-1 border border-gray-300 rounded'
        disabled={page === totalPages}
        onClick={() => handlePageChange(page + 1)}
      >
        Next
      </button>
    </section>
  );
};

export default Pagination;

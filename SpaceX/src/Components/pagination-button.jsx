import React from 'react';



const PaginationButton = ({ totalPages, currentPage, onPageChange }) => {
    return (
        <div className="pagination">
            <button
                className="pagination-button"
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
            >
                &lt;
            </button>
            {Array.from({ length: totalPages }, (_, index) => (
                <button
                    key={index}
                    className={`pagination-button ${currentPage === index + 1 ? 'active' : ''}`}
                    onClick={() => onPageChange(index + 1)}
                >
                    {index + 1}
                </button>
            ))}
            <button
                className="pagination-button"
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
            >
                &gt;
            </button>
        </div>
    );
};



export default PaginationButton;

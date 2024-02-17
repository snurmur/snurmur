import React from "react";
import styled from "styled-components";

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
  gap: 3%;
  margin-top: 10%;
  margin-bottom: 5%;

  button {
    padding: 15px 27px;
    font-size: 1rem;
    font-weight: 400;
    background-color: rgba(255, 249, 229, 1);
    border: none;
    border-radius: 0.6rem;
    font-family: "Poppins", sans-serif;
    cursor: pointer;
  }

  button:hover {
    background-color: rgba(251, 235, 181, 1);
  }

  button.active {
    background-color: rgba(251, 235, 181, 1);
  }
`;

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <PaginationContainer>
      {currentPage > 1 && (
        <button onClick={() => onPageChange(currentPage - 1)}>Previous</button>
      )}

      {pageNumbers.map((pageNumber) => (
        <button
          key={pageNumber}
          onClick={() => onPageChange(pageNumber)}
          className={currentPage === pageNumber ? "active" : ""}
        >
          {pageNumber}
        </button>
      ))}

      {currentPage < totalPages && (
        <button onClick={() => onPageChange(currentPage + 1)}>Next</button>
      )}
    </PaginationContainer>
  );
};

export default Pagination;

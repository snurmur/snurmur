import React, { useState } from "react";
import Product from "../components/product/Product";
import Pagination from "../components/Pagination";
import { useProduct } from "../context/ProductContext";

const Shop = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6; // Number of products to display per page

  // Access the products from the context
  const allProducts = useProduct();

  // Slice the products based on the current page
  const productsToDisplay = allProducts.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );

  return (
    <div>
      <Product products={productsToDisplay} />
      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(allProducts.length / productsPerPage)}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default Shop;

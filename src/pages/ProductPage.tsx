/* eslint-disable @typescript-eslint/no-explicit-any */
import CollectionCard from "@/components/CollectionCard";
import ProductCard from "@/components/ProductCard";
import { useGetProductsQuery } from "@/feature/products/productSlice";
import { Link } from 'react-router-dom';
import { useState } from "react";

interface Product {
  _id: string;
  title: string;
  price: number;
  image: string;
}

export default function ProductPage() {
  const { data: response, isLoading, error } = useGetProductsQuery();
  const [sortBy, setSortBy] = useState("");
  const initialProductCount = 8;

  const sortProducts = (products: Product[]) => {
    if (!products) return [];

    switch (sortBy) {
      case "price-low":
        return [...products].sort((a, b) => a.price - b.price);
      case "price-high":
        return [...products].sort((a, b) => b.price - a.price);
      case "name":
        return [...products].sort((a, b) => a.title.localeCompare(b.title));
      default:
        return products;
    }
  };

  const sortedProducts = response?.data ? sortProducts(response.data) : [];

  // Loading skeleton component
  const LoadingSkeleton = () => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {[...Array(8)].map((_, index) => (
        <div key={index} className="bg-white rounded-lg shadow-md p-4 animate-pulse">
          <div className="h-64 bg-gray-200 rounded-md mb-4"></div>
          <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2 mb-4"></div>
          <div className="h-10 bg-gray-200 rounded"></div>
        </div>
      ))}
    </div>
  );

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-red-600 mb-2">Error Loading Products</h2>
          <p className="text-gray-600">Please try again later</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mb-12">
        <CollectionCard />
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Our Products</h1>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Sort by</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="name">Name: A to Z</option>
          </select>
        </div>

        {isLoading ? (
          <LoadingSkeleton />
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {sortedProducts.slice(0, initialProductCount).map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
            </div>

            {sortedProducts.length > initialProductCount && (
              <div className="text-center mt-12">
                <Link
                  to="/all-products"
                  className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                >
                  Show All Products
                  <span className="ml-2">({sortedProducts.length})</span>
                </Link>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

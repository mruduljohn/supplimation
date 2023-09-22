import React from 'react';
import umb from '../../assets/images/umbrella.jpg';
import choco from '../../assets/images/chocolate.jpg';

const Products = () => {
  // Sample products data
  const sampleProducts = [
    { id: 1, name: 'Umbrella', description: 'An umbrella is a portable, circular cover that protects people from rain and sun.', image: umb },
    { id: 2, name: 'Chocolate', description: 'Chocolate is a food made from roasted and ground cacao seed kernels.', image: choco },
    { id: 3, name: 'Product 3', description: 'Description for Product 3', image: '/path/to/yet-another-image.jpg' },
    { id: 4, name: 'Product 4', description: 'Description for Product 3', image: '/path/to/yet-another-image.jpg' },
    { id: 5, name: 'Product 5', description: 'Description for Product 3', image: '/path/to/yet-another-image.jpg' },
  ];

  return (
    <div className="flex flex-wrap">
      {sampleProducts.map((product) => (
        <div
          key={product.id}
          className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-2"
        >
          <a href="#">
            <img
              className="rounded-t-lg object-cover w-full h-56"
              src={product.image} // Use the image path from the product object
              alt="Product Image"
            />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {product.name}
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {product.description}
            </p>
            <a
              href="#"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Select
              <svg
                className="w-3.5 h-3.5 ml-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;

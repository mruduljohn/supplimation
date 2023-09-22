import React from 'react';
import umb from '../../assets/images/umbrella.jpg';
import choco from '../../assets/images/chocolate.jpg';
import protein from '../../assets/images/proteinpowder.jpg';
import christmas from '../../assets/images/christmasgift.jpg';
import sunscreen from '../../assets/images/sunscreen.png';


const Products = () => {
  // Sample products data
  const sampleProducts = [
    { id: 1, name: 'Umbrella', description: 'An umbrella is a portable, circular cover that protects people from rain and sun.', image: umb },
    { id: 2, name: 'Chocolate', description: 'Chocolate is a food made from roasted and ground cacao seed kernels.', image: choco },
    { id: 3, name: 'Protein Powder', description: 'Protein powder is a concentrated source of protein that comes from plants, eggs, or milk.', image: protein },
    { id: 4, name: 'Christmas Gifts', description: 'A Christmas gift is a present given to celebrate Christmas.', image: christmas },
    { id: 5, name: 'Sunscreen Lotions', description: 'Sunscreen is a topical product that protects the skin from the suns harmful ultraviolet (UV) radiation.', image: sunscreen },
  ];

  return (
    <div className="grid grid-cols-5">
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
                
              </svg>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;

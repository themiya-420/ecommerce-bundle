import React from "react";

const ProductCard = ({
  tag = "",
  discount = "30%",
  bundle = "4 items",
  currency = "",
  image,
  title,
  fulfilledBy = "",
  price,
  deliveryDate = "",
  storePickup = true,
}) => {
  return (
    <div
      className="bg-white dark:bg-gray-800 border-[1px] border-gray-2 dark:border-gray-700
    00 text-black dark:text-white p-4 rounded-lg shadow-lg w-full max-w-sm sm:w-80"
    >
      {/* Tag */}
      <div className="flex justify-between mb-2">
        {tag && (
          <div className="w-12 -ml-2 px-3 py-1 mb-2 bg-green-500 text-xs text-white rounded-tr-lg rounded-bl-lg">
            {tag}
          </div>
        )}
        {bundle && (
          <div className="w-24 text-center -mr-4 px-3 py-1 mb-2 bg-red-500 text-xs text-red-100 rounded-tl-lg ">
            {bundle}
          </div>
        )}
      </div>

      {/* Product Image */}
      <div className="flex justify-center  items-center">
        <img
          src={image}
          alt={title}
          className="h-48 w-auto rounded-lg object-contain"
        />
      </div>

      {discount && (
        <div className="w-full flex mt-4 justify-end">
          <div className="w-12 -ml-2 px-3 py-1 mb-2 bg-green-300 text-xs text-green-600 rounded-tr-lg rounded-bl-lg">
            {discount}
          </div>
        </div>
      )}

      {/* Product Details */}
      <div className="mt-4">
        <h3 className="text-sm sm:text-base font-semibold line-clamp-2">
          {title}
        </h3>
        <div className="flex items-center mt-2">
          <span className="bg-yellow-500 text-black text-xs font-medium px-2 py-1 rounded">
            Fulfilled by {fulfilledBy}
          </span>
        </div>
      </div>

      {/* Price */}
      <div className="mt-4 text-lg font-bold">
        {currency} {price.toLocaleString()}
      </div>

      {/* Delivery Info */}
      <div className="text-sm mt-2">
        <p>
          Free delivery by{" "}
          <span className="text-green-400 font-semibold">{deliveryDate}</span>
        </p>
        {storePickup && <p>Free store pickup</p>}
      </div>
    </div>
  );
};

export default ProductCard;

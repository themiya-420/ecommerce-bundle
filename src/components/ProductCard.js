import React from "react";

const ProductCard = ({
  tag = "",
  image,
  title,
  fulfilledBy = "",
  price,
  deliveryDate = "",
  storePickup = true,
}) => {
  return (
    <div className="bg-white dark:bg-gray-800 text-black dark:text-white p-4 rounded-lg shadow-lg w-full max-w-sm sm:w-80">
      {/* Tag */}
      {tag && (
        <div className="w-12 -ml-2 px-3 py-1 mb-2 bg-green-500 text-xs text-white rounded-tr-lg rounded-bl-lg">
          {tag}
        </div>
      )}

      {/* Product Image */}
      <div className="flex justify-center items-center">
        <img src={image} alt={title} className="h-48 w-auto object-contain" />
      </div>

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
      <div className="mt-4 text-lg font-bold">AED {price.toLocaleString()}</div>

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

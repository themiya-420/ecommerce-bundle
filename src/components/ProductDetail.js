import React, { useState } from "react";

const ProductDetail = ({
  product = {
    name: "Title",
    model: "RZ38-05310100-R351",
    sku: "227790",
    price: 299.18,
    inStock: true,
    images: [
      "https://placehold.co/600x600",
      "https://placehold.co/600x600",
      "https://placehold.co/600x600",
    ],
    features: ["Feature 01", "Feature 02", "Feature 03"],
    deliveryDate: "Jan 27",
    deliveryTime: "9 Hours, 52 Minutes",
  },
}) => {
  const [selectedImage, setSelectedImage] = useState(product.images[0]);
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="bg-gray-50 dark:bg-gray-900 text-black dark:text-white p-4 sm:p-8">
      <div className="container mx-auto flex flex-col lg:flex-row gap-8">
        {/* Left Section: Product Images */}
        <div className="flex-1">
          {/* Main Image */}
          <div className="border dark:border-gray-700 p-4 rounded-lg">
            <img
              src={selectedImage}
              alt={product.name}
              className="w-full h-auto rounded-lg"
            />
          </div>

          {/* Thumbnail Images */}
          <div className="flex gap-2 mt-4 overflow-x-auto">
            {product.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Thumbnail ${index}`}
                className={`w-20 h-20 object-cover cursor-pointer rounded-lg border ${
                  selectedImage === image
                    ? "border-yellow-500 dark:border-yellow-400"
                    : "border-gray-300 dark:border-gray-700"
                }`}
                onClick={() => setSelectedImage(image)}
              />
            ))}
          </div>
        </div>

        {/* Right Section: Product Details */}
        <div className="flex-1">
          {/* Product Title */}
          <h1 className="text-2xl sm:text-3xl font-bold">{product.name}</h1>

          {/* SKU and Model */}
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            <span className="font-semibold">Model:</span> {product.model}{" "}
            &nbsp;|&nbsp;
            <span className="font-semibold">SKU:</span> {product.sku}
          </p>

          {/* Features List */}
          <ul className="list-disc pl-5 mt-4 space-y-2">
            {product.features.map((feature, index) => (
              <li key={index} className="text-sm sm:text-base">
                {feature}
              </li>
            ))}
          </ul>

          {/* Price and Availability */}
          <div className="mt-6">
            <p className="text-3xl font-bold">${product.price}</p>
            <p
              className={`mt-2 ${
                product.inStock ? "text-green-500" : "text-red-500"
              }`}
            >
              {product.inStock ? "In Stock" : "Out of Stock"}
            </p>
          </div>

          {/* Quantity Selector and Add to Cart Button */}
          <div className="flex items-center gap-4 mt-6">
            <select
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              className="border dark:border-gray-700 bg-gray-100 dark:bg-gray-800 text-black dark:text-white px-4 py-2 rounded-lg focus:outline-none"
            >
              {[...Array(10).keys()].map((num) => (
                <option key={num + 1} value={num + 1}>
                  {num + 1}
                </option>
              ))}
            </select>
            <button
              className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600"
              onClick={() => alert(`Added ${quantity} item(s) to cart!`)}
            >
              Add to Cart
            </button>
          </div>

          {/* Delivery Information */}
          <div className="mt-6">
            <p className="text-gray-600 dark:text-gray-400">
              Delivered by{" "}
              <span className="font-semibold">{product.deliveryDate}</span>
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              If you order within {product.deliveryTime}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;

// import React from "react";
// import ProductCard from "./components/ProductCard";
// import NavBar from "./components/NavBar";
// import NavbarWithDropdowns from "./components/NavbarWithDropDowns";
// import Carousel from "./components/Carousel";
// import ProductDetail from "./components/ProductDetail";
// function App() {
//   const handleAddToCart = () => alert("Added to cart!");

//   const slides = [
//     {
//       title: "Exclusive Sale!",
//       subtitle: "Unbeatable Offers on Gaming Chairs",
//       image: "https://placehold.co/400x300",
//       buttonText: "Shop Now",
//       buttonLink: "/shop",
//       backgroundColor: "#6b46c1", // Example background color
//     },
//     {
//       title: "Up to 50% Off",
//       subtitle: "Grab the Best Deals on Electronics",
//       image: "https://placehold.co/400x300",
//       buttonText: "Explore Now",
//       buttonLink: "/electronics",
//       backgroundColor: "#ff6f61",
//     },
//     {
//       title: "New Arrivals!",
//       subtitle: "Check Out the Latest Gadgets",
//       image: "https://placehold.co/400x300",
//       buttonText: "Discover",
//       buttonLink: "/new-arrivals",
//       backgroundColor: "#2b6cb0",
//     },
//   ];

//   const menuItems = [
//     {
//       title: "COMPUTERS & LAPTOPS",
//       isActive: true,
//       dropdownContent: [
//         {
//           title: "Laptops",
//           link: "/laptops",
//           image: "https://via.placeholder.com/150",
//         },
//         { title: "Desktops", link: "/desktops" },
//         { title: "Monitors", link: "/monitors" },
//       ],
//     },
//     {
//       title: "OFFICE & NETWORKING",
//       isActive: false,
//       dropdownContent: [
//         {
//           title: "Printers",
//           link: "/printers",
//           image: "https://via.placeholder.com/150",
//         },
//         { title: "Routers", link: "/routers" },
//       ],
//     },
//     {
//       title: "MOBILES & TABLETS",
//       isActive: false,
//       dropdownContent: [
//         { title: "Smartphones", link: "/smartphones" },
//         {
//           title: "Tablets",
//           link: "/tablets",
//           image: "https://via.placeholder.com/150",
//         },
//       ],
//     },
//     {
//       title: "NEW RELEASES",
//       isActive: true,
//       dropdownContent: [
//         { title: "Gadgets", link: "/gadgets" },
//         { title: "Accessories", link: "/accessories" },
//       ],
//     },
//   ];

//   const products = [
//     { name: "Gaming Chair", link: "/gaming-chair" },
//     { name: "Office Chair", link: "/office-chair" },
//     { name: "Ergonomic Chair", link: "/ergonomic-chair" },
//     { name: "Gaming Desk", link: "/gaming-desk" },
//     { name: "Monitor Stand", link: "/monitor-stand" },
//   ];
//   const product = {
//     name: "RAZER Iskur V2 X Gaming Chair",
//     model: "RZ38-05310100-R351",
//     sku: "227790",
//     price: 299.18,
//     inStock: true,
//     images: [
//       "https://placehold.co/600x600",
//       "https://placehold.co/600x600",
//       "https://placehold.co/600x600",
//     ],
//     features: [
//       "Built-in Lumbar Support",
//       "Widened Seat Base",
//       "High-Density Foam Cushions",
//       "Adjustable Recline",
//       "2D Armrests",
//       "Plush Fabric Finish",
//     ],
//     deliveryDate: "Jan 27",
//     deliveryTime: "9 Hours, 52 Minutes",
//   };

//   return (
//     <>
//       <NavBar products={products} />
//       <NavbarWithDropdowns
//         menuItems={menuItems}
//         backgroundColor="bg-yellow-500"
//         activeColor="bg-red-500"
//       />
//       <div className="p-6 dark:bg-gray-900">
//         <Carousel slides={slides} buttonColor="bg-orange-500" />
//         <ProductCard
//           tag="New"
//           image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIUs54cHcePbWWG7EhhTkmBX44uVhYUzC4YZycRVLXzcyPHxFVzRORzPX8oOGZHx4Ve_o&usqp=CAU"
//           title="RAZER Iskur V2 X Gaming Chair"
//           fulfilledBy="Microless"
//           price={1092}
//           currency="USD"
//           deliveryDate="Tomorrow, Jan 23"
//           storePickup={true}
//         />
//       </div>
//       <ProductDetail />
//     </>
//   );
// }

// export default App;

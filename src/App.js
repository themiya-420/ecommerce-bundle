import React from "react";
import ProductCard from "./components/ProductCard";

function App() {
  const handleAddToCart = () => alert("Added to cart!");

  return (
    <div className="p-6">
      <ProductCard
        tag="New"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIUs54cHcePbWWG7EhhTkmBX44uVhYUzC4YZycRVLXzcyPHxFVzRORzPX8oOGZHx4Ve_o&usqp=CAU"
        title="RAZER Iskur V2 X Gaming Chair"
        fulfilledBy="Microless"
        price={1092}
        deliveryDate="Tomorrow, Jan 23"
        storePickup={true}
      />
    </div>
  );
}

export default App;

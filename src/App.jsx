import "./App.css";
import rocketdab from "./assets/rocketdab.png";
import { useState, useEffect } from "react";

function App() {
  const [productData, setProductData] = useState({
    title: "iPhone",
    image: rocketdab,
    price: "$Price",
    description: "Description",
  });

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products/1"); // Placeholder API
        const data = await response.json();

        const updatedProductData = {
          title: data.title,
          image: data.images[0],
          price: data.price,
          description: data.description,
        };
        console.log(updatedProductData);

        setProductData(updatedProductData);
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };

    fetchProductData();
  }, []);

  return (
    <>
      <div>
        <h1>{productData.title}</h1>
      </div>
      <img src={productData.image} alt="image" />
      <div>
        <p>
          Price: <span>{productData.price}</span>
        </p>
        <p>
          Description: <span>{productData.description}</span>
        </p>
      </div>
      <div
        className="buttons"
        style={{
          display: "flex",
          gap: "justify",
          justifyContent: "space-between",
        }}
      >
        <button onClick={}>Prev</button>
        <button>Next</button>
      </div>
    </>
  );
}

export default App;

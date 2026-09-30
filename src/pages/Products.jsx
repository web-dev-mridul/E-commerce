// import Cards from "../components/Cards";
import { useEffect, useState } from "react";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);
  // console.log(products);
  return (
    <div>
      <h1 className="text-4xl font-semibold text-center mt-10">
        Popular Products
      </h1>
      <div className="grid grid-cols-3 gap-10 mx-25 mt-10">
        {products?.map((product) => (
          <div key={product.id} className="border border-gray-500 rounded-lg">
            <img src={product.images} alt={product.title} />
            <p className="px-3 mt-5 text-xl">{product.title}</p>
            <p className="px-3 pb-3 text-xl">${product.price}</p>
          </div>
        ))}
      </div>

      {/* <div className="grid grid-cols-4 mx-25 my-20 gap-10">
        <Cards Image="" Name="" Description="" Price="" />
        <Cards />
        <Cards />
        <Cards />
      </div> */}
    </div>
  );
};

export default Products;

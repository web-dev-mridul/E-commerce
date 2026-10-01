import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Cards from "../components/Cards";

const ProductDetails = () => {
  const { id } = useParams();
  const [singleProduct, setSingleProduct] = useState({});
  useEffect(() => {
    fetch(`https://api.escuelajs.co/api/v1/products/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setSingleProduct(data);
      });
      
  }, [id]);
  console.log(singleProduct)
  return (
    <div>
      <Cards
        Image={singleProduct.images}
        Name={singleProduct.title}
        Description={singleProduct.price}
      />
    </div>
  );
};

export default ProductDetails;

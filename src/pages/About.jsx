import { useEffect, useState } from "react";
import Cards from "../components/Cards";

const About = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/categories")
      .then((answer) => answer.json())
      .then((data) => {
        setCategories(data);
      });
  }, []);
  return (
    <div>
      <div className="grid grid-cols-3 gap-10 p-25">
        {categories?.map((productList) => (
          <div key={productList.id}>
            <Cards Image={productList.image} Name={productList.name} Description={productList.slug} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;

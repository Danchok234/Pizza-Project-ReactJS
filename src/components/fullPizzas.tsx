import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const FullPizza: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [pizza, setPizza] = useState<{
    imageUrl: string;
    title: string;
    price: number;
  }>();

  useEffect(() => {
    async function fetchPizza() {
      try {
        const { data } = await axios.get(
          "https://63d42d420e7ae91a00993468.mockapi.io/items/" + id
        );
        setPizza(data);
      } catch (err) {
        alert("Error");
        navigate("/");
      }
    }
    fetchPizza();
  }, [id]);

  if (!pizza) {
    return <>Loading...</>;
  }

  return (
    <div className="containter">
      <img src={pizza.imageUrl} />
      <h1>{pizza.title}</h1>
      <h4>{pizza.price}</h4>
    </div>
  );
};

export default FullPizza;

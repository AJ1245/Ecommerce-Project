import "./HomePage.css";
import { Header } from "../../components/header.jsx";
import { useEffect, useState } from "react";
import axios from "axios";
import { ProductsGrid } from "./ProductsGrid.jsx";

export function HomePage({cart}) {

  const [products,setProducts]=useState([]);
  

  useEffect(()=>{
    const gethomedata = async () => {
      const response = await axios.get('/api/products');
      setProducts(response.data);
    };
    gethomedata();

  },[]);  

 

  return (
    <>
      <title>Ecommerce Project</title>
    
      <Header  cart = {cart}/>
      <div className="home-page">
      <ProductsGrid products={products} />
      </div>
    </>
  );
}

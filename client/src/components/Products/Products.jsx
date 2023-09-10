import React from "react";
import Subproduct from "./Subproduct";
function Products () {
  const productlist =[
    {
      image:"https://img.freepik.com/premium-photo/raw-jasmine-rice-grain-with-ear-paddy-agricultural-products-food-asian-thai-rice-white-bowl-sack-background_73523-3077.jpg?w=1060",
      name:"Rice",
      price:1000,
      Sold_by:"John",
      status:"Sold"
    }
  ]
  return (
    <Subproduct productlist={productlist}/>
  );
}
export default Products;

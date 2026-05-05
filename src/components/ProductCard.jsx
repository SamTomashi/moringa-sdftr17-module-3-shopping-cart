// import { useState } from "react";
// import Button from "./Button";

export default function ProductCard({product, setCart}) {
    const {name, category, price, image} = product

    
    function handleOnclick(){
      setCart(
          (prev)=> [...prev, name]
        )

    }

  return (
    <div className="card col-3 m-1">
      <img src={image} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">
          {category}
        </p>
        <p>Ksh.{price}</p>
        {/* <Button handleOnclick = {()=> handleOnclick()}/> */}
        <button className="btn btn-primary" onClick={()=> handleOnclick()}>
          Add To Cart
        </button>
      </div>
    </div>
  );
}

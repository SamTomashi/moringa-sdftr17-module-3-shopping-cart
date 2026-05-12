import { useParams } from "react-router-dom";

export default function ProductDetails() {
  const { id } = useParams(); //returns an object with all parameters passed to the URL

  return (
    <>
      details of product id {id}
      <button>Add To cart</button>
    </>
  );
}

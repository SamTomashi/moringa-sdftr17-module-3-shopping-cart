export default function Button({handleOnclick}){


    return(
        <button className="btn btn-primary" onClick={()=> handleOnclick()}>
          Add To Cart
        </button>
    )
}
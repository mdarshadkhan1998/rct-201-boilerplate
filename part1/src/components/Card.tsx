import { Link } from "react-router-dom";
function Card({ d }:any) {
  console.log(d)
  return (
    <div className="item">
      <img src="https://www.surfstitch.com/on/demandware.static/-/Sites-ss-master-catalog/default/dw41aabbf1/images/564985BLK/BLACK-WOMENS-FOOTWEAR-CONVERSE-SNEAKERS-564985BLK_5.JPG" style={{width:"100px", height:"100px"}} className="productImage" />
      <span>
        <Link className="productLink" to={`/${d.id}`}>
          {/* Product Name */}
          <h2>{d.product_name}</h2>
        </Link>
      </span><br/>
      <span className="productCategory">{d.category}</span><br/>
      {/* Notice the $ before price. keep it dont edit it. eg: "$123" */}
      <span className="productPrice">{`$${d.price}`}</span><br/>
      {/* Notice the Ratings: text. don't edit it. eg: "Ratings: 3.5" */}
      <span className="productRating">Ratings:{d.rating} </span><br/>
      {/* Show button here if item is already in the cart. otherwise show "Item Already in cart" */}
      
      {/* <div className="itemInCart">Item Already in cart</div>  */}
      <button className="productAddtoCart">
        Add to cart
      </button>
      
    </div>
  );
}

export { Card };

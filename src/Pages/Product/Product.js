import React from "react";
import "./Product.css";
import { useState, useEffect } from "react";
import { Navigate, useParams } from "react-router-dom";

export default function Product() {
  const [mainProduct, setMainProduct] = useState([]);
  const [productName, setProductName] = useState([]);
  const [productPrice, setProductPrice] = useState([]);
  const [productImg, setProductImg] = useState([]);
  const [reDirect , setReDirect] = useState(false)

  let params = useParams();

  useEffect(() => {
    fetch(`http://localhost:3000/product/${params.productID}`)
      .then((res) => res.json())
      .then((data) => {
        setMainProduct(data[0]);
      });
  }, []);

  function nameHandler(event) {
    setProductName(event.target.value);
  }

  function priceHandler(event) {
    setProductPrice(event.target.value);
  }

  function imgHandler(event) {
    setProductImg(event.target.value);
  }

  function editProduct(event , mainProductID) {
    event.preventDefault()

    let newProductInfo = {
      name : productName,
      price : productPrice,
      img : productImg
    }

    fetch(`http://localhost:3000/product/${mainProductID}` , {
      method : "PUT" , 
      headers : {
        "Content-Type" : "application/json"
      },
      body : JSON.stringify(newProductInfo),
    }).then(
      setReDirect(true)
    );
  }
  
  return (
    <div className="product">
      <label>Name</label>
      <input
        type="text"
        placeholder={mainProduct.title}
        value={productName}
        onChange={(event) => nameHandler(event)}
      />

      <label>Price</label>
      <input
        type="text"
        placeholder={mainProduct.price}
        value={productPrice}
        onChange={(event) => priceHandler(event)}
      />

      <label>Img</label>
      <input
        type="text"
        placeholder={mainProduct.img}
        value={productImg}
        onChange={(event) => imgHandler(event)}
      />

      <button onClick={(event) => editProduct(event , mainProduct.id)}>Edit</button>

      {reDirect && 
        <Navigate to="/products" />
      }
    </div>
  );
}
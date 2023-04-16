import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
import "../assets/style/product/product.scss";
const productList = [
  {
    id: "Furniture",
    image_url:
      "https://images.unsplash.com/photo-1571898223382-0aa3499f0f2a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    discount: "-50%",
    productName: "ChairFurniture",
    price: "$120",
    star: "3",
  },
  {
    id: "Decorative",
    image_url:
      "https://images.unsplash.com/photo-1571898223382-0aa3499f0f2a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    discount: "-40%",
    productName: "Chairdecorative",
    price: "$120",
    star: "4",
  },
  {
    id: "Decorative",
    image_url:
      "https://images.unsplash.com/photo-1571898223382-0aa3499f0f2a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    discount: "-40%",
    productName: "sofadecorative",
    price: "$120",
    star: "4",
  },
  {
    id: "Lighting",
    image_url:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    discount: "-60%",
    productName: "Lighting",
    price: "$100",
    star: "5",
  },
  {
    id: "Storage",
    image_url:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    discount: "-60%",
    productName: "storage",
    price: "$20",
    star: "5",
  },
  {
    id: "Storage",
    image_url:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    discount: "-60%",
    productName: "storagechair",
    price: "$50",
    star: "5",
  },
  {
    id: "Storage",
    image_url:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    discount: "-60%",
    productName: "storagesofa",
    price: "$80",
    star: "5",
  },
  {
    id: "Outdoor",
    image_url:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    discount: "-10%",
    productName: "outdoorsofa",
    price: "$100",
    star: "5",
  },
  {
    id: "Outdoor",
    image_url:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    discount: "-50%",
    productName: "outdoorchair",
    price: "$120",
    star: "5",
  },
  {
    id: "Outdoor",
    image_url:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    discount: "-50%",
    productName: "outdoor",
    price: "$130",
    star: "5",
  },
];
const collectionList = [
  "Furniture",
  "Decorative",
  "Lighting",
  "Outdoor",
  "Storage",
];
export const Product = () => {
  const [productId, setProductId] = useState("Furniture");

  const getProductId = (e, item) => {
    setProductId(item);
  };

  console.log(productList.filter((item) => item.id === productId));
  return (
    <div className="productpage__wrapper">
      <div className="productpage__collection">
        <h4>OUR COLLECTION</h4>
        <div className="productpage__collectionlist">
          {collectionList.map((item, index) => {
            return (
              <NavLink
                className="active"
                key={index}
                onClick={(e) => getProductId(e, item)}
              >
                {item}
              </NavLink>
            );
          })}
        </div>
      </div>
      <div className="productpage__images">
        {productList
          .filter((item) => {
            return item.id === productId;
          })
          .map((item) => {
            return (
              <div className="productpage__singleImage" key={item.productName}>
                <div className="product__image">
                  <img src={item.image_url} alt="furniture" />
                  <div className="discount__badge">
                    <p>{item.discount}</p>
                  </div>
                </div>
                <h5>{item.productName}</h5>
                <ul>
                  <li>
                    <AiFillStar />
                  </li>
                  <li>
                    <AiFillStar />
                  </li>
                  <li>
                    <AiFillStar />
                  </li>
                  <li>
                    <AiFillStar />
                  </li>
                </ul>
                <span>{item.price}</span>
              </div>
            );
          })}
      </div>
    </div>
  );
};

// import { Link } from "react-router-dom";
import "./productPage.scss";
import axios from "axios";
import { useState, useEffect } from "react";

const ProductPage = () => {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const { data } = await axios.get(
      "https://preecha-product-api.herokuapp.com/api/store/products"
    );
    setProductData(data);
  }

  return (
    <div className="container">
      <table className="table">
        <thead className="thread-col">
          <tr>
            <th scope="col">
              <center>name</center>
            </th>
            <th scope="col">
              <center>category</center>
            </th>
            <th scope="col">wholesalePricePerBox</th>
            <th scope="col">wholesalePricePerPack</th>
            <th scope="col">RetailPrice</th>
            <th scope="col">Edit</th>
          </tr>
        </thead>
        <tbody>
          {productData.map((product) => (
            <tr>
              <td>{product.name}</td>
              <td>{product.category}</td>
              <td>{product.wholesalePricePerBox}</td>
              <td>{product.wholesalePricePerPack}</td>
              <td>{product.RetailPrice}</td>
              <td>
                <button className="btn-table fas fa-edit"></button>
                <button className="btn-table fas fa-trash-alt"></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductPage;

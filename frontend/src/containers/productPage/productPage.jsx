// import { Link } from "react-router-dom";
import "./productPage.scss";
import axios from "axios";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

const ProductPage = () => {
  const [productData, setProductData] = useState([]);
  // const [selectedProduct, setselectedProduct] = useState();
  const history = useHistory();

  useEffect(() => {
    getData();
  }, []);

  // https://preecha-product-api.herokuapp.com/api/store/products
  // http://localhost:5000/api/store/products
  async function getData() {
    const { data } = await axios.get(
      `http://localhost:5000/api/store/products`
    );
    setProductData(data);
  }

  // https://preecha-product-api.herokuapp.com/api/store/products
  // http://localhost:5000/api/store/products
  async function deleteData(id) {
    try {
      await axios.delete(`http://localhost:5000/api/store/products/${id}`);

      const newProduct = productData.filter((product) => product._id !== id);
      setProductData(newProduct);
    } catch (err) {
      console.log(err);
    }
  }

  async function editData(id) {
    history.push(`/edit/${id}`);
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
                <button
                  onClick={() => editData(product._id)}
                  className="btn-table fas fa-edit"
                ></button>
                <button
                  onClick={() => deleteData(product._id)}
                  className="btn-table fas fa-trash-alt"
                ></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductPage;

import { Link } from "react-router-dom";
import "./productPage.scss";

const productPage = () => {
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
            <th scope="col">wholesalePricePerOne</th>
            <th scope="col">RetailPrice</th>
            <th scope="col">Edit</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>3 women chef</td>
            <td>Food</td>
            <td>1200</td>
            <td>120</td>
            <td>12</td>
            <td>15</td>
            <td>
              <button className="btn-table fas fa-edit"></button>
              <button className="btn-table fas fa-trash-alt"></button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default productPage;

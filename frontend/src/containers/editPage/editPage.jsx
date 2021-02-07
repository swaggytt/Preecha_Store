import "./editPage.scss";
import { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";

const EditPage = () => {
  const history = useHistory();
  const [product, setProduct] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetchData();

    // eslint-disable-next-line
  }, []);

  async function fetchData() {
    const { data } = await axios.get(
      `https://preecha-product-api.herokuapp.com/api/store/products/${id}`
    );
    setProduct(data[0]);
    console.log(data[0]);
  }

  async function onSubmit(
    name,
    category,
    wholesalePricePerBox,
    wholesalePricePerPack,
    RetailPrice
  ) {
    await axios.patch(
      `https://preecha-product-api.herokuapp.com/api/store/products/${id}`,
      {
        name: name,
        category,
        wholesalePricePerBox,
        wholesalePricePerPack,
        RetailPrice,
      }
    );
    history.push("/product");
  }

  return (
    <div className="edit-page">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const {
            name,
            category,
            wholesalePricePerBox,
            wholesalePricePerPack,
            RetailPrice,
          } = product;
          onSubmit(
            name,
            category,
            wholesalePricePerBox,
            wholesalePricePerPack,
            RetailPrice
          );
        }}
        className="form-temp"
      >
        <div className="form-group">
          <label htmlFor="name" className="text-light">
            name
          </label>
          <input
            type="text"
            name="name"
            value={product.name}
            onChange={(e) => setProduct({ ...product, name: e.target.value })}
            placeholder="name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="category" className="text-light">
            category
          </label>
          <select
            value={product.category}
            name="category"
            onChange={(e) =>
              setProduct({ ...product, category: e.target.value })
            }
            required
          >
            <option value="">-Select Catagory-</option>
            <option value="Food">Food</option>
            <option value="Beverage">Beverage</option>
            <option value="Snack">Snack</option>
            <option value="Cigarette">Cigarette</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="ppb" className="text-light">
            wholesalePricePerBox
          </label>
          <input
            type="number"
            name="ppb"
            value={product.wholesalePricePerBox}
            onChange={(e) =>
              setProduct({
                ...product,
                wholesalePricePerBox: parseInt(e.target.value),
              })
            }
            placeholder="Price"
          />
        </div>
        <div className="form-group">
          <label htmlFor="ppp" className="text-light">
            wholesalePricePerPack
          </label>
          <input
            type="number"
            name="ppp"
            value={product.wholesalePricePerPack}
            onChange={(e) =>
              setProduct({
                ...product,
                wholesalePricePerPack: parseInt(e.target.value),
              })
            }
            placeholder="Price"
          />
        </div>
        <div className="form-group">
          <label htmlFor="rtp" className="text-light">
            RetailPrice
          </label>
          <input
            type="number"
            name="rtp"
            value={product.RetailPrice}
            onChange={(e) =>
              setProduct({ ...product, Retailprice: parseInt(e.target.value) })
            }
            placeholder="Price"
          />
        </div>
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default EditPage;

import "./editPage.scss";
import { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";

const EditPage = () => {
  const history = useHistory();
  const [product, setProduct] = useState([]);
  const { id } = useParams();
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [priceperbox, setPriceBox] = useState("");
  const [priceperpack, setPricePack] = useState("");
  const [retailprice, setPrice] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const {res} = await axios.get(
      `http://localhost:5000/api/store/products/${id}`
    );
    setProduct(res);
    setName(product.name);
    setCategory(product.category);
    setPriceBox(product.wholesalePricePerBox);
    setPricePack(product.wholesalePricePerPack);
    setPrice(product.RetailPrice);
  }

  async function onSubmit(
    name,
    category,
    priceperbox,
    priceperpack,
    retailprice
  ) {
    await axios.patch(`http://localhost:5000/api/store/products/${id}`, {
      name: name,
      category: category,
      wholesalePricePerBox: priceperbox,
      wholesalePricePerPack: priceperpack,
      RetailPrice: retailprice,
    });
    history.push("/product");
  }

  return (
    <div className="edit-page">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit(name, category, priceperbox, priceperpack, retailprice);
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
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="category" className="text-light">
            category
          </label>
          <select
            name="category"
            onChange={(e) => setCategory(e.target.value)}
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
            value={priceperbox}
            onChange={(e) => setPriceBox(parseInt(e.target.value))}
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
            value={priceperpack}
            onChange={(e) => setPricePack(parseInt(e.target.value))}
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
            value={retailprice}
            onChange={(e) => setPrice(parseInt(e.target.value))}
            placeholder="Price"
          />
        </div>
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default EditPage;

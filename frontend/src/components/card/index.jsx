import "./card.scss";
import { useState } from "react";

const Card = () => {
  const [name, setName] = useState("");
  const [priceperbox, setPriceBox] = useState();
  const [priceperpack, setPricePack] = useState();
  const [retailprice, setPrice] = useState();

  return (
    <div className="card">
      <form className="form-temp">
        <div className="form-group">
          <label for="name" className="text-light">
            name
          </label>
          {/* <input type="hidden" name="id" value="" /> */}
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="name"
          />
        </div>
        <div className="form-group">
          <label for="category" className="text-light">
            category
          </label>
          <select name="category" id="category">
            <option value="food">Food</option>
            <option value="beverage">Beverage</option>
            <option value="snack">Snack</option>
            <option value="cigarette">Cigarette</option>
          </select>
        </div>
        <div className="form-group">
          <label for="ppb" className="text-light">
            wholesalePricePerBox
          </label>
          <input
            type="text"
            name="ppb"
            value={priceperbox}
            onChange={(e) => setPriceBox(e.target.value)}
            placeholder="Price"
          />
        </div>
        <div className="form-group">
          <label for="ppp" className="text-light">
            wholesalePricePerPack
          </label>
          <input
            type="text"
            name="ppp"
            value={priceperpack}
            onChange={(e) => setPricePack(e.target.value)}
            placeholder="Price"
          />
        </div>
        <div className="form-group">
          <label for="rtp" className="text-light">
            RetailPrice
          </label>
          <input
            type="text"
            name="rtp"
            value={retailprice}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="Price"
          />
        </div>
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default Card;

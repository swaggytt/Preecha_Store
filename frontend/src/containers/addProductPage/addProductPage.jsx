import Card from "../../components/card";
import { useHistory } from "react-router-dom";
import axios from "axios";
import "./addProductPage.scss";

const AddProductPage = () => {

  const history =  useHistory()

  async function onSubmit(
    name,
    category,
    priceperbox,
    priceperpack,
    retailprice
  ) {
    await axios.post("https://preecha-product-api.herokuapp.com/api/store/products", {
      name: name,
      category: category,
      wholesalePricePerBox: priceperbox,
      wholesalePricePerPack: priceperpack,
      RetailPrice: retailprice,
    });
    history.push('/product')
  }

  return (
    <div>
      <Card onSubmit={onSubmit} />
    </div>
  );
};

export default AddProductPage;

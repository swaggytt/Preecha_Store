import "./addProductPage.css";

const addProductPage = () => {
  return (
    <div className="container">
      addPage
      <form className="form-temp">
        <div className="form-group">
          <label for="name" className="text-light">
            name
          </label>
          <input type="hidden" name="id" value="" />
          <input type="text" name="name" value="" placeholder="Input name" />
        </div>
        <div className="form-group">
          <label for="category" className="text-light">
            category
          </label>
          <input
            type="text"
            name="category"
            value=""
            placeholder="Input category"
          />
        </div>
        <div className="form-group">
          <label for="name" className="text-light">
            wholesalePricePerBox
          </label>
          <input type="hidden" name="id" value="" />
          <input
            type="text"
            name="name"
            value=""
            placeholder="Input wholesalePricePerBox"
          />
        </div>
      </form>
      <button type="submit">Save</button>
    </div>
  );
};

export default addProductPage;

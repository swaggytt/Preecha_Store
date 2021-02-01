import "./table.css";

const Table = () => {
  return (
    <div>
      <table className="table">
        <thead>
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
          </tr>
        </thead>
      </table>
    </div>
  );
};

export default Table;

import "./editPage.scss";
import { useState } from "react";
import { useHistory, useParams } from "react-router-dom";

const EditPage = () => {
  const [product, setProduct] = useState([]);
  const { id } = useParams();
  return <div className="edit-page">editPage</div>;
};

export default EditPage;

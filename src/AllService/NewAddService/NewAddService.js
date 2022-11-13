import React from "react";
import { Link } from "react-router-dom";

const NewAddService = ({ newService }) => {
  const { title, img, price, _id, description } = newService;
  console.log(title, img, price, _id, description);
  return (
    <div>
      <div className="card  mb-4 bg-base-100 shadow-slate-300 shadow-2xl">
        <figure>
          <img style={{ height: "256px" }} src={img} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>Price:$ {price}</p>
          <p>{description && description.slice(0, 100) + "..."}</p>
          <div className="card-actions justify-end">
            <Link to={`/serviceDetails/${_id}`}>
              {" "}
              <button className="btn btn-primary">Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};


export default NewAddService;

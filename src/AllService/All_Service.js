import React, { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../Login&Register/Login/Login";
import AllService from "./AllService";
import NewAddService from "./NewAddService/NewAddService";
const All_Service = () => {
  const services = useLoaderData();

  const { user } = useContext(AuthContext);
  const [service, setService] = useState([]);
  console.log(service);
  useEffect(() => {
    fetch(`http://localhost:5000/CreateService?email=${user && user.email}`)
      .then((res) => res.json())
      .then((data) => setService(data));
  }, [user && user.email]);

  return (
    <div className="grid lg:grid-cols-3  md:grid-cols-2 sm:grid-cols-2 my-12   gap-6 container mx-auto  ">
      {services.map((FoodService) => (
        <AllService
          key={FoodService._id}
          FoodService={FoodService}
        ></AllService>
      ))}

      {service.map((newService) => (
        <NewAddService
          key={newService._id}
          newService={newService}
        ></NewAddService>
      ))}
    </div>
  );
};

export default All_Service;

import React, { useState } from "react";
import AllServicesCard from "./AllServicesCard";
import { useLoaderData } from "react-router-dom";

const AllServices = () => {
  const servicesData = useLoaderData();
  const [services, setServices] = useState(servicesData);

  const searchService = (e) => {
    e.preventDefault();

    const searchInput = e.target.value;
    const filteredService = [];

    servicesData.forEach((search) => {
      if (search.serviceName.toLowerCase().indexOf(searchInput) !== -1) {
        filteredService.push(search);
      }
    });
    setServices(filteredService);
  };

  const handleSort = (order) => {
    const sortedData = [...services].sort((a, b) =>
      order === "ascending" ? a.servicePrice - b.servicePrice : b.servicePrice - a.servicePrice
    );
    setServices(sortedData);
  };

  return (
    <div className=" bg-gray-100 py-10 dark:bg-[#0A192F]">
      <h1 className="text-4xl font-bold text-center mb-6 text-teal-700 font-headingFont dark:text-[#FBBF24]">
        All Services
      </h1>
      <div className="flex lg:gap-6 justify-center mx-auto items-center">
        <div className="form-control w-3/5 my-7">
          <input
            onChange={searchService}
            type="text"
            placeholder="Search"
            className="input input-bordered md:w-auto dark:text-teal-900"
          />
        </div>

        <div className="dropdown dropdown-hover dark:text-teal-900">
          <div tabIndex={0} role="button" className="btn m-1 lg:w-20">
            Sort
          </div>
          <ul
            tabIndex={0}
            className=" dropdown-content menu bg-base-100 rounded-box z-[1] w-40 p-2 shadow"
          >
            <li>
              <button className="font-semibold" onClick={() => handleSort("ascending")}>
                Ascending price
              </button>
            </li>
            <li>
              <button className="font-semibold" onClick={() => handleSort("descending")}>
                Descending price
              </button>
            </li>
          </ul>
        </div>  
      </div>

      <div className="max-w-4xl mx-auto px-3">
        <div className="space-y-6 font-bodyFont">
          {services.map((service) => (
            <AllServicesCard
              key={service._id}
              service={service}
            ></AllServicesCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllServices;

import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./AllCourses.module.css";
import Swal from "sweetalert2";

const Allsuppliersdisplay = () => {
  const [suppliers, setsuppliers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const [shop_name, Setshop_name] = useState("");
  const [city, Setcity] = useState("");
  const [district, Setdistrict] = useState("");
  const [shop_address, Setshop_address] = useState("");
  const [price_per_1l, Setprice_per_1l] = useState("");
  const [telephone, Settelephone] = useState("");
  const [directions, Setdirections] = useState("");
  const [description, Setdescription] = useState("");

  const navigate = useNavigate();

  const handleDestination = () => {
    navigate("/edit", {
      state: {
        shop_name,
        city,
        district,
        shop_address,
        price_per_1l,
        telephone,
        directions,
        description,
      },
    });
  };

  useEffect(() => {
    axios
      .get("http://localhost:8070/supplier/")
      .then((res) => {
        setsuppliers(res.data);
      })
      .catch((err) => {
        alert(err.message);
      });
  }, []);

  useEffect(() => {
    const results = suppliers.filter((supplier) =>
      supplier.district.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  }, [searchTerm, suppliers]);

  const handleSearch = (supplier) => {
    setSearchTerm(supplier.target.value.toLowerCase());
  };

  return (
    <div className="AllContent">
      <div className="container" style={{ width: "100%", float: "right" }}>
        <h2>
          <center>All suppliers Details</center>
        </h2>

        <div
          className="input-group mb-3"
          style={{ width: "75%", float: "right", marginTop: "50px" }}
        >
          <center>
            <input
              style={{ marginLeft: "100px" }}
              type="text"
              className="form-control"
              placeholder="Search by supplier District"
              aria-label="Search"
              aria-describedby="search-btn"
              value={searchTerm}
              onChange={handleSearch}
            />
          </center>
        </div>

        <div class="table_conatiner" style={{ width: "100%", height: "auto" }}>
          <table
            className="table table-bordered border-primary"
            style={{ width: "100%" }}
          >
            <thead>
              <tr>
                <th scope="col">Shop Name</th>
                <th scope="col">City</th>
                <th scope="col">District</th>
                <th scope="col">Shop Address</th>
                <th scope="col">Price price_per_1l</th>
                <th scope="col">Telephone</th>
                <th scope="col">Directions</th>
                <th scope="col">Description</th>
              </tr>
            </thead>

            <tbody>
              {searchResults.map((supplier) => (
                <tr>
                  <th onChange={(e) => Setshop_name(e.target.value)}>
                    {supplier.shop_name}
                  </th>
                  <td onChange={(e) => Setcity(e.target.value)}>
                    {supplier.city}
                  </td>
                  <td onChange={(e) => Setdistrict(e.target.value)}>
                    {" "}
                    {supplier.district}
                  </td>
                  <td onChange={(e) => Setshop_address(e.target.value)}>
                    {supplier.shop_address}
                  </td>
                  <td onChange={(e) => Setprice_per_1l(e.target.value)}>
                    {supplier.price_per_1l}
                  </td>
                  <td onChange={(e) => Settelephone(e.target.value)}>
                    {supplier.telephone}
                  </td>
                  <td onChange={(e) => Setdirections(e.target.value)}>
                    {supplier.directions}
                  </td>
                  <td onChange={(e) => Setdescription(e.target.value)}>
                    {supplier.description}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Allsuppliersdisplay;

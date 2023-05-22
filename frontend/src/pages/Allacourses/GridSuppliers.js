import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function SupplierGrid() {
  const [suppliers, setsuppliers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    async function getSuppliers() {
      try {
        const response = await axios.get("http://localhost:8070/supplier/");
        setsuppliers(response.data);
      } catch (error) {
        console.log("error", error);
      }
    }
    getSuppliers();
  }, []);

  //search
  useEffect(() => {
    const results = suppliers.filter((supplier) =>
      supplier.shop_name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  }, [searchTerm, suppliers]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  return (
    <div className="container">
      <h2>
        Suppliers
        <p>
          <Link to="/" className="btn btn-primary float-right">
            Create Supplier
          </Link>
        </p>
      </h2>
      <hr />

      <div className="mb-6">
        <input
          type="text"
          className="form-control"
          placeholder="Search by supplier Name"
          aria-label="Search"
          aria-describedby="search-btn"
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>

      <div>
        <div className="d-flex flex-wrap">
          {searchResults.map((supplier) => {
            return (
              <div
                className="card"
                style={{ width: 250, margin: 30 }}
                key={supplier._id}
              >
                <div class="card-header text-center">
                  <h5 className="card-title">
                    <Link
                      to={`/suppliers/${supplier._id}`}
                      className="link-line"
                    ></Link>
                    <b style={{ color: "black", fontFamily: "BD Supper" }}>
                      {supplier.shop_name}
                    </b>
                  </h5>
                </div>

                <div className="card-body">
                  <h5 className="d-flex align-items-center">
                    <i className="bi bi-telephone-fill text-success"></i>
                    <a
                      className="card-subtitle"
                      href={`tel:+${supplier.phone}`}
                    >
                      {supplier.phone}
                    </a>
                  </h5>

                  <p className="card-text limit-char">
                    <b>Shop :</b> {supplier.shop_name}
                    <br />
                    <b>City :</b>
                    {supplier.city}
                    <br />
                    <b>District :</b>
                    {supplier.district}
                    <br />
                    <b>Address :</b> {supplier.shop_address}
                    <br />
                    <b>Price per 1l :</b>
                    {supplier.price_per_1l}
                    <br />
                    <b>Phone No :</b>
                    {supplier.telephone}
                    <br />
                    <b>Directions: </b>
                    <Link>{supplier.directions}</Link>
                    <br />
                    <b>Description :</b>
                    {supplier.description}
                  </p>
                  <p className="card-text d-flex align-items-center">
                    <i className="bi bi-geo-alt-fill text-warning"></i>
                    <small className="text-muted one-liner">
                      {supplier.location}
                    </small>
                  </p>
                </div>
                <div class="card-footer d-flex align-items-center justify-content-center">
                  <b style={{ color: "blue" }}>WATERFORCE</b>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default SupplierGrid;

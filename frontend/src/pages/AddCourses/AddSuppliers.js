/*import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Addsuppliers = () => {
  const [shop_name, Setshop_name] = useState("");
  const [city, Setcity] = useState("");
  const [district, Setdistrict] = useState("");
  const [shop_address, Setshop_address] = useState("");
  const [price_per_1l, Setprice_per_1l] = useState("");
  const [telephone, Settelephone] = useState("");
  const [directions, Setdirections] = useState("");
  const [description, Setdescription] = useState("");

  /*function sendData(e) {
    e.preventDefault();

    const newsupplier = {
      shop_name,
      city,
      district,
      shop_address,
      price_per_1l,
      telephone,
      directions,
      description,
    };

    axios
      .post("http://localhost:8070/supplier/add", newsupplier)
      .then(() => {
        Swal.fire("Successful!", "Supplier Added!", "success");
      })
      .catch((err) => {
        Swal.fire
          
          ({
          
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
          footer: '<a href="">Why do I have this issue?</a>',
        });
      });
  }*/

/* function sendData(e) {
    e.preventDefault();

    const newsupplier = {
      shop_name,
      city,
      district,
      shop_address,
      price_per_1l,
      telephone,
      directions,
      description,
    };

    axios
      .post("http://localhost:8070/supplier/add", newsupplier)
      .then(() => {
        Swal.fire("Successful!", "Supplier Added!", "success");
        // Clear the form fields
        Setshop_name("");
        Setcity("");
        Setdistrict("");
        Setshop_address("");
        Setprice_per_1l("");
        Settelephone("");
        Setdirections("");
        Setdescription("");
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
          footer: '<a href="">Why do I have this issue?</a>',
        });
      });
  }

  return (
    <div>
      <div className="container" style={{ width: "100%", float: "right" }}>
        <center>
          <h2></h2>
          <h1
            style={{
              fontWeight: "bold",
              color: "darkblue",
              fontFamily: "BD Supper",
              textAlign: "center",
            }}
          >
            Add Supplier
          </h1>
          <hr></hr>
        </center>

        <div style={{ marginTop: "50px" }}>
          <form className="row g-3">
            <div className="col-md-6">
              <label className="form-label">
                <b>Shop Name</b>
              </label>
              <input
                type="text"
                className="form-control"
                id="inputShopName"
                placeholder="Shop name"
                required
                onChange={(e) => {
                  Setshop_name(e.target.value);
                }}
              />
            </div>

            <div className="col-md-6">
              <label className="form-label">
                <b>City</b>
              </label>
              <input
                type="text"
                className="form-control"
                id="inputCity"
                placeholder="City"
                required
                onChange={(e) => {
                  Setcity(e.target.value);
                }}
              />
            </div>

            <div className="col-md-6">
              <label className="form-label">
                <b>District</b>
              </label>
              <input
                type="text"
                className="form-control"
                id="inputDistrict"
                placeholder="District"
                required
                onChange={(e) => {
                  Setdistrict(e.target.value);
                }}
              />
            </div>

            <div className="col-md-6">
              <label className="form-label">
                <b>Shop Address</b>
              </label>
              <input
                type="text"
                className="form-control"
                id="inputShopAddress"
                placeholder="Address"
                required
                onChange={(e) => {
                  Setshop_address(e.target.value);
                }}
              />
            </div>

            <div className="col-6">
              <label className="form-label">
                <b>Price per 1L</b>
              </label>
              <input
                type="text"
                className="form-control"
                id="inputPrice"
                placeholder="RS.4.00"
                required
                onChange={(e) => {
                  Setprice_per_1l(e.target.value);
                }}
              />
            </div>

            <div className="col-md-6">
              <label className="form-label">
                <b>Telephone</b>
              </label>
              <input
                type="number"
                className="form-control"
                id="inputTelephone"
                placeholder="07xxxxxxxx"
                required
                onChange={(e) => {
                  Settelephone(e.target.value);
                }}
              />
            </div>

            <div className="col-6">
              <label className="form-label">
                <b>Directions</b>
              </label>
              <input
                type="url"
                className="form-control"
                id="inputDirections"
                placeholder="Give directions"
                required
                onChange={(e) => {
                  Setdirections(e.target.value);
                }}
              />
              <small>Format: https://yourlink.ext</small>
            </div>

            <div className="col-6">
              <label className="form-label">Description</label>
              <input
                type="text"
                className="form-control"
                id="inputDescription"
                placeholder="Give a Description"
                required
                onChange={(e) => {
                  Setdescription(e.target.value);
                }}
              />
            </div>

            <div className="col-12" style={{ width: "100%" }}>
              <button
                type="submit"
                className="btn btn-primary"
                onClick={sendData}
                style={{
                  width: "100%",

                  backgroundColor: "#4CAF50",
                  borderRadius: "5px",
                  padding: "10px",
                  fontSize: "16px",
                  fontWeight: "bold",
                  color: "#FFFFFF",
                }}
              >
                Add Supplier
              </button>
            </div>

            <div className="col-12" style={{ width: "100%" }}>
              <Link to="/all">
                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{
                    width: "100%",
                    backgroundColor: "#3498DB",
                    borderRadius: "5px",
                    padding: "10px",

                    fontSize: "16px",
                    fontWeight: "bold",
                    color: "#FFFFFF",
                  }}
                >
                  All Suppliers
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Addsuppliers; */

import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Addsuppliers = () => {
  const [shop_name, Setshop_name] = useState("");
  const [city, Setcity] = useState("");
  const [district, Setdistrict] = useState("");
  const [shop_address, Setshop_address] = useState("");
  const [price_per_1l, Setprice_per_1l] = useState("");
  const [telephone, Settelephone] = useState("");
  const [directions, Setdirections] = useState("");
  const [description, Setdescription] = useState("");

  function sendData(e) {
    e.preventDefault();

    const newsupplier = {
      shop_name,
      city,
      district,
      shop_address,
      price_per_1l,
      telephone,
      directions,
      description,
    };

    axios
      .post("http://localhost:8070/supplier/add", newsupplier)
      .then(() => {
        Swal.fire("Successful!", "Supplier Added!", "success");
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
          footer: '<a href="">Why do I have this issue?</a>',
        });
      });
  }

  return (
    <div>
      <div className="container" style={{ width: "100%", float: "right" }}>
        <center>
          <h2>Add Supplier</h2>
        </center>

        <div style={{ marginTop: "50px" }}>
          <form className="row g-3">
            <div className="col-md-6">
              <label className="form-label">Shop Name</label>
              <input
                type="text"
                className="form-control"
                id="inputShopName"
                placeholder="Shop name"
                required
                onChange={(e) => {
                  Setshop_name(e.target.value);
                }}
              />
            </div>

            <div className="col-md-6">
              <label className="form-label">City</label>
              <input
                type="text"
                className="form-control"
                id="inputCity"
                placeholder="City"
                required
                onChange={(e) => {
                  Setcity(e.target.value);
                }}
              />
            </div>

            <div className="col-md-6">
              <label className="form-label">District</label>
              <input
                type="text"
                className="form-control"
                id="inputDistrict"
                placeholder="District"
                required
                onChange={(e) => {
                  Setdistrict(e.target.value);
                }}
              />
            </div>

            <div className="col-md-6">
              <label className="form-label">Shop Address</label>
              <input
                type="text"
                className="form-control"
                id="inputShopAddress"
                placeholder="Address"
                required
                onChange={(e) => {
                  Setshop_address(e.target.value);
                }}
              />
            </div>

            <div className="col-6">
              <label className="form-label">Price per 1L</label>
              <input
                type="text"
                className="form-control"
                id="inputPrice"
                placeholder="RS.4.00"
                required
                onChange={(e) => {
                  Setprice_per_1l(e.target.value);
                }}
              />
            </div>

            <div className="col-md-6">
              <label className="form-label">Telephone</label>
              <input
                type="number"
                className="form-control"
                id="inputTelephone"
                placeholder="07xxxxxxxx"
                required
                onChange={(e) => {
                  Settelephone(e.target.value);
                }}
              />
            </div>

            <div className="col-6">
              <label className="form-label">Directions</label>
              <input
                type="url"
                className="form-control"
                id="inputDirections"
                placeholder="Give directions"
                required
                onChange={(e) => {
                  Setdirections(e.target.value);
                }}
              />
              <small>Format: https://yourlink.ext</small>
            </div>

            <div className="col-6">
              <label className="form-label">Description</label>
              <input
                type="text"
                className="form-control"
                id="inputDescription"
                placeholder="Give a Description"
                required
                onChange={(e) => {
                  Setdescription(e.target.value);
                }}
              />
            </div>

            <div className="col-12" style={{ width: "100%" }}>
              <button
                type="submit"
                className="btn btn-primary"
                onClick={sendData}
                style={{
                  width: "100%",

                  backgroundColor: "#4CAF50",
                  borderRadius: "5px",
                  padding: "10px",
                  fontSize: "16px",
                  fontWeight: "bold",
                  color: "#FFFFFF",
                }}
              >
                Add Supplier
              </button>
            </div>

            <div className="col-12" style={{ width: "100%" }}>
              <Link to="/all">
                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{
                    width: "100%",
                    backgroundColor: "#3498DB",
                    borderRadius: "5px",
                    padding: "10px",

                    fontSize: "16px",
                    fontWeight: "bold",
                    color: "#FFFFFF",
                  }}
                >
                  All Suppliers
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Addsuppliers;

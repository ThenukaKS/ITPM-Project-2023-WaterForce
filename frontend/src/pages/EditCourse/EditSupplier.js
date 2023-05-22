import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams, Link } from "react-router-dom";
import Swal from "sweetalert2";

const Editsupplier = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const [shop_name, Setshop_name] = useState("");
  const [city, Setcity] = useState("");
  const [district, Setdistrict] = useState("");
  const [shop_address, Setshop_address] = useState("");
  const [price_per_1l, Setprice_per_1l] = useState("");
  const [telephone, Settelephone] = useState("");
  const [directions, Setdirections] = useState("");
  const [description, Setdescription] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:8070/supplier/${id}`)
      .then((res) => {
        const supplier = res.data;
        Setshop_name(supplier.shop_name);
        Setcity(supplier.city);
        Setdistrict(supplier.district);
        Setshop_address(supplier.shop_address);
        Setprice_per_1l(supplier.price_per_1l);
        Settelephone(supplier.telephone);
        Setdirections(supplier.directions);
        Setdescription(supplier.description);
      })
      .catch((err) => {
        alert(err.message);
      });
  }, [id]);

  const handleUpdate = (event) => {
    event.preventDefault();
    const updatesupplier = {
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
      .put(`http://localhost:8070/supplier/update/${id}`, updatesupplier)
      .then((res) => {
        Swal.fire("Updated!", "You clicked the button!", "success");
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <div>
      {/* <Sidebar /> */}

      <div style={{ width: "100%", float: "right" }}>
        <h2>
          <center>Edit supplier Details</center>
        </h2>

        <div className="container" style={{ width: "75%", marginTop: "50px" }}>
          <form onSubmit={handleUpdate}>
            <div className="form-group">
              <label>Shop Name</label>
              <input
                type="text"
                className="form-control"
                value={shop_name}
                onChange={(e) => Setshop_name(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>City</label>
              <input
                type="text"
                className="form-control"
                value={city}
                onChange={(e) => Setcity(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>District</label>
              <input
                type="text"
                className="form-control"
                value={district}
                onChange={(e) => Setdistrict(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Address</label>
              <input
                type="text"
                className="form-control"
                value={shop_address}
                onChange={(e) => Setshop_address(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>price_per_1l</label>
              <input
                type="text"
                className="form-control"
                value={price_per_1l}
                onChange={(e) => Setprice_per_1l(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Telephone</label>
              <input
                type="text"
                className="form-control"
                value={telephone}
                onChange={(e) => Settelephone(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Directions</label>
              <input
                type="text"
                className="form-control"
                value={directions}
                onChange={(e) => Setdirections(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Description</label>
              <input
                type="text"
                className="form-control"
                value={description}
                onChange={(e) => Setdescription(e.target.value)}
              />
            </div>

            <div style={{ marginTop: "50px", width: "100%" }}>
              <button
                type="submit"
                className="btn btn-primary"
                style={{ width: "100%" }}
              >
                Update
              </button>
            </div>

            <div
              className="col-12"
              style={{ marginTop: "25px", width: "100%" }}
            >
              <Link to="/all">
                <button
                  type="button"
                  className="btn btn-primary"
                  style={{ width: "100%" }}
                >
                  All suppliers
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Editsupplier;

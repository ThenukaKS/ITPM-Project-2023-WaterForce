import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./AllCourses.module.css";
import Swal from "sweetalert2";

const Allsuppliers = () => {
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

  //Search
  useEffect(() => {
    const results = suppliers.filter((supplier) =>
      supplier.shop_name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  }, [searchTerm, suppliers]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  //delete
  const deleteSupplier = (id) => {
    axios
      .delete(`http://localhost:8070/supplier/delete/${id}`)
      .then((res) => {
        Swal.fire("Successfully Deleted");
        setsuppliers(suppliers.filter((supplier) => supplier._id !== id));
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  //generate report
  function GenReport() {
    axios
      .get("http://localhost:8070/supplier/reporting", {
        responseType: "blob",
      })
      .then((res) => {
        const url = window.URL.createObjectURL(res.data);
        const link = document.createElement("a");
        const currentDate = new Date().toISOString().slice(0, 10);
        link.href = url;
        link.setAttribute("download", `Supplier_report_${currentDate}.pdf`);
        document.body.appendChild(link);
        link.click();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className="AllContent">
      <div className="container" style={{ width: "100%", float: "right" }}>
        <h2></h2>
        <h1
          style={{
            fontWeight: "bold",
            color: "darkblue",
            fontFamily: "BD Supper",
            textAlign: "center",
          }}
        >
          All suppliers Details
        </h1>
        <hr></hr>
        <div
          className="input-group mb-3"
          style={{ width: "75%", float: "right", marginTop: "25px" }}
        >
          <center>
            <input
              style={{ marginLeft: "100px" }}
              type="text"
              className="form-control"
              placeholder="Search by supplier Name"
              aria-label="Search"
              aria-describedby="search-btn"
              value={searchTerm}
              onChange={handleSearch}
            />
          </center>
        </div>

        <div
          className="table_conatiner"
          style={{ width: "100%", height: "auto" }}
        >
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
                <th scope="col"></th>
                <th scope="col"></th>
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
                  <td onChange={(e) => description(e.target.value)}>
                    {supplier.description}
                  </td>

                  <td>
                    <Link to={`/edit/${supplier._id}`}>
                      <button
                        className="btn btn-success"
                        style={{ backgroundColor: "#065A82", color: "white" }}
                        type="button"
                        id="EditButton"
                      >
                        Edit
                      </button>
                    </Link>
                  </td>
                  <td>
                    <button
                      className="btn btn-danger"
                      type="button"
                      id="DeleteButton"
                      onClick={() => deleteSupplier(supplier._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div style={{ width: "50%", float: "left", marginLef: "100px" }}>
            <Link to="/">
              <button
                className="btn btn-outline-secondary"
                style={{ backgroundColor: "#1C7293", color: "white" }}
              >
                Add supplier
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Allsuppliers;

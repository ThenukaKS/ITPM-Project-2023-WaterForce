import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./AllCourses.module.css";
import Swal from "sweetalert2";

function SupplierTable() {
  const [suppliers, setsuppliers] = useState([]);

  useEffect(function () {
    async function getsuppliers() {
      try {
        const response = await axios.get("http://localhost:8070/supplier/");
        setsuppliers(response.data);
      } catch (error) {
        console.log("error", error);
      }
    }
    getsuppliers();
  }, []);

  return (
    <div className="container">
      <div>
        <h2>
          supplier - Table View
          <p>
            <Link to="/suppliers/new" className="btn btn-primary float-right">
              Create supplier
            </Link>
          </p>
        </h2>
        <hr />
      </div>

      <div className="table-responsive">
        <table className="table riped  table-hover table-bordered container">
          <thead>
            <tr>
              <th>Shop Name</th>
              <th>City</th>
              <th>District</th>
              <th>Shop Address</th>
              <th>Price per 1L</th>
              <th>Telephone</th>
              <th>Directions</th>
              <th>Description</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {suppliers &&
              suppliers.map((supplier) => {
                return (
                  <tr key={supplier._id}>
                    <td>
                      <Link
                        to={`/suppliers/${supplier._id}`}
                        className="link-line"
                      ></Link>
                      {supplier.shop_name}
                    </td>
                    <td>{supplier.city}</td>
                    <td>{supplier.district}</td>
                    <td>{supplier.shop_address}</td>
                    <td>{supplier.price_per_1l}</td>
                    <td>{supplier.telephone}</td>
                    <td>{supplier.directions}</td>
                    <td>{supplier.description}</td>
                    <td>
                      <Link
                        to={`/suppliers/${supplier._id}`}
                        className="btn btn-warning"
                      >
                        View
                      </Link>
                      <Link
                        to={`/suppliers/${supplier._id}/edit`}
                        className="btn btn-success"
                      >
                        Edit
                      </Link>
                      <Link
                        to={`/suppliers/${supplier._id}/delete`}
                        className="btn btn-danger"
                      >
                        Delete
                      </Link>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default SupplierTable;

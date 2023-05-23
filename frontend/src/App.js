import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Addsuppliers from "./pages/AddCourses/AddSuppliers";
import Allsuppliers from "./pages/Allacourses/AllSuppliers";
import Allsuppliersdisplay from "./pages/Allacourses/display";
import Editsupplier from "./pages/EditCourse/EditSupplier";
import SupplierTable from "./pages/Allacourses/TableSuppliers";
import SupplierGrid from "./pages/Allacourses/GridSuppliers";
import Navbar from "./pages/Allacourses/Navbar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Addsuppliers />} />
          <Route path="/all" element={<Allsuppliers />} />
          <Route path="/edit/:id" element={<Editsupplier />} />
          <Route path="/display" element={<Allsuppliersdisplay />} />
          <Route path="/table" element={<SupplierTable />} />
          <Route path="/grid" element={<SupplierGrid />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

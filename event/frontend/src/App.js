import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import AddEvent from "./pages/AddCourses/AddCourses";
import AllEvents from "./pages/Allacourses/AllCourses";
import EditEvent from "./pages/EditCourse/EditCourse";
import AllEventsdisplay from "./pages/Allacourses/display";
import Navbar from "./pages/Allacourses/Navbar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<AddEvent />} />
          <Route path="/all" element={<AllEvents />} />
          <Route path="/edit/:id" element={<EditEvent />} />
          <Route path="/display" element={<AllEventsdisplay />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

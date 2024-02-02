import "./App.css";
import { Online, Offline } from "react-detect-offline";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Error from "./components/Error";
import Home from "./pages/home/Home";
import Contact from "./pages/contact/Contact";
import Book from "./pages/Book";

function App() {
  return (
    <>
      <Online>
        <NavBar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/book" element={<Book />} />
            <Route
              path="*"
              element={
                <div style={{ textAlign: "center", marginTop: "50px" }}>
                  Not Found or You do not have permission.
                </div>
              }
            />
          </Routes>
        </div>
        <Footer />
      </Online>
      <Offline>
        <Error />
      </Offline>
    </>
  );
}

export default App;

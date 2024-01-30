import "./App.css";
import NavBar from "./NavBar";
import Home from "./pages/home/Home";
import Contact from "./pages/Contact";
import Book from "./pages/Book";
import { Offline, Online } from "react-detect-offline";
import Error from "./Error";
import { Route, Routes } from "react-router-dom";
import Footer from "./Footer";

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

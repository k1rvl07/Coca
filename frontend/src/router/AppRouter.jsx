import { components, pages } from "@exports";
import { useEffect } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";

const RedirectHandler = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const redirect = queryParams.get("redirect");
    if (redirect) {
      navigate(redirect);
    }
  }, [location, navigate]);

  return null;
};

export const AppRouter = () => {
  const { Home, About, Blog } = pages;
  const { Shared_Header: Header, Shared_Footer: Footer } = components;

  return (
    <>
      <Header />
      <Router basename="/Coca">
        <RedirectHandler />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Blog" element={<Blog />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
};

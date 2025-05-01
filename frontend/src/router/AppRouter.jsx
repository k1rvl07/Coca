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
  const { Home, About, Blog, Pricing, Contact } = pages;
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
          <Route path="/Pricing" element={<Pricing />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
};

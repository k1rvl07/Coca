import { components, pages } from "@exports";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

export const AppRouter = () => {
  const { Home, About } = pages;
  const { Shared_Header: Header, Shared_Footer: Footer } = components;
  return (
    <>
      <Header />
      <Router basename="/Coca">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
};

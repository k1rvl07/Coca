import { components, pages } from "@exports";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

export const AppRouter = () => {
  const { HomePage } = pages;
  const { Shared_Header: Header, Shared_Footer: Footer } = components;
  return (
    <>
      <Header />
      <Router basename="/Coca">
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
};

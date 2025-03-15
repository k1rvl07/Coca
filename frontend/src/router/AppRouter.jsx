import { components, pages } from "@exports";
import { Route, HashRouter as Router, Routes } from "react-router-dom";

export const AppRouter = () => {
  const { HomePage } = pages;
  const { Shared_Header: Header, Shared_Footer: Footer } = components;
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
};

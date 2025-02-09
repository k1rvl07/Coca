import { pages } from "@exports";
import { Route, HashRouter as Router, Routes } from "react-router-dom";

export const AppRouter = () => {
  const { HomePage } = pages;
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
};
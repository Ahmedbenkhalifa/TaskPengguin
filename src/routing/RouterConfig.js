import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { CircularProgress } from "@mui/material";
import CenterContainer from "components/containers/CenterContainer";
import { DETAILS, HOME, WATCHLIST } from "constants/routes";
const Navbar = lazy(() => import("components/Navbar"));
const Home = lazy(() => import("pages/Home"));
const WatchList = lazy(() => import("pages/WatchList"));
const Details = lazy(() => import("pages/Details"));

const RouterConfig = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Navbar />
      <Routes>
        <Route path={HOME} element={<Home />} />
        <Route path={WATCHLIST} element={<WatchList />} />
        <Route path={DETAILS} element={<Details />} />
      </Routes>
    </Suspense>
  );
};

const Loader = () => (
  <CenterContainer>
    <CircularProgress />
  </CenterContainer>
);

export default RouterConfig;

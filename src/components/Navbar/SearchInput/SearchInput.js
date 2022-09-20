import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { motion } from "framer-motion";
import { InputBase, PaperSearch, WelcomeLabel } from "./SearchInput.styles";
import { useDispatch } from "react-redux";
import { fetchShows, reset } from "redux/search.slice";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
const SearchInput = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [startAnimation, setStartAnimation] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const inHome = location.pathname === "/";
  console.log(inHome);
  let delayTimer = null;
  const handleSubmit = (event) => {
    event.preventDefault();
    setStartAnimation(true);
    navigate(`/?search=${searchParams.get("search")}`);
  };
  const handleChange = (e) => {
    clearTimeout(delayTimer);
    delayTimer = setTimeout(function () {
      setStartAnimation(true);
      setSearchParams({ search: e.target.value });
      if (e.target.value.length > 0) {
        navigate(`/?search=${e.target.value}`);
        dispatch(fetchShows(e.target.value));
      }
      if (e.target.value.length === 0) {
        dispatch(reset());
      }
    }, 500);
  };
  return (
    <>
      {inHome && (
        <WelcomeLabel
          component={motion.h1}
          initial={{ opacity: 1, y: "calc(40vh - 100%)" }}
          animate={startAnimation ? { opacity: 0 } : {}}
          transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
          align="center"
          variant="h4"
          color="primary"
        >
          welcome to tv show app
        </WelcomeLabel>
      )}
      <PaperSearch
        initial={inHome ? { y: 0, scale: 1.5 } : { y: "calc(-45vh - 50%)", scale: 1 }}
        animate={startAnimation ? { y: "calc(-45vh - 50%)", scale: 1 } : {}}
        transition={{ duration: 0.6, ease: [0.04, 0.62, 0.23, 0.98] }}
        component={motion.form}
        elevation={0}
        onSubmit={handleSubmit}
      >
        <SearchIcon sx={{ color: "#B6B6B6" }} />
        <InputBase placeholder="Start Searching ..." onChange={handleChange} />
      </PaperSearch>
    </>
  );
};
export default SearchInput;

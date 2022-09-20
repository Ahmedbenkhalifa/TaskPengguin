import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "redux/watchList.slice";
import showServices from "services/show.sevices";
import { errorHandler } from "utils/errorHandler";
import Button from "../Button";
import { Paper, Grid, Img } from "./CardShow.styles";
import AddIcon from "@mui/icons-material/Add";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import { useNavigate } from "react-router-dom";
import img from "utils/assets/images/noimg.png";

const baseURL = "https://image.tmdb.org/t/p/original/";
const CardShow = ({ id }) => {
  const [show, setShow] = useState(null);
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/show/${id}`);
  };
  const getDetails = async (id) => {
    try {
      const { data } = await showServices.getDetails(id);
      setShow(data);
    } catch (error) {
      return errorHandler(error);
    }
  };
  useEffect(() => {
    getDetails(id);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Grid item md={3} xs={12}>
      {show && (
        <Paper elevation={2}>
          <Img
            onClick={handleClick}
            src={show.poster_path ? `${baseURL}${show.poster_path}` : img}
            alt={show.name}
          />
          <Box sx={{ ml: 2, mt: 1 }}>
            <Typography variant="h6" sx={{ mb: -1 }}>
              {show.name}
            </Typography>
            <Typography variant="caption" sx={{ color: "GrayText" }}>
              {show.episode_run_time}min, {show.genres.map((genre) => genre.name + " ")}
            </Typography>
          </Box>
          <WatchListBtn id={show.id} />
        </Paper>
      )}
    </Grid>
  );
};

const WatchListBtn = ({ id }) => {
  const dispatch = useDispatch();
  const { watchList } = useSelector((state) => state.watchList);
  const handleAdd = () => {
    dispatch(add(id));
  };
  const handleRemove = () => {
    dispatch(remove(id));
  };
  if (!watchList.includes(id)) {
    return (
      <Button icon={AddIcon} onClick={handleAdd} sx={{ mt: "auto" }}>
        Add to watchList
      </Button>
    );
  } else {
    return (
      <Button icon={RemoveCircleOutlineIcon} onClick={handleRemove} sx={{ mt: "auto" }}>
        remove from watchList
      </Button>
    );
  }
};

export default CardShow;

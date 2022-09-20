import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Description, Info, Overview, TitleName, WatchListBtn } from "./TvShowDetails.styles";
import CheckIcon from "@mui/icons-material/Check";
import { Grid } from "@mui/material";
import { add, remove } from "redux/watchList.slice";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";

const TVShowDetails = ({id, name, genres, number_of_seasons, year, overview }) => {
  return (
    <Grid container spacing={2} style={{ margin: "10vh 0" }}>
      <Grid item xs={12}>
        <TitleName variant="h2">{name}</TitleName>
      </Grid>
      <Description item xs={12}>
        {genres.slice(0, 3).map((elem, key) => (
          <Info key={key}>{elem.name}</Info>
        ))}
        <Info>{year}</Info>
        <Info>{`${number_of_seasons} saison${number_of_seasons > 1 ? "s" : ""}`}</Info>
      </Description>
      <Grid item xs={12}>
        <Overview>{overview.length > 300 ? `${overview.slice(0, 300)}...` : overview}</Overview>
      </Grid>
      <Grid item xs={12}>
        <ButtonCustom id={parseInt(id)}/>
      </Grid>
    </Grid>
  );
};

const ButtonCustom = ({ id }) => {
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
      <WatchListBtn
        variant="contained"
        color="secondary"
        startIcon={<CheckIcon />}
        size="large"
        onClick={handleAdd}
      >
        WatchList
      </WatchListBtn>
    );
  } else {
    return (
      <WatchListBtn
        variant="contained"
        color="secondary"
        startIcon={<RemoveCircleOutlineIcon />}
        size="large"
        onClick={handleRemove}
      >
        remove from watchList
      </WatchListBtn>
    );
  }
};
export default TVShowDetails;

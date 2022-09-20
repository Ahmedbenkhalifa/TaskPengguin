import React, { useEffect, useState } from "react";
import { CircularProgress, Divider, Grid, ListItem, Typography } from "@mui/material";
import axios from "axios";
import { BASE_URL, showAPI } from "constants/api";
import { GridContainer } from "./ListEpisodes.styles";
import { useParams } from "react-router-dom";
import img from "utils/assets/images/noimg.png";
import useToast from "hooks/useToast";

const baseUrl = "https://image.tmdb.org/t/p/w300";
const ListEpisodes = ({ seasonNumber }) => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [episodes, setEpisodes] = useState([]);
  const toast = useToast();
  const getEpisodeDetails = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.get(
        `${BASE_URL}/tv/${id}/season/${seasonNumber + 1}${showAPI.APIKEY}`
      );
      setEpisodes(data.episodes);
      setIsLoading(false);
    } catch (error) {
      toast("An error occured", "error");
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getEpisodeDetails();
  }, [seasonNumber]);
  return (
    <>
      {isLoading && (
        <>
          <Divider />
          <CircularProgress sx={{ m: "50px auto", display: "block" }} />
        </>
      )}
      {!isLoading &&
        episodes?.map((elem, key) => (
          <ListItem key={key} alignItems="center" button>
            <GridContainer container spacing={1} alignItems="center">
              <Grid item xs={1}>
                <Typography color="textPrimary" variant="h4" style={{ textAlign: "center" }}>
                  {elem.episode_number}
                </Typography>
              </Grid>
              <Grid item xs={11}>
                <Grid container spacing={4} alignItems="center">
                  <Grid item xs={3}>
                    <img
                      alt={elem.name}
                      src={elem.still_path ? `${baseUrl}${elem.still_path}` : img}
                      style={{ width: "100%" }}
                    />
                  </Grid>
                  <Grid item xs={9}>
                    <Typography variant="h5" color="textPrimary">
                      {elem.name}
                    </Typography>
                    <Typography variant="body2" color="textPrimary">
                      {elem.overview.length > 300
                        ? `${elem.overview.slice(0, 300)}...`
                        : elem.overview}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </GridContainer>
          </ListItem>
        ))}
    </>
  );
};

export default ListEpisodes;

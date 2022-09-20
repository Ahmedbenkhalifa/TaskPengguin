import React, { useEffect, useState } from "react";
import { Layout } from "components/Layout";
import { BackdropPath, Background, BackgroundContainer, Vignette } from "./Details.Styles";
import showServices from "services/show.sevices";
import { errorHandler } from "utils/errorHandler";
import { Grid, Container } from "@mui/material";
import TVShowDetails from "./TvShowDetails";
import Episodes from "./Episodes";
import { useParams } from "react-router-dom";

const baseURL = "https://image.tmdb.org/t/p/original/";
const Details = () => {
  const { id } = useParams();
  const [show, setShow] = useState({});
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
  }, []);
  return (
    <Layout title={"Details"}>
      {Object.keys(show).length !== 0 && (
        <Container maxWidth="lg" sx={{ mt: 8, minHeight: "100vh" }}>
          <BackgroundContainer>
            <Background>
              <BackdropPath src={`${baseURL}${show.backdrop_path}`} alt={show.name} />
              <Vignette />
            </Background>
          </BackgroundContainer>
          <Container>
            <Grid container spacing={4} alignItems="center">
              <Grid item xs={8}>
                <TVShowDetails
                  id={id}
                  name={show.name}
                  vote_average={show.vote_average}
                  genres={show.genres}
                  number_of_seasons={show.number_of_seasons}
                  year={show.first_air_date.slice(0, 4)}
                  overview={show.overview}
                />
              </Grid>
              <Grid item xs={12}>
                <Episodes seasons={show.seasons} />
              </Grid>
            </Grid>
          </Container>
        </Container>
      )}
    </Layout>
  );
};

export default Details;

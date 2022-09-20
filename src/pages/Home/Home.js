import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Container, Grid, Typography } from "@mui/material";
import { Layout } from "components/Layout";
import Loader from "components/Loader";
import CardShow from "components/shared/CardShow";
import { useNavigate, useSearchParams } from "react-router-dom";

const Home = () => {
  let [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const search = searchParams.get("search");
  const { status, shows } = useSelector((state) => state.search);
  useEffect(() => {
    navigate("/");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Layout title={"Home"}>
      <Container maxWidth="lg" sx={{ mt: 10 }}>
        {search && (
          <Typography component="h1" variant="h5" align="center" sx={{ mb: 2 }}>
            {shows.length > 0
              ? `You are searching for "${search}"`
              : `No results for your query  "${search}"`}
          </Typography>
        )}

        {status === "loading" && <Loader />}
        <Grid container spacing={3}>
          {shows.length > 0 &&
            status === "success" &&
            shows.map((showId, key) => <CardShow key={key} id={showId} />)}
        </Grid>
      </Container>
    </Layout>
  );
};

export default Home;

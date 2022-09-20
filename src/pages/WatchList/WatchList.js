import React from "react";
import { Container, Grid, Typography } from "@mui/material";
import { Layout } from "components/Layout";
import { useSelector } from "react-redux";
import CardShow from "components/shared/CardShow";

const WatchList = () => {
  const { watchList } = useSelector((state) => state.watchList);
  return (
    <Layout title={"WatchList"}>
      <Container maxWidth="lg" sx={{ mt: 10 }}>
        <Typography component="h1" variant="h5" align="center" sx={{ mb: 1 }}>
          Watch list
        </Typography>
        <Grid container spacing={3}>
          {watchList.length > 0 && watchList.map((showId, key) => <CardShow key={key} id={showId} />)}
        </Grid>
      </Container>
    </Layout>
  );
};

export default WatchList;

import React from "react";
import { Box, Grid, Skeleton } from "@mui/material";
import { Helmet } from "react-helmet";

const Loader = () => {
  return (
    <>
      <Helmet>
        <title>Chargement...</title>
      </Helmet>
      <Grid container sx={{ mt: 10 }}>
        {Array.from(new Array(10)).map((e, key) => (
          <Grid item md={3} xs={12} key={key} sx={{p:1}}>
            <Skeleton variant="rectangular" height={200} />
            <Box sx={{ pt: 0.5 }}>
              <Skeleton />
              <Skeleton width="60%" />
            </Box>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Loader;

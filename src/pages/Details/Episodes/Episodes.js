import React, { useState } from "react";
import {
  FormControl,
  LabelMenu,
  SelectorHeader,
  SelectorLabel,
  SelectorMenu,
} from "./Episodes.styles";
import { Box, Container, MenuItem, Typography } from "@mui/material";
import ListEpisodes from "./ListEpisodes";

const Episodes = ({ seasons }) => {
  const [selectedSeason, setSelectedSeason] = useState(0);
  return (
    <Box>
      <SelectorHeader>
        <SelectorLabel variant="h3">Episodes</SelectorLabel>
        <FormControl variant="outlined">
          <SelectorMenu
            labelId="select-outlined-label"
            id="select-outlined"
            value={selectedSeason}
            onChange={(event) => setSelectedSeason(event.target.value)}
            MenuProps={{
              anchorOrigin: {
                vertical: "bottom",
                horizontal: "left",
              },
              getcontentanchorel: null,
            }}
          >
            {seasons.length > 1 ? (
              seasons.slice(1, seasons.length).map((elem, k) => (
                <MenuItem key={k} value={k}>
                  <LabelMenu component="span">
                    {`Saison ${k + 1} `}
                    <Typography component="span"> {` (${elem.episode_count} épisodes)`}</Typography>
                  </LabelMenu>
                </MenuItem>
              ))
            ) : (
              <MenuItem value={0}>
                <LabelMenu component="span">
                  {`Saison ${1} `}
                  <Typography component="span">
                    {" "}
                    {` (${seasons[0]?.episode_count} épisodes)`}
                  </Typography>
                </LabelMenu>
              </MenuItem>
            )}
          </SelectorMenu>
        </FormControl>
      </SelectorHeader>
      <Container sx={{ mb: 10 }}>
        <ListEpisodes seasonNumber={selectedSeason} />
      </Container>
    </Box>
  );
};

export default Episodes;

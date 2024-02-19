import React from "react";
import Section from "./Section";
import { Link, useOutletContext } from "react-router-dom";
import {
  Card,
  CardContent,
  CardMedia,
  Button,
  Typography,
  CardActions,
  Grid,
} from "@mui/material";

function CocktailCard({ image, name, id, info, glass }) {
  /* const data = useOutletContext()
    console.log(data) */
  return (
    <Grid item xs={2} sm={4} md={4}>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia sx={{ height: 140 }} image={image} title={name}></CardMedia>
        <CardContent>
          <Typography gutterBottom variant="h4" component="div">
            {name}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            {glass}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {info}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Details</Button>
        </CardActions>
      </Card>
    </Grid>
  );
}

export default CocktailCard;

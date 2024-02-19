import React from "react";
import Section from "./Section";
import CocktailCard from "./CocktailCard";
import { Grid } from "@mui/material";

function CocktailList({ drinks }) {
  console.log(drinks);

  if (!drinks) {
    return (
      <h4 style={{ textAlign: "center" }}>No matching cocktails found...</h4>
    );
  }

  const formattedDrinks = drinks.map((item) => {
    const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } = item;
    return {
      id: idDrink,
      name: strDrink,
      image: strDrinkThumb,
      info: strAlcoholic,
      glass: strGlass,
    };
  });

  return (
    <Grid
      container
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 4, sm: 8, md: 12 }}
    >
      {formattedDrinks.map((item) => (
        <CocktailCard key={item.id} {...item} />
      ))}
    </Grid>
  );
}

export default CocktailList;

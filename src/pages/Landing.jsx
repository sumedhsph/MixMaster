import { Typography } from "@mui/material";
import React from "react";
import { useLoaderData } from "react-router-dom";
import Section from "../components/Section";
import axios from "axios";
import SearchForm from "../components/SearchForm";
import CocktailList from "../components/CocktailList";

const cocktailSearchUrl =
  "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

export const loader = async () => {
  const searchTerm = "margarita";
  const response = await axios.get(`${cocktailSearchUrl}${searchTerm}`);
  return { drinks: response.data.drinks, searchTerm };
};

function Landing() {
  const { searchTerm, drinks } = useLoaderData();
  //const data = useLoaderData()
  //console.log("landingData:", data);

  return (
    <Section>
      {/* <Typography variant="h4">Landing</Typography> */}
      <SearchForm />
      <CocktailList drinks={drinks} />
    </Section>
  );
}

export default Landing;

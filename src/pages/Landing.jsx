import { Typography } from "@mui/material";
import React from "react";
import { useLoaderData } from "react-router-dom";
import Section from "../components/Section";
import axios from "axios";
import SearchForm from "../components/SearchForm";
import CocktailList from "../components/CocktailList";
import { useQuery } from "@tanstack/react-query";

const cocktailSearchUrl =
  "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

const searchCocktailsQuery = (searchTerm) => {
  return {
    queryKey: ["search", searchTerm || "all"],
    queryFn: async () => {
      const response = await axios.get(`${cocktailSearchUrl}${searchTerm}`);
      return response.data.drinks;
    },
  };
};

export const loader =
  (queryClient) =>
  async ({ request }) => {
    const url = new URL(request.url);
    const searchTerm = url.searchParams.get('search') || '';
    await queryClient.ensureQueryData(searchCocktailsQuery(searchTerm));
    // const response = await axios.get(`${cocktailSearchUrl}${searchTerm}`);
    return { searchTerm };
  };

function Landing() {
  const { searchTerm } = useLoaderData();
  //const data = useLoaderData()
  //console.log("landingData:", data);
  const {data: drinks} = useQuery(searchCocktailsQuery(searchTerm));
  return (
    <Section>
      {/* <Typography variant="h4">Landing</Typography> */}
      <SearchForm searchTerm={searchTerm} />
      <CocktailList drinks={drinks} />
    </Section>
  );
}

export default Landing;

import React from "react";
import { useLoaderData, Link } from "react-router-dom";
import Section from "../components/Section";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import {
  Typography,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Collapse,
  IconButton,
} from "@mui/material";
import { FaCaretSquareDown } from "react-icons/fa";

const singleCocktailUrl =
  "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const singleCocktailQuery = (id) => {
  return {
    queryKey: ["cocktail", id],
    queryFn: async () => {
      const { data } = await axios.get(`${singleCocktailUrl}${id}`);
      return data;
    },
  };
};

export const loader =
  (queryClient) =>
  async ({ params }) => {
    const { id } = params;
    await queryClient.ensureQueryData(singleCocktailQuery(id));
    return { id };
  };

const ExpandMore = ((props) => {
  const { expand, ...other } = props;
  return <FaCaretSquareDown {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const Cocktail = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const { id } = useLoaderData();
  const { data } = useQuery(singleCocktailQuery(id));
  const singleDrink = data.drinks[0];
  const {
    strDrink: name,
    strDrinkThumb: image,
    strAlcoholic: info,
    strCategory: category,
    strGlass: glass,
    strInstructions: instructions,
  } = singleDrink;

  const validIngredients = Object.keys(singleDrink)
    .filter(
      (key) => key.startsWith("strIngredient") && singleDrink[key] !== null
    )
    .map((key) => singleDrink[key]);
  if (!data) return <Navigate to="/" />;
  return (
    <Section>
      <header style={{ marginBottom: "60px" }}>
        <Link to="/">back home</Link>
      </header>
      <div>
        <Card sx={{ maxWidth: 600 }}>
          <CardHeader title={name} subheader={category} />
          <CardMedia component="img" height={300} image={image} alt={name} />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              Name: {name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Category: {category}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Info: {info}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Glass: {glass}
            </Typography>
            <div style={{ marginTop: "15px" }}>
              Ingredients:{" "}
              {validIngredients.map((item, index) => (
                <Typography variant="body2" color="text.secondary" key={item}>
                  {item} {index < validIngredients.length - 1 ? "," : ""}
                </Typography>
              ))}
            </div>
            <div style={{ marginTop: "15px" }}>
              Instructions:{" "}
              <Typography variant="body2" color="text.secondary">
                {instructions}
              </Typography>
            </div>
          </CardContent>
        </Card>
      </div>
    </Section>
  );
};

export default Cocktail;

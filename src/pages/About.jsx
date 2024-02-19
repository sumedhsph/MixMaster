import { Container, Typography } from "@mui/material";
import React from "react";
import Section from "../components/Section";

function About() {
  return (
    <Section>
      <Typography variant="h4">About Us</Typography>
      <Typography variant="body1">
        Introducing "MixMaster," the ultimate party sidekick app that fetches
        cocktails from the hilarious Cocktails DB API. With a flick of your
        finger, you'll unlock a treasure trove of enchanting drink recipes
        that'll make your taste buds dance and your friends jump with joy. Get
        ready to shake up your mixology game, one fantastical mocktail at a
        time, and let the laughter and giggles flow!
      </Typography>
    </Section>
  );
}

export default About;

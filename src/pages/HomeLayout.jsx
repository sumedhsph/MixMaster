import React from "react";
import { Link, Outlet, useNavigation } from "react-router-dom";
import Navbar from "../components/Navbar";
import { CircularProgress, Container } from "@mui/material";

function HomeLayout() {
  const navigation = useNavigation();
  const isPageLoading = navigation.state === "loading";
  const value = "some value";
  return (
    <div>
      <Navbar />
      <Container>
        {isPageLoading ? (
          <div className="loading"><CircularProgress/></div>
        ) : (
          <Outlet context={{ value }} />
        )}
      </Container>
    </div>
  );
}

export default HomeLayout;

import React from "react";
import { Link, Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Container } from "@mui/material";


function HomeLayout() {
  return (
    <div>
      <Navbar />
      <Container>
        <Outlet />
      </Container>
    </div>
  );
}

export default HomeLayout;

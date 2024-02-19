import { Link, useRouteError } from "react-router-dom";
import img from "../assets/not-found.svg";
import { Container } from "@mui/material";

const Error = () => {
  const error = useRouteError();
  console.log(error);
  if (error.status === 404) {
    return (
      <Container>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div style={{width:'55%'}}>
            <img src={img} alt="not found" style={{width:'100%'}}/>
            <h3>Ohh! </h3>
            <p>We can't seem to find the page you're looking for</p>
            <Link to="/">back home</Link>
          </div>
        </div>
      </Container>
    );
  }
  return (
    <Container>
      <div>
        <h3>something went wrong</h3>
      </div>
    </Container>
  );
};

export default Error;

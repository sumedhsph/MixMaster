import { Typography, Button,  TextField, Box } from "@mui/material";
import React, { useState } from "react";
import { Form } from "react-router-dom";
import Section from "../components/Section";

const newsletterUrl = "https://www.course-api.com/cocktails-newsletter";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  // Validation logic
  const errors = {};

  if (!data.name.trim()) {
    errors.name = "Name is required";
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!data.email.trim() || !emailRegex.test(data.email)) {
    errors.email = "Enter a valid email address";
    setErr("Please fill all the fields");
  }

  // Check if there are any validation errors
  if (Object.keys(errors).length > 0) {
    console.log("Validation errors:", errors);
    setErr("Please fill all the fields");
    return "Validation failed";
  }

  // Continue processing the form data or perform any other actions
  try {
    const response = await axios.post(newsletterUrl, data);
    console.log(response);
    toast.success(response.data.msg);
    return redirect("/");
  } catch (error) {
    console.log(error);
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

function Newsletter() {
  const [err, setErr] = useState("");
  const isSubmitting = navigation.state === "submitting";
  return (
    <Section>
      <Typography variant="h4">Our Newsletter</Typography>
      <div style={{ marginTop: "60px" }}>
        <Form method="POST">
          <Box sx={{width:420, marginBottom:2}}>
            <TextField
              type="text"
              required={true}
              name="firstName"
              id="firstName"
              label="First Name"
              autoComplete="true"
            />
            <TextField
              type="text"
              required={true}
              name="lastName"
              id="lastName"
              label="Last Name"
              autoComplete="true"
            />
          </Box>
          <Box sx={{width:420, marginBottom:2}}>
            <TextField
              type="email"
              required={true}
              name="email"
              id="email"
              label="Email"
              autoComplete="true"
              fullWidth
            />
          </Box>
          <Box sx={{width:420}}>
            <Button variant="contained">
              {isSubmitting ? "submitting..." : "submit"}
            </Button>
          </Box>
          {err && err}
        </Form>
      </div>
    </Section>
  );
}

export default Newsletter;

import React from "react";
import Section from "./Section";
import {   TextField } from "@mui/material";
import { Form } from "react-router-dom";
function SearchForm({ searchTerm }) {
  return (
    <Section>
      <Form>
        <div>
          <TextField
            type="text"
            required={true}
            name="search"
            id="search"
            label="search"
            autoComplete="true"
            defaultValue={searchTerm}
          />
        </div>
      </Form>
    </Section>
  );
}

export default SearchForm;

import React from "react";
import { render } from "@testing-library/react";
import Header from "./Header";

test("Toggle div renders", () => {
  const { getByTestId } = render(<Header />);
  getByTestId("toggler");
});

test("Header image renders", () => {
  const { getByTestId } = render(<Header />);
  getByTestId("header-image");
});

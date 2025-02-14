import React from "react";
import { render } from "@testing-library/react";
import Counter from "../components/CounterProp";

test("increments count on button click", () => {
  const { getByTestId } = render(<Counter count={9} />);
  const countElement = getByTestId("count");

  expect(countElement.textContent).toBe("9");
});
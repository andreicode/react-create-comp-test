import React from "react";
import { render } from "@testing-library/react";
import YellowSquare from "./YellowSquare";

describe("[COMPONENT] YellowSquare", () => {
  it('renders correctly', () => {
    const { container } = render(<YellowSquare />);
    expect(container).toMatchSnapshot();
  });
});

import { render, screen } from "@testing-library/react";
import Button from "@/components/Button";

describe("Button Component", () => {
  it("renders button correctly", () => {
    const { container } = render(<Button label="Click Me" />);

    expect(screen.getByTestId("btn").textContent).toBe("Click Me");
    expect(container).toMatchSnapshot();
  });
});


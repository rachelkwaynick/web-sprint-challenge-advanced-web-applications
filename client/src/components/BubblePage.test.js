import React from "react";
import { render, screen } from "@testing-library/react";
import BubblePage from "./BubblePage";

test("Fetches data and renders the bubbles", () => {
  // Finish this test

  const mockGetData = jest.fn();

  render(<BubblePage fetchColors={mockGetData} />)
  
  expect(mockGetData.mock.calls.length === 1)

  const bubbles = screen.queryByText('bubbles')

  expect(bubbles).toBeInTheDocument();
});

import { render, screen, waitFor } from "@testing-library/react";
import App from "./App";
import axios from "axios";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();
const AppWrapper = () => (
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>
);

test("it should render the App Component and Files' Table body with data", async () => {
  const testFilesData = [
    {
      file: "test2.csv",
      text: "pRkgzsbtbaLcqSrUr",
      number: "027732670",
      hex: "f083aaf6ccfa9a27b59e1bc294c0e524",
    },
    {
      file: "test3.csv",
      text: "CeyFdCQj",
      number: "49910",
      hex: "7ad27c6fc90fb480a6cffc0ecca32acb",
    },
  ];

  // Replace the axios call with a resolved value with data
  jest.spyOn(axios, "get").mockResolvedValue({ data: testFilesData });
  // Render the App component with the queryclient wrapper
  render(<AppWrapper />);
  // Find the table
  expect(screen.getByRole("table")).toBeInTheDocument();
  // Wait for the table body which has the rowgroup role to render after the axios call is returned
  const body = await screen.findByRole("rowgroup");
  expect(body).toBeInTheDocument();
});

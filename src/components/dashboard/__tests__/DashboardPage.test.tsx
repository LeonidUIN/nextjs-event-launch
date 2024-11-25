import { render, screen } from "@testing-library/react";
import DashboardPage from "../DashboardPage";

// Мокаем хук useUsers, так как он использует внешний API
jest.mock("../hooks/useUsers", () => ({
  useUsers: () => ({
    data: {
      data: []
    },
    isLoading: false,
    error: null
  })
}));

describe("DashboardPage", () => {
  it("renders dashboard header", () => {
    render(<DashboardPage />);
    expect(screen.getByText("Hello Steve 👋🏼,")).toBeInTheDocument();
  });

  it("renders metrics cards", () => {
    render(<DashboardPage />);
    expect(screen.getByText("Total Customers")).toBeInTheDocument();
    expect(screen.getByText("Members")).toBeInTheDocument();
    expect(screen.getByText("Active Now")).toBeInTheDocument();
  });
});

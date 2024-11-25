import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import DashboardPage from "../DashboardPage";

const queryClient = new QueryClient();

describe("DashboardPage", () => {
  it("renders dashboard header", () => {
    render(
      <QueryClientProvider client={queryClient}>
        <DashboardPage />
      </QueryClientProvider>
    );
    expect(screen.getByText("Hello Steve 👋🏼,")).toBeInTheDocument();
  });

  it("handles sort buttons", () => {
    render(
      <QueryClientProvider client={queryClient}>
        <DashboardPage />
      </QueryClientProvider>
    );
    const locationButton = screen.getByText("Location");
    fireEvent.click(locationButton);
    expect(locationButton).toBeInTheDocument();
  });

  it("renders metrics cards", () => {
    render(
      <QueryClientProvider client={queryClient}>
        <DashboardPage />
      </QueryClientProvider>
    );
    expect(screen.getByText("Total Customers")).toBeInTheDocument();
    expect(screen.getByText("Members")).toBeInTheDocument();
    expect(screen.getByText("Active Now")).toBeInTheDocument();
  });
});

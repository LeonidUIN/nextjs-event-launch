import { useQuery } from "@tanstack/react-query";
import { User } from "../types";

interface UsersResponse {
  data: User[];
}

export function useUsers(page: number, sortBy: string | null) {
  return useQuery<UsersResponse>({
    queryKey: ["users", page, sortBy],
    queryFn: async () => {
      const url = `https://user-api.builder-io.workers.dev/${
        sortBy ? `?sortBy=${sortBy}` : ""
      }${sortBy && page > 1 ? "&" : "?"}${page > 1 ? `page=${page}` : ""}`;
      const response = await fetch(url);
      return response.json();
    },
  });
}

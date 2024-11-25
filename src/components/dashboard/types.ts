export interface User {
  name: {
    first: string;
    last: string;
  };
  location: {
    city: string;
    country: string;
  };
  picture: {
    thumbnail: string;
  };
}

export interface DashboardMetric {
  icon: string;
  label: string;
  value: string;
  change?: {
    value: string;
    trend: "up" | "down";
  };
}

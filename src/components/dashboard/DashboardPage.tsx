"use client";
import React, { useState } from "react";
import { useUsers } from "./hooks/useUsers";
import { SidebarMenuItem } from "./components/SidebarMenuItem";
import { MetricCard } from "./components/MetricCard";
import { UsersTable } from "./components/UsersTable";
import { Pagination } from "./components/Pagination";
import { DashboardMetric } from "./types";

const metrics: DashboardMetric[] = [
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/04fe9e1e58640608bf41103447c16dc343257bd750ff209ce3a8a93d4eeb3489?placeholderIfAbsent=true&apiKey=dbabd433e7c44afe8251fc59e05b4be9",
    label: "Total Customers",
    value: "5,423",
    change: { value: "16%", trend: "up" },
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/fb25895f937f2c6e262440f8d798fd3670fc77339a0174778d153a70c6b3c059?placeholderIfAbsent=true&apiKey=dbabd433e7c44afe8251fc59e05b4be9",
    label: "Members",
    value: "1,893",
    change: { value: "1%", trend: "down" },
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/e4ee83101ab617598c1ec6e8ccbf99115bc92dd16b4522a1dd2bb1e565d0eb1e?placeholderIfAbsent=true&apiKey=dbabd433e7c44afe8251fc59e05b4be9",
    label: "Active Now",
    value: "189",
  },
];

const sidebarItems = [
  { label: "Dashboard", icon: "/icons/dashboard.svg" },
  { label: "Product", icon: "/icons/product.svg" },
  { label: "Customers", icon: "/icons/customers.svg" },
  { label: "Help", icon: "/icons/help.svg" }
];

export default function DashboardPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState<string | null>(null);
  const { data, isLoading, error } = useUsers(currentPage, sortBy);

  const handleSort = (field: string) => {
    setSortBy(field);
  };

  const handlePageChange = (page: number) => {
    if (page < 1 || page > 10) return;
    setCurrentPage(page);
  };

  if (error) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-red-500">Ошибка загрузки данных. Попробуйте позже.</p>
      </div>
    );
  }

  return (
    <div className="overflow-hidden pr-20 bg-gray-100 max-md:pr-5">
      <div className="flex gap-5 max-md:flex-col">
        <aside className="flex flex-col w-[24%] max-md:ml-0 max-md:w-full">
          <div className="flex overflow-hidden flex-col px-7 pt-9 mx-auto w-full bg-white pb-[838px] shadow-[4px_10px_60px_rgba(175,183,192,0.5)] max-md:px-5 max-md:pb-24 max-md:mt-10">
            <header className="flex gap-2 max-w-full text-2xl font-semibold tracking-wide text-black whitespace-nowrap w-[195px]">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/87c510f6928226e054443ff007e141f9c890777692a605b57ca143bb1803c285?placeholderIfAbsent=true&apiKey=dbabd433e7c44afe8251fc59e05b4be9"
                className="object-contain shrink-0 self-start aspect-square w-[37px]"
                alt=""
              />
              <h1 className="grow shrink w-[143px]">Dashboard</h1>
            </header>
            <nav className="flex flex-col mt-14 w-full max-md:mt-10">
              {sidebarItems.map((item) => (
                <SidebarMenuItem
                  key={item.label}
                  icon={item.icon}
                  label={item.label}
                  isActive={item.label === "Customers"}
                />
              ))}
            </nav>
          </div>
        </aside>

        <main className="flex flex-col ml-5 w-[76%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col mt-10 w-full max-md:max-w-full">
            <header className="flex flex-wrap gap-10 justify-between items-center w-full max-md:max-w-full">
              <h2 className="self-stretch my-auto text-2xl font-medium text-black">
                Hello Steve 👋🏼,
              </h2>
              <form className="flex gap-2 items-center self-stretch px-2 py-2 my-auto text-sm tracking-normal whitespace-nowrap bg-white rounded-lg border-stone-400 border-opacity-70 shadow-[2px_4px_20px_rgba(199,210,223,0.5)] text-neutral-600 w-[216px]">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/c9372eec0966b72fe095bdebb9fdef9e9fa53f6caea9c4c9e96aeb37e6fe0294?placeholderIfAbsent=true&apiKey=dbabd433e7c44afe8251fc59e05b4be9"
                  className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
                  alt=""
                />
                <input
                  type="search"
                  placeholder="Search"
                  className="bg-transparent border-none outline-none"
                  aria-label="Search"
                />
              </form>
            </header>

            <section className="flex flex-wrap gap-5 justify-between items-start px-14 py-8 mt-10 w-full bg-white rounded-2xl shadow-[0px_10px_60px_rgba(168,176,185,0.5)] max-md:px-5 max-md:max-w-full">
              {metrics.map((metric, index) => (
                <React.Fragment key={metric.label}>
                  <MetricCard metric={metric} />
                  {index < metrics.length - 1 && (
                    <div className="shrink-0 w-px border border-solid border-stone-400 h-[87px]" />
                  )}
                </React.Fragment>
              ))}
            </section>

            <section className="flex flex-col px-9 py-8 mt-12 w-full bg-white rounded-2xl shadow-[0px_10px_60px_rgba(168,176,185,0.5)] max-md:px-5 max-md:mt-10 max-md:max-w-full">
              <header className="flex flex-col self-start">
                <h2 className="text-2xl font-semibold tracking-tight text-black">
                  All Customers
                </h2>
                <p className="self-start mt-2 text-sm tracking-normal text-green-600">
                  Active Members
                </p>
              </header>

              <div className="flex z-10 gap-5 self-end mt-0 text-xs tracking-normal">
                <span className="grow my-auto text-stone-700">Sort by :</span>
                <div className="flex gap-2.5 font-semibold whitespace-nowrap text-zinc-900">
                  <button
                    className="px-4 py-2.5 bg-gray-100 rounded-lg border border-solid cursor-pointer border-stone-300"
                    onClick={() => handleSort("location.city")}
                  >
                    Location
                  </button>
                  <button
                    className="px-4 py-2.5 bg-gray-100 rounded-lg border border-solid cursor-pointer border-stone-300"
                    onClick={() => handleSort("name.first")}
                  >
                    Name
                  </button>
                </div>
              </div>

              <div className="self-center mt-24 ml-8 text-sm text-black max-md:mt-10">
                <div className="overflow-x-auto w-full">
                  <UsersTable users={data?.data || []} isLoading={isLoading} />
                </div>
              </div>

              <footer className="flex justify-end mt-24 max-md:mt-10">
                <Pagination
                  currentPage={currentPage}
                  totalPages={10}
                  onPageChange={handlePageChange}
                />
              </footer>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}

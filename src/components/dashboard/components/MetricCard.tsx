import { DashboardMetric } from "../types";

interface MetricCardProps {
  metric: DashboardMetric;
}

export function MetricCard({ metric }: MetricCardProps) {
  return (
    <div className="flex gap-5">
      <img
        loading="lazy"
        src={metric.icon}
        className="object-contain shrink-0 aspect-square w-[84px]"
        alt=""
      />
      <div className="flex flex-col">
        <div className="text-sm tracking-normal text-stone-500">
          {metric.label}
        </div>
        <div className="mt-1 text-3xl font-semibold tracking-tight leading-none text-black">
          {metric.value}
        </div>
        {metric.change && (
          <div className="flex gap-1 mt-1.5 text-xs tracking-normal text-gray-800">
            <img
              loading="lazy"
              src={metric.change.trend === "up" ? "/icons/trend-up.svg" : "/icons/trend-down.svg"}
              className="object-contain shrink-0 w-5 aspect-square"
              alt=""
            />
            <div>
              <span
                className={`font-bold ${
                  metric.change.trend === "up"
                    ? "text-green-600"
                    : "text-rose-700"
                }`}
              >
                {metric.change.value}
              </span>{" "}
              this month
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

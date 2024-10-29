"use client";

import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from "recharts";

interface PopulationData {
    year: string;
    value: number;
}

interface PopulationChartProps {
    data: PopulationData[];
}

export function PopulationChart({ data }: PopulationChartProps) {
    const sortedData = [...data].sort(
        (a, b) => parseInt(a.year) - parseInt(b.year)
    );

    return (
        <div className="w-full h-[400px] bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold mb-6">Population Over Time</h2>
            <ResponsiveContainer width="100%" height={300}>
                <AreaChart
                    data={sortedData}
                    margin={{
                        top: 10,
                        right: 30,
                        left: 20,
                        bottom: 30,
                    }}
                >
                    <defs>
                        <linearGradient id="colorPopulation" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#6366f1" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#6366f1" stopOpacity={0} />
                        </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                    <XAxis
                        dataKey="year"
                        angle={-45}
                        textAnchor="end"
                        height={70}
                        tick={{ fill: "#4b5563" }}
                        tickMargin={15}
                    />
                    <YAxis
                        tickFormatter={(value) =>
                            new Intl.NumberFormat("en", {
                                notation: "compact",
                                compactDisplay: "short",
                            }).format(value)
                        }
                        tick={{ fill: "#4b5563" }}
                    />
                    <Tooltip
                        contentStyle={{
                            backgroundColor: "#ffffff",
                            border: "1px solid #e5e7eb",
                            borderRadius: "0.5rem",
                            padding: "0.5rem",
                        }}
                        formatter={(value: number) => [
                            new Intl.NumberFormat("en").format(value),
                            "Population",
                        ]}
                        labelFormatter={(label) => `Year: ${label}`}
                    />
                    <Legend />
                    <Area
                        type="monotone"
                        dataKey="value"
                        name="Population"
                        stroke="#6366f1"
                        strokeWidth={2}
                        fillOpacity={1}
                        fill="url(#colorPopulation)"
                    />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
}

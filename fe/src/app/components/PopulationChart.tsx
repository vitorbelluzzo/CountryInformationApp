import React from 'react'
import { CartesianGrid, Line, LineChart, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'


interface PopulationData {
    year: string;
    value: number;
}

interface PopulationChartProps {
    data: PopulationData[];
}

function PopulationChart({ data }: PopulationChartProps) {
    return (
        <ResponsiveContainer width="50%" height="100%">
            <LineChart className='' width={800} height={400} data={data}>
                <CartesianGrid stroke="#ccc" />
                <XAxis dataKey="year" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="value" stroke="#8884d8" />
            </LineChart>
        </ResponsiveContainer>
    )
}

export default PopulationChart
import React from 'react';
import { LineChart, Line } from 'recharts';

const MyChart = ({data}) => (
    <LineChart width={400} height={400} data={data}>
        <Line type="monotone" dataKey="amt" stroke="#2962FF" />
    </LineChart>
);

export default MyChart;
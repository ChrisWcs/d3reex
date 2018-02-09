import React from 'react';
import { LineChart, Line, XAxis, YAxis } from 'recharts';

const MyChart = ({data}) => (
    <LineChart width={400} height={400} data={data} margin={{top: 5, right: 30, left: 20, bottom: 5}}>
        <XAxis dataKey="name"/>
       <YAxis/>
       <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
    </LineChart>
);

export default MyChart;
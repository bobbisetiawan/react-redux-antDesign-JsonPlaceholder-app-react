import React from "react";
import { Column } from '@ant-design/plots';

const data = [
    {
        action: 'User 1',
        pv: 10000,
    },
    {
        action: 'User 2',
        pv: 8000,
    },
    {
        action: 'User 3',
        pv: 6000,
    },
    {
        action: 'User 4',
        pv: 4000,
    },
    {
        action: 'User 5',
        pv: 2500,
    },
];
const config = {
    data,
    xField: 'action',
    yField: 'pv',
    conversionTag: {},
    xAxis: {
        label: {
            autoHide: true,
            autoRotate: false,
        },
    },
};

export const BarChart = () => {
    return <Column {...config} />;
}
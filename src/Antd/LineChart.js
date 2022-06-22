import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Line } from '@ant-design/plots';


const data = [
    {
        year: '2014',
        value: 3500,
    },
    {
        year: '2015',
        value: 9000,
    },
    {
        year: '2016',
        value: 17000,
    },
    {
        year: '2017',
        value: 20000,
    },
    {
        year: '2018',
        value: 25000,
    },
    {
        year: '2019',
        value: 27000,
    },
    {
        year: '2020',
        value: 28000,
    },
    {
        year: '2021',
        value: 29500,
    },
    {
        year: '2022',
        value: 30500,
    },
];
const config = {
    data,
    xField: 'year',
    yField: 'value',
    label: {},
    point: {
        size: 5,
        shape: 'diamond',
        style: {
            fill: 'white',
            stroke: '#5B8FF9',
            lineWidth: 2,
        },
    },
    tooltip: {
        showMarkers: false,
    },
    state: {
        active: {
            style: {
                shadowBlur: 4,
                stroke: '#000',
                fill: 'red',
            },
        },
    },
    interactions: [
        {
            type: 'marker-active',
        },
    ],
};

export const LineChart = () => {
    return <Line {...config} />;
};
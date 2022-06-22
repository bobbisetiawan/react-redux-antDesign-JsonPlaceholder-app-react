import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Pie, G2 } from '@ant-design/plots';


const G = G2.getEngine('canvas');
const data = [
    {
        type: 'User 1',
        value: 10000,
    },
    {
        type: 'User 2',
        value: 8000,
    },
    {
        type: 'User 3',
        value: 6000,
    },
    {
        type: 'User 4',
        value: 4000,
    },
    {
        type: 'User 5',
        value: 2500,
    }
];
const cfg = {
    appendPadding: 10,
    data,
    angleField: 'value',
    colorField: 'type',
    radius: 0.75,
    legend: false,
    label: {
        type: 'spider',
        labelHeight: 40,
        formatter: (data, mappingData) => {
            const group = new G.Group({});
            group.addShape({
                type: 'circle',
                attrs: {
                    x: 0,
                    y: 0,
                    width: 40,
                    height: 50,
                    r: 5,
                    fill: mappingData.color,
                },
            });
            group.addShape({
                type: 'text',
                attrs: {
                    x: 10,
                    y: 8,
                    text: `${data.type}`,
                    fill: mappingData.color,
                },
            });
            group.addShape({
                type: 'text',
                attrs: {
                    x: 0,
                    y: 25,
                    text: `${data.value}个 ${data.percent * 100}%`,
                    fill: 'rgba(0, 0, 0, 0.65)',
                    fontWeight: 700,
                },
            });
            return group;
        },
    },
    interactions: [
        {
            type: 'element-selected',
        },
        {
            type: 'element-active',
        },
    ],
};
const config = cfg;

export const PieChart = () => {
    return <Pie {...config} />;
};
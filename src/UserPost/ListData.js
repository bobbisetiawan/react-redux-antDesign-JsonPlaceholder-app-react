import React, { useEffect, useState } from "react";
import { getAllPost } from "../Redux/Features/postSlice";
import { useSelector, useDispatch } from "react-redux";
import { Table } from "antd";

export const ListData = () => {
    const [dataSource, setDataSource] = useState([]);
    const dispatch = useDispatch();
    const {post} = useSelector((state) => ({ ...state.app }));

    useEffect(() => {
        dispatch(getAllPost());
        setDataSource(post[0]);
    }, []);

    const columns = [
        {
            title: 'Post Id',
            dataIndex: 'id'
        },
        {
            title: 'User Id',
            dataIndex: 'userId'
        },
        {
            title: 'Title',
            dataIndex: 'title'
        },
        {
            title: 'Description',
            dataIndex: 'body'
        }
    ]

    return (
        <div>
            {/* <h1> tes </h1> */}
            <Table dataSource={dataSource} columns={columns} />
        </div>
    )
}
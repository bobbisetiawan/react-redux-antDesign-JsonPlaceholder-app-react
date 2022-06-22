import React, { useState, useEffect } from "react";
import LoadingCard from "./LoadingCard";
import { getPost, deletePost, setEdit, updatePost } from "../Redux/Features/postSlice";
import { useSelector, useDispatch } from "react-redux";

import { Button, Card, Input, Space, Alert, Col, Row } from "antd";
import "../App.css";
import { BarChart } from "../Antd/BarChart";
import { PieChart } from "../Antd/PieChart";
import { LineChart } from "../Antd/LineChart";
import { ListData } from "./ListData";

const UserPost = ({ history }) => {
  const [id, setId] = useState();
  const [bodyText, setBodyText] = useState("");

  const {loading, post, edit, body} = useSelector((state) => ({ ...state.app }));

  const dispatch = useDispatch();

  useEffect(() => {
    setBodyText(body);
  }, [body]);

  const onChangeInput = (e) => {
    setId(e.target.value);
  };


  const fetchUserPost = () => {
    if (!id || id < 1) {
      window.alert("Please Enter Post Id");
    } else {
      dispatch(getPost({id}))
      setId("");
    }
  };

  return (
    <div className="container" style={{ margin: 10 }}>
      {/* session 1 */}
      <h1 style={{ textAlign: 'center' }}> <u> User Posts Data </u> </h1> 
      <Row style={{ marginTop: 40 }}>
        <Col span={12}>
          <div style={{ maxWidth: '20%', textAlign: 'center', marginTop: 25, marginBottom: 10, margin: 'auto', backgroundColor: '#20354f', color: 'white'}}>
            BarChart
          </div>
          <div style={{ marginTop: 50, margin: 'auto', maxWidth: 450, height: 200 }}>
            <BarChart />
          </div>
        </Col>

        <Col span={12}>
          <div style={{ maxWidth: '20%', textAlign: 'center', marginTop: 25, marginBottom: 10, margin: 'auto', backgroundColor: '#20354f', color: 'white'}}>
            PieChart
          </div>
          <div style={{ marginTop: 20, margin: 'auto', maxWidth: 450, height: 200 }}>
            <LineChart />
          </div>
        </Col>

        <Col span={24} style={{ marginTop: 20 }}>
          <div style={{ maxWidth: '20%', textAlign: 'center', marginTop: 25, marginBottom: 10, margin: 'auto', backgroundColor: '#20354f', color: 'white'}}>
            LineChart
          </div>
          <div style={{ marginTop: 20, margin: 'auto', maxWidth: '100%', height: 200 }}>
            <PieChart />
          </div>
        </Col>
      </Row>

      <hr/>
      {/* session 2 */}
      <div style={{ textAlign: 'center' }}>
        <h1 style={{ marginTop: 15 }}> <u> Search Posts of JsonPlaceholder API </u> </h1>
        <Input placeholder="Enter Post Id" type="number" onChange={onChangeInput} value={id} style={{ width: "315px" }} />

        <br />

        <Space size="middle" style={{ margin: 10 }}>
          <Button type="primary" onClick={fetchUserPost} className='button-post'>
            Search Posts
          </Button>
          <Button type="primary" onClick={() => history.push("/create")} className='button-post'>
            Create new post
          </Button>
        </Space>
      </div>

      {loading ? (
        <LoadingCard count={1} />
      ) : (
      <>
        {post.length > 0 && (
          <div className="site-card-border-less-wrapper">
            {Object.keys(post[0]).length === 0 ?
            <Alert message="Error" description="Post is Not Found" type="error" showIcon />
            : 
            <Card type="inner" title={post[0].title}>
              <p>Post Id: {post[0].id}</p>
              {edit ? (
                <>
                  <Input.TextArea rows={4} value={bodyText} onChange={(e) => setBodyText(e.target.value)} />
                  <Space size="middle" style={{ marginTop: 5, marginLeft: 5, }}>
                    <Button type="primary" onClick={() => {
                          dispatch(updatePost({
                            id: post[0].id,
                            body: bodyText,
                            title: post[0].title
                          }));
                          dispatch(setEdit({
                            edit: false, body: post[0].body
                          }))
                        }
                    }>
                      Save
                    </Button>
                    <Button onClick={() => dispatch(setEdit({edit: false, body: post[0].body}))}>
                        Cancel
                    </Button>
                  </Space>
                </>
              ) : (
                <span> {post[0].body} </span>
              )}

              <Space size="middle" style={{ margin: 5, float: "right" }}>
                <Button style={{ cursor: "pointer" }} type="primary" disabled={edit} danger onClick={
                  () => dispatch(deletePost({
                    id: post[0].id}))
                  }
                >
                  Delete
                </Button>

                <Button type="primary" onClick={() => dispatch(setEdit({edit: true, body: post[0].body}))}>
                  Edit 
                </Button>
              </Space>
            </Card>
            }
          </div>
        )}
      </>
    )}

      <hr style={{ marginTop: 20 }}/>
      {/* session 3 */}
      <div>
        <h1 style={{ textAlign: 'center' }}> <u> All Post Data </u> </h1> 
        <ListData />
      </div>
    </div>
  );
};

export default UserPost;

import React, { useState } from "react";
import { Input, Button, Card, Space } from "antd";
import LoadingCard from "./LoadingCard";
import { createPost } from "../Redux/Features/postSlice";
import { useSelector, useDispatch } from "react-redux";

const CreatePost = ({ history }) => {
  const [values, setValues] = useState({ title: "", body: "" });

  const [showPost, setShowPost] = useState(false);

  const {post, loading} = useSelector((state) => ({...state.app}));
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createPost({values}));
    setValues({ title: "", body: "" });
    setShowPost(true);
  };

  const showPostBlog = () => {
    return (
      <>
        {loading ? (
          <LoadingCard count={1} />
        ) : (
          <div className="site-card-border-less-wrapper">
            <Card type="inner" title={post[0].title}>
              <p>Post Id: {post[0].id}</p>
              <span>{post[0].body}</span>
            </Card>
          </div>
        )}
      </>
    );
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="container" style={{ marginTop: "20px", textAlign: 'center' }}>
          <h1>Create New Post</h1>

          <Input placeholder="Enter title" type="text" onChange={(e) => setValues({ ...values, title: e.target.value })} value={values.title} style={{ width: "300px", marginBottom: 10 }} />

          <br />
          
          <Input.TextArea placeholder="Enter Body" type="text" onChange={(e) => setValues({ ...values, body: e.target.value })} value={values.body} style={{ width: "300px" }} size="large" />

          <br />

          <Space style={{ margin: 10 }}>
            <Button onClick={() => history.push("/")} danger className="button-post">
              Cancel
            </Button>
            <Button type="primary" htmlType="submit" className="button-post">
              Submit
            </Button>
          </Space>
        </div>
      </form>
      <br />
      <br />
      {showPost && <div>{showPostBlog()}</div>}
    </>
  );
};

export default CreatePost;

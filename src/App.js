import { Switch, Route, Link } from "react-router-dom";
import UserPost from "./UserPost";
import Create from "./UserPost/Create";

import { Layout } from 'antd';
import "./App.css";
import { Information } from "./UserPost/Information";

const { Header, Content } = Layout;

function App() {
  return(
    <Layout>
            <Header>
              <div className="container">
                <ul style={{ float: 'right' }}>
                    <li> <Link to="/"> Demo </Link> </li>
                    <li> <Link to="/information"> Information </Link> </li>
                </ul>
              </div>
            </Header>
            <Content>
              <div className="container">
                <Switch>
                    <Route path="/" exact component={UserPost} /> {/* index js */}
                    <Route path="/create" exact component={Create} /> {/* create js */}
                    <Route path="/information" exact component={Information} /> {/* about js */}
                </Switch>
              </div>
            </Content>
        </Layout>
  );
}
export default App;

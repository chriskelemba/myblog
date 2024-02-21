import './App.css';
import Navbar from './components/Navbar';
import MyBlog from './components/Home';
import Form from './components/Form';
import BlogDetails from './components/BlogDetails';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom/cjs/react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <div className="content">
        <Switch>
          <Route exact path="/">
            <MyBlog/>
          </Route>
          <Route path="/Form">
            <Form/>
          </Route>
          <Route path="/Blog-details/:id">
            <BlogDetails/>
          </Route>
        </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import {Button, Container,Row,Col} from "reactstrap";
import {ToastContainer, toast} from "react-toastify";
import Home from './components/Home';
import Course from './components/Course';
import AllCourses from './components/AllCourses';
import AddCourse from './components/AddCourse';
import Header from './components/Header';
import Menu from './components/Menu';
import {BrowserRouter as Router,Route} from "react-router-dom";
function App() {
  const btnHandle=()=>{
     toast.success("done",{
       position: "top-center",
     });
  };
  return (
    <div>
      <Router>
      <ToastContainer />
      <Container>
        <Header />
        <Row>
          <Col md={4}>
            <Menu />
          </Col>
          <Col md={8}>
            <Route path="/" component={Home} exact />
            <Route path="/add-course" component={AddCourse} exact />
            <Route path="/view-courses" component={AllCourses} exact/>
          </Col>
        </Row>
      </Container>
      </Router>
    </div>
  );
}

export default App;

import React,{useEffect} from 'react'
import {Jumbotron,Container,Button} from "reactstrap";
const Home=()=>{
    useEffect(() => {
       document.title="Home || Welcome on Book Store";
    }, []);
    return (
        <div>
          <Jumbotron className="text-center">
              <h1>Learn Handling the Book Store</h1>
              <p>
                  This is developed by me for backend and frontend purpose on 
                  Handling the Book Store
              </p>
              <Container>
                  <Button color="primary">
                      Start Using
                  </Button>
              </Container>
          </Jumbotron>
        </div>
    )
}
export default Home;
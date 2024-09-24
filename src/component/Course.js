import React from "react";
import {Card,CardBody,CardSubtitle,CardText,Button,CardTitle} from 'reactstrap'

const Course=()=>{
    return <Card
    style={{
      width: '18rem'
    }}
  >
   
    <CardBody>
      <CardTitle tag="h5" className="text-center">
        JAVA
      </CardTitle>
      <CardSubtitle
        className="mb-2 text-muted text-left"
        tag="h6" 
      >
        Java Begineer and Advanced
      </CardSubtitle>
      <CardText className="
      text-left">
    OOPS,Class,Object ,JDBC etc.
      </CardText>
      <Button color="warning">
        Update
      </Button>
      <Button color="danger">
        Delete
      </Button>
    </CardBody>
  </Card>
}

export default Course;
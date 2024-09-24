import React from "react";
import {Card,CardBody,CardSubtitle,CardText,Button,CardTitle} from 'reactstrap'

const Course=({course})=>{
    return <Card
    style={{
      width: '18rem'
    }}
  >
   
    <CardBody>
      <CardTitle tag="h5" className="text-center">
      {course.title}
      </CardTitle>
      <CardSubtitle
        className="mb-2 text-muted text-left"
        tag="h6" 
      >
       {course.subtitle}
      </CardSubtitle>
      <CardText className="
      text-left">
    {course.content}
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
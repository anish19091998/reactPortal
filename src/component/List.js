import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

const List=()=>{
    return(
        <ListGroup>
            <ListGroupItem tag="a" href="/" action>Home</ListGroupItem>
            <ListGroupItem  tag="a" href="/add-course">Add Course</ListGroupItem>
            <ListGroupItem>View Course</ListGroupItem>
            <ListGroupItem>About</ListGroupItem>
            <ListGroupItem>Contact Us</ListGroupItem>

        </ListGroup>
    )
}
export default List;
import React from "react";
import { ListGroup } from "reactstrap";
import {Link} from 'react-router-dom'

const List=()=>{
    return(
        <ListGroup>
            <Link class="list-group-item list-group-item-action" tag="a" to="/" action>Home</Link>
            <Link  class="list-group-item list-group-item-action" tag="a" to="/add-course">Add Course</Link>
            <Link class="list-group-item list-group-item-action" tag="a" to="/view-course">View Course</Link>
            <Link class="list-group-item list-group-item-action">About</Link>
            <Link class="list-group-item list-group-item-action">Contact Us</Link>

        </ListGroup>
    )
}
export default List;
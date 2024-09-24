import React, { Fragment } from "react";
import {Button, Container, Form, FormGroup, Input } from "reactstrap";

const AddCourse=()=>{
    return <Fragment>
        <Form>
            <FormGroup>
                <label for="courseid">Couse id</label>
                <Input  type="text" placeholder="enter course id" id="courseid" name="courseid"/>
            </FormGroup>
            <FormGroup>
                <label for="title">Title</label>
                <Input  type="text" placeholder="enter title here" id="title" name="title"/>
            </FormGroup>

            <FormGroup>
                <label for="subtitle">SubTitle</label>
                <Input  type="text" placeholder="enter title here" id="title" name="title"/>
            </FormGroup>
            <FormGroup>
                <label for="content">Description</label>
                <Input  type="textarea" placeholder="enter description here" id="content" name="content"/>
            </FormGroup>

            <Container className="text-center">
                <Button color="primary">Add Course </Button>
                <Button color="warning"style={{margin:'10px'}}> Clear</Button>
            </Container>
        
        </Form>
    </Fragment>
}
export default AddCourse;
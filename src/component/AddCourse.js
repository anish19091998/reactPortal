import React, { Fragment, useEffect, useState } from "react";
import {Button, Container, Form, FormGroup, Input } from "reactstrap";
import axios from "axios";
import Url from '../apis/Url'

const AddCourse=()=>{

    const [course,setCourse]=useState({});
    const handleForm=(e)=>{
        console.log(course);
        e.preventDefault();
    }
    const postDataToServer=()=>{
        axios.post(`${Url}/abc`,course).then((response)=>{
            console.log(response)

        },(error)=>{
            console.log(error)


        })
    return <Fragment>
        <Form onSubmit={handleForm}>
            <FormGroup>
                <label for="courseid">Couse id</label>
                <Input  type="text" placeholder="enter course id" id="courseid" name="courseid" onChange={(e)=>{
                 setCourse({...course,courseid:e.target.value})
                }}/>
            </FormGroup>
            <FormGroup>
                <label for="title">Title</label>
                <Input  type="text" placeholder="enter title here" id="title" name="title" onChange={(e)=>{
                 setCourse({...course,title:e.target.value})
                }} />
            </FormGroup>

            <FormGroup>
                <label for="subtitle">SubTitle</label>
                <Input  type="text" placeholder="enter title here" id="subtitle" name="subtitle" onChange={(e)=>{
                 setCourse({...course,subtitle:e.target.value})
                }}/>
            </FormGroup>
            <FormGroup>
                <label for="content">Description</label>
                <Input  type="textarea" placeholder="enter description here" id="content" name="content"
                    onChange={(e)=>{
                 setCourse({...course,content:e.target.value})
                }}
                />
            </FormGroup>

            <Container className="text-center">
                <Button color="primary" type="submit">Add Course </Button>
                <Button color="warning" type="reset" style={{margin:'10px'}}> Clear</Button>
            </Container>
        
        </Form>
    </Fragment>
}
}
export default AddCourse;
import React, { useEffect, useState } from "react";
import Course from "./Course";
import axios from 'axios'
import Url from '../apis/Url'

const Courses=()=>{

    useEffect(()=>{
        getAllData();

    },[])

    const [courses,setCourse]=useState([
        
    ])
    const getAllData=()=>{
        axios.get(`${Url}users?page=2`).then((response)=>{
            console.log(response)
            setCourse(response.data.data)

        },(error)=>{
            console.log(error)

        })

    }
    return <div>
    <h1>All courses</h1>
    <p>List of Courses</p>

    {
        courses.length>0?courses.map((item)=>
            <Course course={item}/>
        ):"No Course Available"

    }

    </div>
}
export default Courses;
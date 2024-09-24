import React, { useState } from "react";
import Course from "./Course";

const Courses=()=>{

    const [courses,setCourse]=useState([
        {
            title:'java',subtitle:'begineer&Advance',content:'OOPS,class,object,jdbc ect.'
        },
        {
            title:'python',subtitle:'begineer&Advance',content:'OOPS,flask,jdbc ect.'
        }
    ])
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
import React from "react";
import { Card, CardBody } from "reactstrap";
 function Header(){
    return(
        <div>
        <Card style={{background:'gray'}} >
            <CardBody> <h2 className="text-center my-1" style={{color:"white"}}
       >Welcome to Courses Application</h2></CardBody>
        </Card>

       </div>

    )
}
export default Header ;
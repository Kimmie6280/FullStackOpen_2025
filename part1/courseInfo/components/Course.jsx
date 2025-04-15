import React from "react";
import App from "../App"
import Part from "./Part"
import Header from "./Header"
import Total from "./Total"
import Content from "./Content"

const Course = ({course}) =>{
    return(
        <>
            <Header courseName={course.name}/>
            <Content parts={course.parts}/>
            <Total parts={course.parts}/>
        
        </>
    )
}

export default Course;
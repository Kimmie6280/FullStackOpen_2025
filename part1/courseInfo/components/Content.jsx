import React from "react";
import App from "../App"
import Part from "./Part";
import Total from "./Total";

const Content = ({parts}) =>{

   
    return (
        <>
            {parts.map(part =>(
                <Part key={part.id} part={part}/>
            ))}

          
        </>
    )
}

export default Content;
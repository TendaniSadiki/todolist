import { useState } from "react";
import "./home.css";

export default function Home(){
    const [users, setUsers]= useState(JSON.parse(localStorage.getItem("users")));
    
    return(
        <div className="page">
        <br></br>
        <br></br>
        <br></br>
            <h1>
            Todo List
            </h1>
            <div id="friends">
                <br></br>
                <h3>Todo List</h3>
                
                <ul>
                    <li>list1</li>
                    <li>list2</li>
                    <li>list3</li>
                  
                   
                    
                </ul>
                
            </div>
        </div>
    );
}
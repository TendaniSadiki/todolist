import { useEffect, useState } from "react";
import {CgClose} from "react-icons/cg";
import {CgPen} from "react-icons/cg";
import "./home.css";

export default function Home(){ 
const [user, setUser]= useState(JSON.parse(localStorage.getItem("profileInfo")));
const [todoResult, setTodoResult]= useState([]);
const [todo, setTodo] = useState("");
const [startDate, setStartDate] = useState("");
const [expireDate, setExDate] = useState("");
const [buttonText, setButtonText] = useState("");
const [selectedIndex, setSelectedIndex] =useState(null);

const todoSubmit = () => {
    let todoDetails = {
        name: todo,
        takendate: startDate,
        exDate: expireDate,
        user: user.email,
        id: Date.now()
}

    
  
    if (startDate !== ""&& expireDate !=="" && todo !== "") {
        let storedUserDetails = new Array();
        let storedUsers = JSON.parse(localStorage.getItem("todo"));
        if (storedUsers) {
          storedUserDetails = storedUsers;
          storedUserDetails.push(todoDetails);
        }
        else {
          storedUserDetails.push(todoDetails);
        }
        localStorage.setItem("todo", JSON.stringify(storedUserDetails));
        sortToDoList();
        setStartDate("");
        setExDate("");
        setTodo("");
    } else {
        
      alert('Inputs are empty');
    }



}
const sortToDoList =() => {
    const toDoList = JSON.parse(localStorage.getItem("todo"))
    const toDoArray = new Array();
    for(let x = 0; x < toDoList?.length; x++){
        if(toDoList[x].user === user.email){
            toDoArray.push(toDoList[x])
        }
    }
    setTodoResult(toDoArray)
}
useEffect(()=>{
    sortToDoList();
    
},[])

const handleRemoveItem =(id) => {

   const newArray = todoResult.filter((todoList) => todoList.id !== id);

   let storedUserDetails = new Array();
   let storedUsers = JSON.parse(localStorage.getItem("todo"));
   storedUserDetails = storedUsers.filter((todoList) => todoList.id !== id);
   localStorage.setItem("todo", JSON.stringify(storedUserDetails));
   setTodoResult(newArray)
}
const editHandler =(todoList) =>{
    setTodo(todoList.name)
    setButtonText(
        <div><input type="text" value={todo}  onChange={(text) => {
            setTodo(text.target.value);
          }}></input></div>
    );
}
return(
    <div className="page">
    <br></br>
    <br></br>
    <br></br>
        <h1>
        To  Do List
        </h1>
        <div id="todoContent">
            <br></br>
            <ul>
            <h3>My To Do List</h3>
                <div>
        <div>
            <input className="todo" type="text" placeholder="Enter inputs"
            value={todo}
            onChange={(text) => {
              setTodo(text.target.value);
            }}
            ></input>
            <button onClick={todoSubmit}>Add To List</button>
            <br></br>
            <div className="dateWrapper">
            <div className="datesContent">
            <label>Start date</label>
            <input type="date" 
            min="2022-06-22"
            id="date"
            value={startDate}
            onChange={(text) => {
              setStartDate(text.target.value);
            }}
            >
            </input>
            </div>
            <br></br>
            <div className="datesContent">
            <label>Expiring date</label>
            <input type="date"  
            id="date"
            value={expireDate}
            onChange={(text) => {
              setExDate(text.target.value);
            }}
            >
            </input>
            </div>
            </div>
        </div>
  {todoResult.length > 0 ? ( 
  <div>
   {todoResult.map((todoList,index)=>{
      return(
          <li key={index}>
              <hr/>
          <div className="todoList">
              <div className="left">
              <div>
                  <span>Todo : {selectedIndex === index ?  buttonText : todoList.name}</span>
                  <span>Start Date:{todoList.takendate} </span>
                  <span>Expire Date: {todoList.exDate} </span>
                  <div className="right">
                      {selectedIndex === index ? (<p onClick={()=>setSelectedIndex(null)}>Save</p>):  <i onClick={()=>{editHandler(todoList);setSelectedIndex(index)}}><CgPen/></i>}
             
              <i onClick={ ()=> handleRemoveItem(todoList.id)}><CgClose/></i>
              </div>
              </div>
              </div>
          </div>
      </li>
      )
  }
  )
  }
      </div>
  ): <div className="emptyContent"><h1>Todo list is empty</h1></div>}                        
                    
               
                </div>
               
                
            </ul>
            
        </div>
    </div>
    );
}



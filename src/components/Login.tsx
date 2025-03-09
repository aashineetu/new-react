import * as React from 'react';
import { render } from "@testing-library/react";
import { useEffect, useState } from "react";
import { useDispatch , useSelector} from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';
import {addTask} from '../action/task';
import axios from "axios";
import UserInfo from './UserInfo'
import { loginUser,logoutUser } from '../action/userAction';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";
import Home from './Home';
import About from './About';



export interface LoginProps{  
  color: string;
  onLogin: Function;
  onLogout: Function;
  loginFormData: any;
  handleLogin: (event: React.MouseEvent<HTMLButtonElement>)=> void;
  onFieldChange: any;
  user:any;
  
}
export default function Login(props: LoginProps ) {
    const[color,setColor] = useState("yellow");    
    const[username,setUsername] =useState('');
    const[password,setPassword] =useState('');
    const UserInfo = {
      username:"",
      password:"",      
    }
    

    const dispatch = useDispatch();
    const task = { color: 'blue', changeType: 'added' };
    const[result,setResult]:any=React.useState();    
    const reduxLoginData = useSelector((state:any) => state.user);
    
    React.useEffect(()=>{
      dispatch(addTask(task));    
    })

    async function getUserInfo(){
      await axios.get("https://jsonplaceholder.typicode.com/posts")
       .then((res=>{         
         setResult(res.data);         
     }));
    }
   useEffect(()=>{
      setColor("red");
    },[color]);

    useEffect(()=>{
        setColor("green");
  
      },[color]);    
    
      const captureValues = (event: any) =>{
        props.onFieldChange((prev:any)=>({
          ...prev,
          [event.target.name] : event.target.value
        }));
        
      }          


    
    return(
      <>
   
    <div>
             {!props.user?.isAuthenticated && props?.user?.message && 
                <div style={{textAlign:"center"}}>
                    <p> {props.user?.message} !</p>
                </div>
              }
              
              <div style={{textAlign:"center"}}>
              <h5>Login Form</h5>
              <p style={{color:"green"}}></p>
              User Name: <input type='text' name="username" value={props.loginFormData.username} onChange={captureValues}></input><br/>
              Password : <input type='text' name="password" value={props.loginFormData.password} onChange={captureValues}></input>
              <br/><br/>
                <div style={{textAlign:"center"}}><button onClick={props.handleLogin}>Login</button></div>
                </div>
  
        </div>

      </>
  )  ;

}
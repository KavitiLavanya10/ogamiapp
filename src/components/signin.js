
import React,{useRef,useState} from "react";
import {Link,useNavigate} from "react-router-dom";
import { baseUrl } from "../utils/api";
// import {useRef} from "react";
import "../styles/signin.css";
import axios from "axios";

export default function Signin(){
const formRef=useRef(null)
const[error,setError]=useState(null);
const Navigate = useNavigate(null)
    const handlelogin=(e)=>{
        e.preventDefault();
        const data={
            
            email :formRef.current.email.value,
            password :formRef.current.password.value,
             
        };
        const loginUrl = baseUrl + "/users/login"
        // fetch(registerUrl,{
        //     method:"POST",
        //     headers:{
        //         "content-Type":"application/json"
        //     },
        //     body:JSON.stringify(data)
        // })
        // .then(res=>res.json())
        // .then(result=>console.log(result))
        // .catch(err=>console.log(err))


        

        //axios post request
        axios.post(loginUrl,data)
        .then(result=>{
            const{data}=result;
            console.log(data)
            if(data.token){
const keys= Object.keys(data)
keys.forEach(e=>localStorage.setItem(e,data[e]))
  setError(null)
  Navigate("/")
            }
            else{
                setError(data)
            }
        })
        .catch(err=>console.log(err))
    }
    return(
        <div className="main">
             <Link to ={"/signup"}>signup</Link>
            <Link to ={"/"}><h1>Home</h1></Link>



          <form className="form1"  ref={formRef}>
            <h1 className="heading1">Registration Form</h1>
        
            
            <div>
                <label>Email:</label>
                <input type="text" name="email"/>
            </div>
            <div>
                <label>password</label>
                <input name="password" type="password"/>
            </div>
          
            <button onClick={handlelogin} className="regbtn" >Login</button>
          </form>
        </div>
    );
}




















import react from "react"
import {Link} from "react-router-dom"
import { baseUrl } from "../utils/api";
import {useRef} from "react"
import "../styles/signup.css"
import axios from "axios";

export default function Signup(){
const formRef=useRef(null)
    const handleRegister=(e)=>{
        e.preventDefault();
        const data={
            name :formRef.current.name.value,
            Phoneno:formRef.current.Phoneno.value,
            email :formRef.current.email.value,
            password :formRef.current.password.value,
             access:formRef.current.name.value,
        }
        const registerUrl = baseUrl + "/users/register"
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
        axios.post(registerUrl,data)
        .then(result=>console.log(result))
        .catch(err=>console.log(err))
    }
    return(
        <div className="main">
            <Link to ={"/signin"}>signin</Link>
            <Link to ={"/"}>Home</Link>



          <form className="form1"  ref={formRef}>
            <h1 className="heading1">Registration Form</h1>
          <div>
                <label>Name</label>
                <input type="text" name="name"/>
            </div>
            <div>
                <label>Phoneno:</label>
                <input type="text" name="Phoneno"/>
            </div>
            <div>
                <label>Email:</label>
                <input type="text" name="email"/>
            </div>
            <div>
                <label>password</label>
                <input name="password" type="password"/>
            </div>
            <div>
                <label>access</label>
                <input name="access" type="text"/>
            </div>
            <button onClick={handleRegister} className="regbtn" >Register</button>
          </form>
        </div>
    );
}




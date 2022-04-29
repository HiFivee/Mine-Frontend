import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useNavigate();

    async function signUp()
    {
        let item = {email, password};
        console.warn(item);

        let result = await fetch ("http://localhost:8080/api/account", {
            method : 'POST',
            body : JSON.stringify(item),
            headers : {
                "Content-Type" : 'application/json',
                "Accept" : 'application/json'
            },
        });

        result = await result.json();
        localStorage.setItem("user-info",JSON.stringify(result));
        history.push("/add");
    }

    return (
        <div>
            <h1>Signup Page</h1>
            <input type = "text" placeholder="email" vlaue = {email} onChange = {(e) => setEmail(e.target.value)} />
            <br />
            <input type = "password" placeholder="password" value = {password} onChange = {(e) => setPassword(e.target.value)} />
            <br />
            <button>Sign Up</button>
        </div>
    )
}

export default Register;

/*
fetch('https://0bfabe7c-c087-4dcb-bf72-9ab5e3650b87.mock.pstmn.io', {
            
        method : "POST",
        body : JSON.stringify({
            username : id,
            password : pwd,
            name : name,
        }),
        headers : {
            'Content-Type' : 'application/json',
            'Accept' : 'application/json'
        }
    })
    .then(res => res.json())
    .then(res => {
        console.log(res)
    })
*/
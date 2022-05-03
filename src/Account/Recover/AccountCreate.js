import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AccountCreate() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useNavigate();

    async function signUp()
    {
        let item = {email, password};
        console.warn(item);

        let result = await fetch ("https://0bfabe7c-c087-4dcb-bf72-9ab5e3650b87.mock.pstmn.io/api/account", {
            method : 'POST',
            body : JSON.stringify(item),
            headers : {
                "Content-Type" : 'application/json',
                "Accept" : 'application/json'
            },
        });
        
        result = await result.json();
        localStorage.setItem("create-user-info",JSON.stringify(result));
        history.push("/add");
    }

    return (
        <div>
            <h1>Signup Page</h1>
            <input type = "text" placeholder="email" vlaue = {email} onChange = {(e) => setEmail(e.target.value)} />
            <br />
            <input type = "password" placeholder="password" value = {password} onChange = {(e) => setPassword(e.target.value)} />
            <br />
            <button onClick = {() => signUp()}>Sign Up</button>
            <br/>
            <button onClick = {() => history(-1)}>Back</button>
        </div>
    )
}

export default AccountCreate;

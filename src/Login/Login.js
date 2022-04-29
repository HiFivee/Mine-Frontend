import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {
    const [email,setEmail]=useState("");
    const [password, setPassword] = useState("");
    const history = useNavigate();
    
    useEffect(() => {
        if (localStorage.getItem('user-infor')){
            history.push("/add");
        }
    },[])
    
    async function login(){
        
        let item = {email, password};
        console.warn(item);
        
        let result = await fetch("http://localhost:8080/api/login",{
            mehtod: 'POST',
            body: JSON.stringify(item),
            headers:{
                "Content-Type": "application/json",
                "Accept":'application/json'
            },
        });

        result = await result.json()
        localStorage.setItem("user-info",JSON.stringify(result));
        history.push("/add");
    }

    return (
        <div>
            <h1> Login Page</h1>
            <div>
            <input type="text" placeholder="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
            <br/>
            <input type="password" placeholder="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
            <br/>
            <button>Login</button>
            <br/>
            <button onClick = {() => history(-1)}>Back</button>
            </div>
        </div>
    )

}

export default Login;
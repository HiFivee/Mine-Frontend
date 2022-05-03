import {useState, useEffect} from "react";
import Informs from "../../component/Informs.js";

function AccountFetch() {
    const [loading, setLoading] = useState(true);
    const [informs, setInforms] = useState([]);

    async function Profile()
    {
        let json = await(
            await fetch ("https://0bfabe7c-c087-4dcb-bf72-9ab5e3650b87.mock.pstmn.io/api/account"
            )
        ).json();

        setInforms(json.email);
        setLoading(false);
    };

    console.log(informs);

    useEffect(() => {
        Profile();
    },[]);

    return(
        <div>
          {loading ? (
            <h1>Loading...</h1> 
          ) : (
            <div>
              {informs && informs.map(inform => (
                <Informs
                  key = {inform.email}
                  email = {inform.email}
                  nickname = {inform.nickname} 
                  phone = {inform.phone}
                  address = {inform.address}
                  position = {inform.position}
                  message = {inform.message}
                  techStack = {inform.techStack}
                  experience = {inform.experience}
                />
              ))} 
            </div>
          )}
        </div>
      );
}

export default AccountFetch;

/*
method : 'GET',
            body : JSON.stringify(),
            headers : {
                "Content-Type" : 'application/json',
                "Accept" : 'application/json'
            },
            */

/*
localStorage.setItem("user-inform",JSON.stringify(result));
        history.push("/add");
        */
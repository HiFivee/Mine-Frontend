import {useState, useEffect} from "react";
import axios, { axiosPrivate } from '../../utils/api/axios';

function AccountFetch() {
    const [loading, setLoading] = useState(true);
    const [informs, setInforms] = useState([]);

    const INFORM_URL = '/api/account';

    async function Profile()
    {
      try{
        const response = await axios.get(INFORM_URL)
        const userID = response.data.email; // userID

        const response2 = await axios.get(INFORM_URL+userID);
        console.log(response2.data)
      } catch (err) {
        console.log(err);
      }
        
        // const response = await axios.get(INFORM_URL,
        //   JSON.stringify(),
        //   {
        //       headers: { 'Content-Type': 'application/json'},
        //       withCredentials: false,
        //   });

        // console.log(JSON.stringify(response?.data));

        // setInforms(response);
        // setLoading(false);
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
                <div
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
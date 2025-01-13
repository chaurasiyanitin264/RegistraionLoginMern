import { useState,useEffect } from "react";
import { Link,Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Dashboard=()=>{
    const [username,setUsername]=useState("");
    const [useremail,setUseremail]=useState("");
    const navigate=useNavigate();
    useEffect(()=>{
    
        if (localStorage.getItem("name")==null)
        {
            navigate("/home");
        }
        else 
        {
        setUsername(localStorage.getItem("username"));
        setUseremail(localStorage.getItem("useremail"));
        }
    }, [])
    
    
    
    const logout=()=>{
        localStorage.clear();
        navigate("/home")
    
    }
    return(
        <>
                    <h1> User DashBoard</h1>
           Welcome : {username} Email : {useremail}
           <button onClick={logout}>Logout</button>
           <hr size="3" color="yellow"/>

          <tabe>
            <tr>
                <td> 

                <Link to="repass"> Reset Password</Link>

                </td>
                <td> 

                   <Outlet/>

                </td>
            </tr>
          </tabe>
         

        </>
    )
}
export default Dashboard;
import { Navigate } from "react-router-dom";


const PrivateRoute=({isloggedin,children})=>{

    if(isloggedin){
        return children
    }
    
       return <Navigate to="/login"/>
    

    
}


export default PrivateRoute;
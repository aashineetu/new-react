import * as React from 'react';
import { useNavigate,BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from './Home';
import About from './About';
import Login from './Login';
import Profile from './Profile';
import Header from './Header';
import { loginUser,logoutUser } from '../action/userAction';
import { useDispatch , useSelector} from "react-redux";
interface UserInfo {
  username: string;
  password: string;
}

interface User {
isAuthenticated: boolean;
 message: string;
 userInfo :UserInfo;
}

export default function MyApp()  {
    
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const UserInfo = {
    username:"",
    password:"",      
  }
  const[loginFormData,setloginFormData] =React.useState('');
  const [user, setUser] = React.useState<User>();
    const reduxLoginData = useSelector((state:any) => state.user);

  const setAuthData= (user: User) => {    
    setUser(user);   
  }

  const logout =(event: React.MouseEvent<HTMLButtonElement>)  => {   
    dispatch(logoutUser());      
  }
  const handleFieldsChange = (fieldValue: any) => {
    setloginFormData(fieldValue);
  };
  const handleLogin = (event: React.MouseEvent<HTMLButtonElement>) => {
    dispatch(loginUser(loginFormData));       
   
  }
    // Sync Redux state with local state
  React.useEffect(() => {
    setUser(reduxLoginData);    
  }, [reduxLoginData]); // Runs when Redux state updates

  React.useEffect(() => {
    if (user?.isAuthenticated) {
      navigate('/profile');
      setUser(reduxLoginData);console.log("store: "+reduxLoginData.user.username);
    }else{
      navigate('/login');
    }
  }, [user?.isAuthenticated]);

  React.useEffect(() => {
    if (!user?.isAuthenticated) {
      navigate('/login');
      setUser(reduxLoginData);
    }
  }, [user?.message==='Logged Out']);
  
  
    return(
      <>           
                   
     
        <Header onLogout={logout} isAuthenticated={user?.isAuthenticated} username={user?.userInfo?.username}/> 

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login user={user} onFieldChange={setloginFormData} handleLogin={handleLogin} loginFormData={loginFormData} onLogin={setAuthData} onLogout={logout} color='red'/>} />
        <Route path="/profile" element={<Profile user={user}/>} />
        <Route path="/about" element={<About />} />
      </Routes>   
      <nav>
        
         
        <Link   to="/">Home</Link><br/>        
       
      </nav>    
    </>
  )  ;

}
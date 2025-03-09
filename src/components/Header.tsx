import * as React from 'react';
import { Link } from "react-router-dom";


export interface HeaderProps{  
  isAuthenticated: boolean|undefined;
  username: string | undefined;
  onLogout: (event: React.MouseEvent<HTMLButtonElement>)=> void;
}
export default function Header(props:HeaderProps ) {   
    
    return(
      <>
      <header style={{ padding: "10px", background: "#eee", display: "flex", justifyContent: "space-between" }}>
      <h2>MyApp</h2>
      <nav>
        {props.isAuthenticated ? (
          <>
            <span style={{ marginRight: "10px" }}>Welcome, {props.username}</span>
            <button onClick={props.onLogout}>Sign Out</button>
          </>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </nav>
    </header>


      </>
  )  ;

}
import * as React from 'react';

export interface ProfileProps{  

  user:any;
  
}
export default function Profile(props: ProfileProps ) {   
    
    return ( 
      <>
      This is Profile!!!
      {props.user?.isAuthenticated &&
                     <div style={{textAlign:"center"}}>
                         <h2> {props.user.message}, {props.user.user.username}!</h2>
                     </div>
}
      </>
  )  ;

}
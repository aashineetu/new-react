import * as React from 'react';
import UserData from "../interfaces/UserData"

interface UserInfoProps{
data: UserData[];
}
export default function UserInfo(props: UserInfoProps) {
return(
    <div>
    {
        props &&
    props.data.map((element : UserData) => 
        <div key={element.id} className="row">
        <div className="col-1">{element.userId}</div>
        <div className="col-6">{element.title}</div>     
      </div>
    )
    }
    </div>
);
}
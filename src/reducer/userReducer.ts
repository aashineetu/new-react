
const initialstate = {
  user: null,
  isAuthenticated: false,
  message:"",
}
function userReducer(state = initialstate, action:any){
    console.log("Previous State:", state);
    console.log("Action:", action);
  
  switch (action.type) {
    case 'LOGIN_SUCCESS':
        if(action.payload.username == 'neetu'){
        return {
            ...state,
            user: action.payload,
            isAuthenticated: true,
            message: "Welcome "
        }
    }else{
        return {
            ...state,
            user: null,
            isAuthenticated: false,
            message: "You've entered wrong credentials "
        }
    }

    case 'LOGOUT_SUCCESS':
        return {                        
            user: null,
            isAuthenticated: false,
            message: "You're successfully logged Out"
        };
    default:
        return state;
}


}
export default userReducer;

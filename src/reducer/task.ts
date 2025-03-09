
const initialState = {
  status: 'initial',
  colors: []
}

export default function appReducer(state = initialState, action:any) {
  switch (action.type) {
    case 'ADD_TASK': 
    let changeType = action.payload.changeType;
    let color = action.payload.color;
      return { ...state,
        status:'modified',
        colors: [color],
        changeType: changeType        
      }    
    
    default:
      return state
  }
}
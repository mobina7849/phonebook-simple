const mobinaReducer=(state,action)=>{
    const{type,payload}=action;
    switch (type){
        case "DeleteContact":
            return state.filter(item=>item.id==payload.id)
        case "AddNewContact":
            return [...state,payload]
        case "UpdateContact":
            
    }
}